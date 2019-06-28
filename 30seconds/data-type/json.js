const isValidJSON = str => {
  try {
    const o = JSON.parse(str)
    return o != null && typeof o === "object"
  } catch (e) {
    return false;
  }
};

console.log(isValidJSON('{"a":1}'));