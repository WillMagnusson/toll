import { describe, expect, test } from '@jest/globals';

import { isTollFreeDate } from './freeDates';

describe('isTollFreeDate should return false for a regular day', () => {
  test('should return false for a regular friday', () => {
    expect(isTollFreeDate(new Date('2025-02-14'))).toBe(false);
  });
  test('should return false for a regular monday', () => {
    expect(isTollFreeDate(new Date('2025-02-17'))).toBe(false);
  });
});

describe('isTollFreeDate should return true for weekends and holidays', () => {
  test('should return true for a saturday', () => {
    expect(isTollFreeDate(new Date('2025-02-15'))).toBe(true);
  });

  test('should return true for a sunday', () => {
    expect(isTollFreeDate(new Date('2025-02-16'))).toBe(true);
  });

  test('should return true for first of january', () => {
    expect(isTollFreeDate(new Date('2025-01-01'))).toBe(true);
  });
  test('should return true for last of december', () => {
    expect(isTollFreeDate(new Date('2025-12-31'))).toBe(true);
  });
  test('Should return true for first of may', () => {
    expect(isTollFreeDate(new Date('2025-05-01'))).toBe(true);
  });
});
