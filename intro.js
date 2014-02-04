// Generated by CoffeeScript 1.6.3
(function() {
  var Person, assert, bob, charCount, inExclusiveRange, loop1, outsideOfRange, tim, wordSlice, wordSplice;

  charCount = function(x) {
    var i, temp, _i, _len;
    temp = 0;
    for (_i = 0, _len = x.length; _i < _len; _i++) {
      i = x[_i];
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

  assert = require('assert');

  Person = (function() {
    function Person(options) {
      this.name = options.name, this.age = options.age, this.height = options.height, this.DOB = options.DOB;
    }

    return Person;

  })();

  tim = new Person({
    name: tim,
    age: 7,
    height: 22,
    DOB: "1/1/1912"
  });

  bob = new Person({
    name: bob,
    age: 8,
    height: 124,
    DOB: "7/24/2895"
  });

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

}).call(this);

/*
//@ sourceMappingURL=intro.map
*/
