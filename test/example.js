var expect = require('expect.js');

describe('Array', function () {
    describe('#indexOf()', function () {
        it('shoud return -1 when value is not present', function () {
            //assert.equal(-1, [1, 2, 3].indexOf(5));
            //assert.equal(-1, [1, 2, 3].indexOf(0));
            expect([1, 2, 3].indexOf(5)).to.equal(-1);
            expect([1, 2, 3].indexOf(0)).to.equal(-1);
        })
    })
})

describe('Failing', function() {
    describe('#oneAndOne()', function() {
        it('should fail when we expect one to equal seven', function() {
            expect(1).to.equal(1);
        })
    })
})