import { describe, expect, test } from '@jest/globals';

import { getTotalTollFee } from './getTotalTollFee';
import { TolledVehicles, TollFreeVehicles } from '../types';

//More specific tests could added here for improved coverage, also other vehicle types that are tolled are not handled.
describe('getTotalTollFee should return a fee of zero for a toll free vehicle', () => {
  test('Should return 0 for a toll free vehicle', () => {
    expect(
      getTotalTollFee({ type: TollFreeVehicles.Diplomat }, [
        new Date('2025-02-17T06:29:00+01:00'),
      ])
    ).toBe(0);
  });
});

describe('getTotalTollFee should return a fee of zero for a toll free day', () => {
  test('Should return 0 for a toll free day', () => {
    expect(
      getTotalTollFee({ type: TolledVehicles.Car }, [
        new Date('2025-02-16T11:30:00+01:00'),
      ])
    ).toBe(0);
  });
});

describe('getTotalTollFee should return a correctly calculated fee for normal day and a tolled vehicle', () => {
  test('Should return a fee of 13 for a car passing through tolls 3 times, at 14:30, 14:59 and 15:15', () => {
    expect(
      getTotalTollFee({ type: TolledVehicles.Car }, [
        new Date('2025-02-17T14:30:00+01:00'),
        new Date('2025-02-17T14:59:00+01:00'),
        new Date('2025-02-17T15:15:00+01:00'),
      ])
    ).toBe(13);
  });

  test('Should return a fee of 44 for a car passing through tolls 3 times, at 07:30, 15:59 and 18:15', () => {
    expect(
      getTotalTollFee({ type: TolledVehicles.Car }, [
        new Date('2025-02-17T07:30:00+01:00'),
        new Date('2025-02-17T15:59:00+01:00'),
        new Date('2025-02-17T18:15:00+01:00'),
      ])
    ).toBe(44);
  });

  test('Should return a fee of 52 for a car passing through tolls 4 times, at 07:30, 10:30, 15:59 and 18:15', () => {
    expect(
      getTotalTollFee({ type: TolledVehicles.Car }, [
        new Date('2025-02-17T07:30:00+01:00'),
        new Date('2025-02-17T10:30:00+01:00'),
        new Date('2025-02-17T15:59:00+01:00'),
        new Date('2025-02-17T18:15:00+01:00'),
      ])
    ).toBe(52);
  });

  test('Should return a fee of 37 for a car passing through tolls 6 times, at 10:00, 12:29, 13:45, 14:30, 14:59 and 15:15', () => {
    expect(
      getTotalTollFee({ type: TolledVehicles.Car }, [
        new Date('2025-02-17T10:00:00+01:00'),
        new Date('2025-02-17T12:29:00+01:00'),
        new Date('2025-02-17T13:45:00+01:00'),
        new Date('2025-02-17T14:30:00+01:00'),
        new Date('2025-02-17T14:59:00+01:00'),
        new Date('2025-02-17T15:15:00+01:00'),
      ])
    ).toBe(37);
  });

  test('Should return a fee of 0 for a car passing through tolls once, before 06:00', () => {
    expect(
      getTotalTollFee({ type: TolledVehicles.Car }, [
        new Date('2025-02-17T05:59:00+01:00'),
      ])
    ).toBe(0);
  });

  test('Should return a fee of 0 for a car passing through tolls once, after 18:30', () => {
    expect(
      getTotalTollFee({ type: TolledVehicles.Car }, [
        new Date('2025-02-17T18:33:00+01:00'),
      ])
    ).toBe(0);
  });

  test('Should return a fee of 0 for a car passing through tolls twice, at 05:35 and 18:30', () => {
    expect(
      getTotalTollFee({ type: TolledVehicles.Car }, [
        new Date('2025-02-17T05:35:00+01:00'),
        new Date('2025-02-17T18:30:00+01:00'),
      ])
    ).toBe(0);
  });
});
