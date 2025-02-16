import { Vehicle } from '../types';
import { getTollFee } from './getTollFee';

const MAX_DAY_TOLL_FEE = 60 as const;

/**
 * Get the total fee for a vehicle passing multiple tolls
 * @param vehicle the vehicle passing the toll
 * @param dates the date and time of the toll passes
 * @returns the total fee for the vehicle as a number
 */
export function getTotalTollFee(vehicle: Vehicle, dates: Date[]): number {
  //Potential improvement: If handling very large amounts of dates, research if
  //there is a faster function to go through this, like a regular for loop.
  //I do think this way is alot more expressive and readable.
  let totalFee = 0;
  let hourIntervalStart = dates[0];

  dates.forEach((date, index, self) => {
    if (totalFee >= MAX_DAY_TOLL_FEE) return MAX_DAY_TOLL_FEE; //return totalFee = MAX_DAY_TOLL_FEE does this return from the whole function only brake the loop? might need to set totalfee as well

    const currentTime = date.getTime();

    const minuteDiff = (currentTime - hourIntervalStart.getTime()) / 1000 / 60;
    const currentFee = getTollFee(vehicle, date);

    if (index === 0) {
      totalFee += currentFee;
      return;
    }

    if (minuteDiff > 60) {
      hourIntervalStart = dates[index];
      totalFee += currentFee;
      return;
    }

    if (minuteDiff <= 60) {
      const prevFee = getTollFee(vehicle, hourIntervalStart);
      const biggerFee = Math.max(currentFee, prevFee);
      totalFee = totalFee - prevFee + biggerFee;
      return;
      // return (totalFee = totalFee - prevFee + biggerFee);
      // we could do this but with a focus on readability we shouldnt
      // https://eslint.org/docs/latest/rules/no-return-assign
    }
  });

  return totalFee;
}
