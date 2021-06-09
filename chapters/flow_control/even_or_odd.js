function evenOrOdd(inputNumber) {
  if (!Number.isInteger(inputNumber)) {
      console.log('Input number is not an integer.');
      return;
    } else {
      (inputNumber % 2) === 0 ? console.log('even') : console.log('odd');
  }
}

evenOrOdd(-4.4);
evenOrOdd(3);
evenOrOdd(-4);