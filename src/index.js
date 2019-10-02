module.exports = function multiply(first, second) {
  return String(BigInt(first) * BigInt(second));
}

// multiply('1', '1') // -> '1', because 1 * 1 === 1
// multiply('2', '2') // -> '4', because 2 * 2 === 4
// multiply('5', '10') // -> '50', because 5 * 10 === 50
// multiply('10000', '10000') // -> '100000000'
// multiply('329568934658432659586', '58379426534596'), '19240045408977038918943543720037256'