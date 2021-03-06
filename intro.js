// Generated by CoffeeScript 1.7.1
(function() {
  var assert, changeToTwo, charCount, cheese, countOperands, exists, inExclusiveRange, isNo, loop1, outsideOfRange, squareThis, sum, swap, testing, testvar, wordSlice, wordSplice,
    __slice = [].slice;

  charCount = function(x) {
    var temp, _i, _ref;
    temp = 0;
    for (_i = 0, _ref = x.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; 0 <= _ref ? _i++ : _i--) {
      temp++;
    }
    return temp;
  };

  loop1 = function(x) {
    var i, temp, _i;
    temp = "";
    for (i = _i = 1; 1 <= x ? _i <= x : _i >= x; i = 1 <= x ? ++_i : --_i) {
      temp += i.toString();
    }
    return temp;
  };

  outsideOfRange = function(num, min, max) {
    if (num < min || num > max) {
      return true;
    } else {
      return false;
    }
  };

  wordSlice = function(word) {
    var arr;
    arr = [];
    arr = word.split(" ");
    return arr;
  };

  wordSplice = function(words) {
    var i, temp, _i, _ref;
    temp = "";
    for (i = _i = 0, _ref = words.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
      temp += words[i];
    }
    return temp;
  };

  inExclusiveRange = function(x) {
    var i, _i;
    for (i = _i = 34; _i < 67; i = ++_i) {
      if (x === i) {
        return true;
      }
    }
    return false;
  };

  isNo = function(x) {
    if (x === false) {
      return true;
    }
    return false;
  };

  squareThis = function(x) {
    return Math.pow(x, 2);
  };

  testvar = "this is a test";

  testing = null;

  cheese = 564;

  exists = function(word) {
    return word != null;
  };

  swap = function(arr, arr2) {
    arr = arr2;
    return arr;
  };

  changeToTwo = function(input) {
    input = 2;
    return input;
  };

  sum = function() {
    var first, i, rest, toReturn, _i, _ref;
    first = arguments[0], rest = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    toReturn = first;
    for (i = _i = 0, _ref = rest.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
      toReturn += rest[i];
    }
    return toReturn;
  };

  countOperands = function() {
    var operands;
    operands = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return operands.length;
  };

  assert = require('assert');

  describe("testing loops", function() {
    it("should return 14", function() {
      return assert.equal(charCount("this is a text"), 14);
    });
    it("should return 1", function() {
      return assert.equal(loop1(1), "1");
    });
    return it("should return 12345", function() {
      return assert.equal(loop1(5), "12345");
    });
  });

  describe("Ranges, slicing, and splicing", function() {
    it("should return true", function() {
      return assert.equal(outsideOfRange(4, 5, 9), true);
    });
    it("should return false", function() {
      return assert.equal(outsideOfRange(2, -3, 6), false);
    });
    it("should return [this,is,a,test]", function() {
      return assert.deepEqual(wordSlice("this is a test"), ["this", "is", "a", "test"]);
    });
    it("should return thisisatest", function() {
      return assert.equal(wordSplice(["this", "is", "a", "test"]), "thisisatest");
    });
    return it("should return true", function() {
      return assert.equal(inExclusiveRange(54), true);
    });
  });

  describe("testing operators", function() {
    it("should return true", function() {
      return assert.equal(isNo(false), true);
    });
    it("should return no", function() {
      return assert.equal(isNo(true), false);
    });
    return it("should return 81", function() {
      return assert.equal(squareThis(9), 81);
    });
  });

  describe("testing existential operator", function() {
    it("should return false", function() {
      return assert.equal(exists(testing), false);
    });
    it("should return true", function() {
      return assert.equal(exists(testvar), true);
    });
    return it("should return false", function() {
      return assert.equal(exists(cheese), true);
    });
  });

  describe("testing destructuring", function() {
    it("should return [1, 2, 'three', 4]", function() {
      return assert.deepEqual(swap([testvar, testing, cheese], [1, 2, "three"]), [1, 2, "three"]);
    });
    it("should return [null, 'cool beans', 50670]", function() {
      return assert.deepEqual(swap([cheese, testing, testvar], [null, "cool beans", 50670]), [null, "cool beans", 50670]);
    });
    return it("should return 2", function() {
      return assert.equal(changeToTwo(cheese), 2);
    });
  });

  describe("Testing splats", function() {
    it("should sum the operands: 10", function() {
      return assert.equal(sum(1, 2, 3, 4), 10);
    });
    it("should sum the operands: 66", function() {
      return assert.equal(sum(5, 6, 3, 4, 2, 4, 5, 2, 5, 6, 9, 7, 8), 66);
    });
    return it("should count the number of operands: 4", function() {
      return assert.equal(countOperands(1, 2, "fish", [1, 2, 3]), 4);
    });
  });

}).call(this);

//# sourceMappingURL=intro.map
