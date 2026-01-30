
const f = document.getElementById("f").value.split(",").map(Number);
const m = document.getElementById("m").value.split(",").map(Number);

function sumOfMultiples(f, m) {
  let sum = 0;
  for (let x of m) {
    for (let y of f) {
      if (y !== 0 && x % y === 0) {
        sum += x;
        break; 
      }
    }
  }
  return sum;
}
document.getElementById("calculateBtn").addEventListener("click", function() {
  const total = sumOfMultiples(f, m);
  document.getElementById("result").innerText = "Sum of multiples: " + total;
});
