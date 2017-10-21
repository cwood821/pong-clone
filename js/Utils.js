function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function isBetween(obj1, obj2) {
  const lessThanObj1Y = (obj2.y + obj2.height) > obj1.y;
  const lessThanObj1Height = obj2.y < (obj1.y + obj1.height);

  if ( lessThanObj1Y && lessThanObj1Height)  {
    return true;
  }
  return false;
}

function overlap(obj1, obj2) {

  const lessThanObj1Y = (obj2.y + obj2.height) > obj1.y;
  const lessThanObj1Height = obj2.y < (obj1.y + obj1.height);
  const lessThanObj1X = (obj2.x + obj2.width) > obj1.x;
  const lessThanObj1Width = obj2.x < (obj1.x + obj1.width);

  if ( lessThanObj1Y && lessThanObj1Height && lessThanObj1X && lessThanObj1Width)  {
    return true;
  }
  return false;
}
