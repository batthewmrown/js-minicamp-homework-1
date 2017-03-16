//Do not change any of the function names

function multiplyByTen(num) {
  var product = num * 10;
  return product;
}

function subtractFive(num) {
  var minus = num - 5;
  return minus;
}

function areSameLength(str1, str2) {
  if (str1.length === str2.length) {
    return true;
  }
  return false;
}

function areEqual(x, y) {
  if (x === y) {
    return true;
  }
  return false;
}

function lessThanNinety(num) {
  if (num < 90) {
    return true;
  }
  return false;
}

function greaterThanFifty(num) {
  if (num > 50) {
    return true;
  }
  return false;
  //return true if num is greater than fifty
  //otherwise return false
  //code here
}

function add(x, y) {
  var addition = x + y;
  return addition;//add x and y together and return the value
  //code here
}

function subtract(x, y) {
  var sub = x - y;
  return sub;
  //subtract y from x and return the value
  //code here
}

function divide(x, y) {
  var div = x/y;
  return div;
  //divide x by y and return the value
  //code here
}

function multiply(x, y) {
  var times = x * y;
  return times;
  //multiply x by y and return the value
  //code here
}

function getRemainder(x, y) {
  var remainder = x % y;
  return remainder;
  //return the remainder from dividing x by y
  //code here
}

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
  //return true if num is even
  //otherwise return false
  //code here
}

function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  }
  return false;
  //return true if num is false
  //otherwise return false
  //code here
}

function square(num) {
  var squared = Math.pow(num, 2);
  return squared;
  //square num and return the new value
  //code here
}

function cube(num) {
  var cubed = Math.pow(num, 3);
  return cubed;
  //cube num and return the new value
  //code here
}

function raiseToPower(num, exponent) {
  var exp = Math.pow(num, exponent);
  return exp;
  //raise num to whatever power is passed in as exponent
  //code here
}

function roundNumber(num) {
  var round = Math.round(num);
  return round;
  //round num and return it
  //code here
}

function roundUp(num) {
  var up = Math.ceil(num);
  return up;
  //round num up and return it
  //code here
}

function addExclamationPoint(str) {
  var loud = str + '!';
  return loud;
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  //code here
}

function combineNames(firstName, lastName) {
  var fullName = firstName + ' ' + lastName;
  return fullName;
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  //code here
}

function getGreeting(name) {
  var cat = 'Hello ' + name + '!';
  return cat;
   //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  //code here
}

//If you can't remember these area formulas then head over to Google or look at the test code.

function getRectangleArea(length, width) {
  var area = length * width;
  return area;
  //return the area of the rectangle by using length and width
  //code here
}

function getTriangleArea(base, height) {
  var area = (base * height) / 2;
  return area;
  //return the area of the triangle by using base and height
  //code here
}

function getCircleArea(radius) {
  var area = Math.PI * (Math.pow(radius, 2));
  return Math.round(area);
  //return the rounded area of the circle given the radius
  //code here
}

function getRectangularPrismVolume(length, width, height) {
  var area = length * width * height;
  return area;
  //return the area of the 3D rectangular prism given the length, width, and height
  //code here
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
