#Brian Mitchell and Henry Fellows

assert = require 'assert'
arrayizer = require('./routes/gpa').arrayizer
makeGPA = require('./routes/gpa').makeGPA
parseIntArray = require('./routes/gpa').parseIntArray

describe "testing arrayizer", ->
  it "should return [4, 4, 2, 5]", ->
    assert.deepEqual(arrayizer(4, 4, 2, 5), [4, 4, 2, 5])

describe "testing parseIntArray", ->
  it "should return [4, 4, 2, 5]", ->
    assert.deepEqual(parseIntArray(arrayizer("4", "4", "2", "5")), [4, 4, 2, 5])

describe "testing gpa calculator", ->
  it "should return 3.327", ->
    assert.equal(makeGPA([3.3, 4.0, 2.7, 3.0], [5, 4, 2, 4]), 3.327)

describe "testing arrayizer and makeGPA together", ->
  it "should return 3.327", ->
    assert.equal(makeGPA(arrayizer(3.3, 4.0, 2.7, 3.0), arrayizer(5, 4, 2, 4)), 3.327)
  it "should return 4.000", ->
    assert.equal(makeGPA(arrayizer(4.0, 4.0, 4.0, 4.0), arrayizer(5, 5, 5, 5)), 4.000)