function numberRange(number) {
  let divisionPoint = [0, 50, 100];

  for (i = 0; i < divisionPoint.length; i++) {
    if (number <= divisionPoint[i]) {
      if (i === 0) {
        console.log(`${number} is less than ${divisionPoint[i]}`);
        return i;
      } else {
        console.log(`${number} is between ${divisionPoint[i - 1]} and ${divisionPoint[i]}`);
        return i;
      }
    } else if (number > divisionPoint[divisionPoint.length - 1]) {
      console.log(`${number} is greater than ${divisionPoint[divisionPoint.length - 1]}`);
      return i;
    }
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);