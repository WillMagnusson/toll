import { Vehicle } from '../types';
import { isTollFreeDate, isTollFreeVehicle } from './freeDates';

/**
 * Get a fee for a single vehicle passing a single toll
 * @param vehicle the vehicle passing the toll
 * @param date the date and time of the toll pass
 *
 * @returns the fee for the vehicle as a number
 */
export function getTollFee(vehicle: Vehicle, date: Date): number {
  if (isTollFreeDate(date) || isTollFreeVehicle(vehicle)) return 0;

  const minutes = date.getMinutes();
  const hour = date.getHours();

  //outside active hours, no fee
  if (hour < 6) return 0;
  if (hour > 18 || (hour === 18 && minutes >= 30)) return 0;

  //morning fees
  if (hour === 6 && minutes < 30) return 8;
  if (hour === 6 && minutes >= 30) return 13;
  if (hour === 7) return 18;
  if (hour === 8 && minutes < 30) return 13;

  //during the day fee (8:30-14:59)
  const midDayTime = (hour === 8 && minutes >= 30) || (hour > 8 && hour <= 14);
  if (midDayTime) return 8;

  //afternoon fees
  if (hour === 15 && minutes < 30) return 13;
  //not sure about this, reference cs file has both 15:00-15:29 as fee=13 and 15:00-16:59 as fee=18 which conflicts.
  //Before prod launch ask responsible product owner about clarification.
  if (hour === 15 && minutes >= 30) return 18;
  if (hour === 16) return 18;
  if (hour === 17) return 13;
  if (hour === 18 && minutes < 30) return 8;

  return 0;
}
