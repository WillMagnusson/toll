import { TolledVehicles, Vehicle } from '../types';
import { isTollFreeDate, isTollFreeVehicle } from './freeDates';
import { getTollFee } from './getTollFee';

const MAX_TOLL_FEE = 60 as const;

/**
 * Get the total fee for a vehicle passing multiple tolls
 * @param vehicle the vehicle passing the toll
 * @param dates the date and time of the toll passes
 * @returns the total fee for the vehicle as a number
 */
export function getTotalTollFee(vehicle: Vehicle, dates: Date[]): number {
  //todo implmement
  return 0;

  //loop through dates, call getTollFee for each instance
  //sum up the fees, if sum goes over 60 exit loop and return 60
  //else return sum

  //I should probably use reduce for this, seems like a perfekt usecase
}
