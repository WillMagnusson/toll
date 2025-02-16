import { TolledVehicles, Vehicle } from '../types';
import { getTollFee } from './getTollFee';

const MAX_DAY_TOLL_FEE = 60 as const;

/**
 * Get the total fee for a vehicle passing multiple tolls
 * @param vehicle the vehicle passing the toll
 * @param dates the date and time of the toll passes
 * @returns the total fee for the vehicle as a number
 */
//this implementation is probably wrong, since the hour interval
//is renewed everytime a toll is passed during an hour. Which means
//that a car could keep driving past tolls every hour to avoid paying more than one
//toll every day.
export function getTotalTollFee(vehicle: Vehicle, dates: Date[]): number {
  let totalFee = 0;

  dates.forEach((date, index, self) => {
    if (totalFee >= MAX_DAY_TOLL_FEE) return MAX_DAY_TOLL_FEE; //return totalFee = MAX_DAY_TOLL_FEE does this return from the whole function only brake the loop? might need to set totalfee as well

    let prevDate;
    if (index > 0) prevDate = self[index - 1];

    const currentTime = date.getTime();
    const prevTime = prevDate?.getTime();
    const minuteDiff = (currentTime - prevTime) / 1000 / 60;

    const currentFee = getTollFee(vehicle, date);
    // console.log('currentFee:---------------------', currentFee);

    //NaN <= 60 is false, so we wont diff if this is the first iteration
    if (minuteDiff <= 60) {
      const prevFee = getTollFee(vehicle, prevDate);
      const biggerFee = Math.max(currentFee, prevFee);
      // console.log('prevFee:---------------------', prevFee);
      // console.log('biggerFee:---------------------', biggerFee);
      //   console.log('totalFee before:---------------------', totalFee);
      totalFee = totalFee - prevFee + biggerFee;
      //   console.log('totalFee after:---------------------', totalFee);
      return;
    }

    totalFee += currentFee;
  });

  return totalFee;
}

//todo organise comments
//Potential improvement: If handling very large amounts of dates, research if
//there is a faster function to go through this, like a regular for loop.
//I do think this way is alot more expressive and readable.
//A possibly more optimized version. But there is something to be said abut readability.
//to keep a simple implementation focusing on readability for future improvements.
//If handling data for a very large number of toll passes, this could be a faster solution.

// const res = getTotalTollFeeOptimized({ type: TolledVehicles.Car }, [
//   // const res = getTotalTollFee({ type: TolledVehicles.Car }, [
//   new Date('2025-02-17T10:00:30+01:00'),
//   new Date('2025-02-17T12:29:30+01:00'),
//   new Date('2025-02-17T13:45:30+01:00'),
//   new Date('2025-02-17T14:30:00+01:00'),
//   new Date('2025-02-17T14:59:00+01:00'),
//   new Date('2025-02-17T15:15:00+01:00'),
//   new Date('2025-02-17T15:15:00+01:00'),
//   new Date('2025-02-17T15:15:00+01:00'),
//   new Date('2025-02-17T15:15:00+01:00'),
//   new Date('2025-02-17T15:15:00+01:00'),
// ]);
// console.log('res:---------------------', res);
