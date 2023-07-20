function fibonacci(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1 || num === 2) {
    return 1;
  } else {
    let prev = 1;
    let curr = 1;
    for (let i = 3; i <= num; i++) {
      let next = prev + curr;
      prev = curr;
      curr = next;
    }
    return curr;
  }
}









module.exports = fibonacci;
