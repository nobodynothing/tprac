// module fakearray.js
module.exports = {
  length: 0,
  pop: function() {
    var returnValue = this[this.length - 1];
    delete this[this.length-1];
    this.length--;
    return returnValue;
  },
  push: function(input) {
    this[this.length] = input;
    this.length++;
    return this.length;
  }
  // more fake-array methods here...
};
