function logSerial(n) {
  if (n == 0) {
    return;
  }
  console.log(n);
  logSerial(n - 1);
}

// logSerial(10);

function logSerial(from, to) {
  if (from == to) {
    return;
  }
  console.log(from);
  logSerial(from + 1, to);
}

// logSerial(1, 200);

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(4));
