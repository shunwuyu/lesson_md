const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern);
console.log(words('I love javaScript!!'));
console.log(words('python, javaScript & coffee'));