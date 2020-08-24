const numberChecker = () => {
  for (let i = 0; i <= 200; i++) {
    if (i % 10 === 0 && i % 7 === 0) {
      console.log('KPMG ITS');
    } else if (i % 10 === 0) {
      console.log('KPMG');
    } else if (i % 7 === 0) {
      console.log('ITS');
    } else {
      console.log(i);
    }
  }
};

numberChecker();
