module.exports = function reverse (n) {
  return parseInt(Array.from(n.toString(10)).reverse().join(''));
}
