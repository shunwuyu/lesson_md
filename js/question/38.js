function trim(str) {
  if (str && typeof str === "string") {
    return str.replace(/(^\s*)|(\s*)$/g,""); //去除前后空白符
  }
}

console.log(trim("  fdfdf    "));