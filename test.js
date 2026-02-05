function getMultiplesStats(f, m) {
  const multiples = [];

  for (let x of m) {
    for (let y of f) {
      if (y !== 0 && x % y === 0) {
        multiples.push(x);
        break; 
      }
    }
  }

  if (multiples.length === 0) {
    return { sum: 0, min: null, max: null, avg: null };
  }

  const sum = multiples.reduce((acc, val) => acc + val, 0);
  const min = Math.min(...multiples);
  const max = Math.max(...multiples);
  const avg = sum / multiples.length;

  return { sum, min, max, avg };
}

document.getElementById("calculateBtn").addEventListener("click", function () {
  const f = document.getElementById("f").value
    .split(",")
    .map(s => Number(s.trim()))
    .filter(n => !isNaN(n));

  const m = document.getElementById("m").value
    .split(",")
    .map(s => Number(s.trim()))
    .filter(n => !isNaN(n));

  const stats = getMultiplesStats(f, m);

  if (stats.sum === 0) {
    document.getElementById("result").innerText = "No multiples found.";
  } else {
    document.getElementById("result").innerText =
      `Sum: ${stats.sum}\nMin: ${stats.min}\nMax: ${stats.max}\nAverage: ${stats.avg}`;
  }
});
