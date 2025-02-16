import { TolledVehicles } from '../types';

import { getTotalTollFee } from './getTotalTollFee';
export { getTotalTollFee } from './getTotalTollFee';

const res = getTotalTollFee({ type: TolledVehicles.Car }, [
  new Date('2025-02-17T14:30:00+01:00'),
  new Date('2025-02-17T14:59:00+01:00'),
  new Date('2025-02-17T15:15:00+01:00'),
]);
console.log('res:---------------------', res);
const res2 = getTotalTollFee({ type: TolledVehicles.Car }, [
  new Date('2025-02-17T07:30:00+01:00'),
  new Date('2025-02-17T15:59:00+01:00'),
  new Date('2025-02-17T18:15:00+01:00'),
]);
console.log('res2:---------------------', res2);

const res3 = getTotalTollFee({ type: TolledVehicles.Car }, [
  new Date('2025-02-17T07:30:00+01:00'),
  new Date('2025-02-17T10:30:00+01:00'),
  new Date('2025-02-17T15:59:00+01:00'),
  new Date('2025-02-17T18:15:00+01:00'),
]);
console.log('res3:---------------------', res3);

const res4 = getTotalTollFee({ type: TolledVehicles.Car }, [
  new Date('2025-02-17T10:00:30+01:00'), //8
  new Date('2025-02-17T12:29:30+01:00'), //8
  new Date('2025-02-17T13:45:30+01:00'), //8
  new Date('2025-02-17T14:30:00+01:00'), //8
  new Date('2025-02-17T14:59:00+01:00'), //8
  new Date('2025-02-17T15:15:00+01:00'), //13
]);
console.log('res4:---------------------', res4);
