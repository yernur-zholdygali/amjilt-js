function call(n) {
  if (n.length === 0) return 0;

  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n[i];
  }

  return sum / n.length;
}

const numArr = [1, 2, 3, 4, 5];
const result = call(numArr);
console.log(result); 