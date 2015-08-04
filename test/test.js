var fakeArray = require('../fakearray.js');
var chai = require('chai');
var expect = chai.expect;

describe('My fake array object', function() {
  describe('The pop method', function() {

    before(function() {
      fakeArray[0] = 1;
      fakeArray[1] = 2;
      fakeArray[2] = 3;
      fakeArray.length = 3;
    });

    it('should return the final element', function() {
      expect(fakeArray.pop()).to.equal(3);
    });
  });
});

describe('My fake array object', function() {
  describe('The push method', function() {

    before(function() {
      fakeArray[0] = 1;
      fakeArray[1] = 2;
      fakeArray[2] = 3;
      fakeArray.length = 3;
    });

    it('should increase length by one', function() {
      expect(fakeArray.push(4)).to.equal(fakeArray.length = 4);
    });
  });
});
