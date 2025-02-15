import { Vehicle } from '../types';
import { isTollFreeDate, isTollFreeVehicle } from './freeDates';

const MAX_TOLL_FEE = 60 as const;

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
  const hours = date.getHours();

  //lowest fee is 8, highest is 18
}

/**
 * Get the total fee for a vehicle passing multiple tolls
 * @param vehicle the vehicle passing the toll
 * @param dates the date and time of the toll passes
 * @returns the total fee for the vehicle as a number
 */
export function getTotalTollFee(vehicle: Vehicle, dates: Date[]): number {
  //todo implmement
  return 0;
}
