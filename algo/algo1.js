/*
Write a function which, given two angles from a triangle, will return the value of the third one.
(Reminder: the sum of the values of the three angles in a triangle is **always** 180°)
Ex: 
thirdAngle(90, 30) should return 60
thirdAngle(20, 80) should return 80
*/

function thirdAngle(a, b) {
  const angle = 180 - (a + b);
  // if (angle <= 0) {
  //   return 'Invalid angle'
  // }
  // return angle
  const checkIfPositive = angle <= 0 ? 'Invalid angle' : angle
  return checkIfPositive

}

console.log(thirdAngle(90, 30));
console.log(thirdAngle(20, 80));
console.log(thirdAngle(95550, 90));