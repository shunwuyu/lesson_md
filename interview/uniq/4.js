function distinct(array) {
  return Array.from(new Set(array));
}

function unique(array) {
  return [...new Set(array)];
}

let unique = (a) => [...new Set(a)]