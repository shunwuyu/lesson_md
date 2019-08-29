var array = [1, 2, 1, 1, '1'];

function unique(array) {
  return [...new Set(array)];
  //  return Array.from(new Set(array));
}

function unique (arr) {
  const seen = new Map()
  return arr.filter((a) => !seen.has(a) && seen.set(a, 1))
}

console.log(unique(array));