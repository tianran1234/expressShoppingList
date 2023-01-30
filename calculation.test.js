const {findMean, findMedian, findMode} = require('./calculation');

describe('#findMean', function() {
    it('finds the mean of an array of numbers', function() {
        expect(findMean([2,4,6,8]).toEqual(5));
    })
})

describe('#findMedian', function() {
    it('finds the median of an even set', function() {
        expect(findMedian([1,3,5,7]).toEqual(4));
    })
    it('finds the median of an odd set', function() {
        expect(findMedian([1,3,5,7,9]).toEqual(5));
    })
})

describe('#findMode', function() {
    it('finds the mode', function() {
        expect(findMode([1,1,1,2,2,3]).toEqual(1));
    })
})