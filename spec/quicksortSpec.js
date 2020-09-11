'use strict';

describe('Sort', () => {
  let sort = new Sort();
  describe('#quicksort', () => {
    it('returns array when array is empty', () => {
      expect(sort.quicksort([])).toEqual([]);
    })
    it('returns array when array has one element', () => {
      expect(sort.quicksort([1])).toEqual([1]);
    })
    it('returns a sorted array when array has more than one element', () => {
      expect(sort.quicksort([2,1])).toEqual([1,2]);
    })
    it('returns a sorted array when array has more than one element', () => {
      expect(sort.quicksort([2,1,8,5,2])).toEqual([1,2,2,5,8]);
    })
  })
})
