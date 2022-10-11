function sortStr3(inputStr){
  let yellowCount = 0;
  let redCount = 0;
  let blueCount = 0;
  for (let i = 0; i < inputStr.length; i++) {
      switch(inputStr[i]){
          case "黄":
              yellowCount++;
              break;
          case "红":
              redCount++;
              break;
          case "蓝":
              blueCount++;
              break;
      }
  }
  return "黄".repeat(yellowCount)+"红".repeat(redCount)+"蓝".repeat(blueCount);

}