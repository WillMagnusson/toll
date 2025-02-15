import { DayAsNumber, TollFreeVehicles, Vehicle } from '../types';
import { getHolidays } from '../api';

const MAX_TOLL_FEE = 60 as const;
const TOLL_FREE_DAYS = [DayAsNumber.Sunday, DayAsNumber.Saturday];

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

//todo implement unit tests
const res = isTollFreeDate(new Date());
const res2 = isTollFreeDate(new Date('2025-02-16'));
const res3 = isTollFreeDate(new Date('2025-01-01'));
const res4 = isTollFreeDate(new Date('2025-12-31'));

const res5 = isTollFreeDate(new Date('2025-02-14'));
const res6 = isTollFreeDate(new Date('2025-02-17'));
const res7 = isTollFreeDate(new Date('2025-02-18'));

console.log(
  'results:---------------------',
  res,
  res2,
  res3,
  res4,
  res5,
  res6,
  res7
);
