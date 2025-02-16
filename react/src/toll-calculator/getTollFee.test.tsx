import { describe, expect, test } from '@jest/globals';

import { getTollFee } from './getTollFee';
import { TolledVehicles, TollFreeVehicles } from '../types';

//This test file should be broken up into multiple describes to improve structure and readability.
//I. e. break them up with one describe testing cases that should return 0, and another with fee values.
//Could also add additional tests for toll free vehicles/days.
describe('getTollFee should return the correct fee for a given date and vehicle', () => {
  test('Should return 0 for a saturday or sunday during mid day', () => {
    expect(
      getTollFee(
        { type: TolledVehicles.Car },
        new Date('2025-02-15T11:34:00+01:00')
      )
    ).toBe(0);
    expect(
      getTollFee(
        { type: TolledVehicles.Car },
        new Date('2025-02-16T11:34:00+01:00')
      )
    ).toBe(0);
  });

  test('Should return 0 for a holiday date during mid day', () => {
    expect(
      getTollFee(
        { type: TolledVehicles.Car },
        new Date('2025-01-01T11:34:00+01:00')
      )
    ).toBe(0);
  });

  test('Should return 0 for a time earlier than 06:00', () => {
    expect(
      getTollFee(
        { type: TolledVehicles.Car },
        new Date('2025-02-17T05:59:00+01:00')
      )
    ).toBe(0);
  });

  test('Should return 0 for a time later than 18:30', () => {
    expect(
      getTollFee(
        { type: TolledVehicles.Car },
        new Date('2025-02-17T18:30:00+01:00')
      )
    ).toBe(0);
    expect(
      getTollFee(
        { type: TolledVehicles.Car },
        new Date('2025-02-17T23:59:00+01:00')
      )
    ).toBe(0);
  });

  test('Should return 8 for a time from 06:00 to 06:29:59', () => {
    expect(
      getTollFee(
        { type: TolledVehicles.Car },
        new Date('2025-02-17T06:29:00+01:00')
      )
    ).toBe(8);
  });

  test('Should return 0 for a time from 06:00 to 06:29:59 with a toll free vehicle', () => {
    expect(
      getTollFee(
        { type: TollFreeVehicles.Diplomat },
        new Date('2025-02-17T06:29:00+01:00')
      )
    ).toBe(0);
  });

  test('Should return 13 for a time from 06:30 to 07:00', () => {
    expect(
      getTollFee(
        { type: TolledVehicles.Car },
        new Date('2025-02-17T06:59:00+01:00')
      )
    ).toBe(13);
  });

  test('Should return 18 for a time from 07:00 to 08:00', () => {
    expect(
      getTollFee(
        { type: TolledVehicles.Car },
        new Date('2025-02-17T07:59:00+01:00')
      )
    ).toBe(18);
  });

  test('Should return 13 for a time from 08:00 to 08:30', () => {
    expect(
      getTollFee(
        { type: TolledVehicles.Car },
        new Date('2025-02-17T08:29:30+01:00')
      )
    ).toBe(13);
  });

  test('Should return 8 for a time between 8:30 and 14:59', () => {
    expect(
      getTollFee(
        { type: TolledVehicles.Car },
        new Date('2025-02-17T10:00:30+01:00')
      )
    ).toBe(8);
    expect(
      getTollFee(
        { type: TolledVehicles.Car },
        new Date('2025-02-17T12:29:30+01:00')
      )
    ).toBe(8);
    expect(
      getTollFee(
        { type: TolledVehicles.Car },
        new Date('2025-02-17T13:45:30+01:00')
      )
    ).toBe(8);
    expect(
      getTollFee(
        { type: TolledVehicles.Car },
        new Date('2025-02-17T14:30:00+01:00')
      )
    ).toBe(8);
    expect(
      getTollFee(
        { type: TolledVehicles.Car },
        new Date('2025-02-17T14:59:00+01:00')
      )
    ).toBe(8);
  });

  test('Should return 13 for a time between 15:00 and 15:29', () => {
    expect(
      getTollFee(
        { type: TolledVehicles.Car },
        new Date('2025-02-17T15:25:00+01:00')
      )
    ).toBe(13);
  });

  test('Should return 18 for a time between 15:30 and 16:59', () => {
    expect(
      getTollFee(
        { type: TolledVehicles.Car },
        new Date('2025-02-17T15:30:00+01:00')
      )
    ).toBe(18);
    expect(
      getTollFee(
        { type: TolledVehicles.Car },
        new Date('2025-02-17T15:59:00+01:00')
      )
    ).toBe(18);
    expect(
      getTollFee(
        { type: TolledVehicles.Car },
        new Date('2025-02-17T16:15:00+01:00')
      )
    ).toBe(18);
    expect(
      getTollFee(
        { type: TolledVehicles.Car },
        new Date('2025-02-17T16:45:00+01:00')
      )
    ).toBe(18);
  });

  test('Should return 13 for a time between 17:00 and 17:59', () => {
    expect(
      getTollFee(
        { type: TolledVehicles.Car },
        new Date('2025-02-17T17:00:00+01:00')
      )
    ).toBe(13);
    expect(
      getTollFee(
        { type: TolledVehicles.Car },
        new Date('2025-02-17T17:59:00+01:00')
      )
    ).toBe(13);
  });

  test('Should return 8 for a time between 18:00 and 18:29', () => {
    expect(
      getTollFee(
        { type: TolledVehicles.Car },
        new Date('2025-02-17T18:00:00+01:00')
      )
    ).toBe(8);
    expect(
      getTollFee(
        { type: TolledVehicles.Car },
        new Date('2025-02-17T18:29:00+01:00')
      )
    ).toBe(8);
  });
});
