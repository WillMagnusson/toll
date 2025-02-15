import { DayAsNumber, TollFreeVehicles, Vehicle } from '../types';
import { getHolidays } from '../api';

const TOLL_FREE_DAYS = [DayAsNumber.Sunday, DayAsNumber.Saturday];

/**
 * Check if a vehicle is toll free
 * @param vehicle the vehicle passing the toll
 * @returns true if the vehicle is toll free
 */
export function isTollFreeVehicle(vehicle: Vehicle): boolean {
  //todo implmement
  if (!vehicle) return false;

  return Object.values(TollFreeVehicles).includes(vehicle.type);
}

/**
 * Check if a date is toll free
 * @param date the date and time of the toll pass
 * @returns true if the date is toll free
 */
export function isTollFreeDate(date: Date): boolean {
  if (TOLL_FREE_DAYS.includes(date.getDay())) return true;

  const freeDates = getTollFreeDates();

  if (freeDates.includes(date.toLocaleDateString())) return true;

  return false;
}

export function getTollFreeDates() {
  //toLocaleDateString for local time (CET) to get correct dates. This kind of stuff
  //should be handled by a package like dayjs to make it easier to work with,
  //and to avoid easy to implement but hard to catch bugs.
  const holidays = getHolidays().map((holiday) =>
    new Date(holiday).toLocaleDateString()
  );
  return holidays;
}
