import { TolledVehicles } from '../types';

import { getTotalTollFee } from './getTotalTollFee';
export { getTotalTollFee } from './getTotalTollFee';

const res = getTotalTollFee({ type: TolledVehicles.Car }, [
  new Date('2025-02-17T14:30:00+01:00'),
  new Date('2025-02-17T14:59:00+01:00'),
  new Date('2025-02-17T15:15:00+01:00'),
]);
console.log('res:---------------------', res); //13

const res2 = getTotalTollFee({ type: TolledVehicles.Car }, [
  new Date('2025-02-17T07:30:00+01:00'),
  new Date('2025-02-17T15:59:00+01:00'),
  new Date('2025-02-17T18:15:00+01:00'),
]);
console.log('res2:---------------------', res2); //44

const res3 = getTotalTollFee({ type: TolledVehicles.Car }, [
  new Date('2025-02-17T07:30:00+01:00'), //18
  new Date('2025-02-17T10:30:00+01:00'), //8
  new Date('2025-02-17T15:59:00+01:00'), //18
  new Date('2025-02-17T18:15:00+01:00'), //8
]);
console.log('res3:---------------------', res3); //52

const res4 = getTotalTollFee({ type: TolledVehicles.Car }, [
  new Date('2025-02-17T10:00:30+01:00'), //8
  new Date('2025-02-17T12:29:30+01:00'), //8
  new Date('2025-02-17T13:45:30+01:00'), //8 - 24 so far, 3 separate hours
  new Date('2025-02-17T14:30:00+01:00'), //8 - inside hour window, so no change
  new Date('2025-02-17T14:59:00+01:00'), //8 - new hour window, add 8 = 32
  new Date('2025-02-17T15:15:00+01:00'), //13 - not a new hour window, remove 8 and add 13 = 37
]);
console.log('res4:---------------------', res4); //37
