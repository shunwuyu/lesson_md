const os = require('os');

class IdGenerator {
  static generator() {
    let id = "";
    let hostName = "";
    try {
      var interfaces = os.networkInterfaces();
      for(var devName in interfaces){
        var iface = interfaces[devName];
        for(var i=0;i<iface.length;i++){
            var alias = iface[i];
            if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
              hostName = alias.address;
              break;
            }
        }
      }
      let tokens = hostName.split(".");
      if (tokens.length > 0) {
         hostName = tokens[tokens.length - 1]; 
      }
      // console.log(hostName);
      id = hostName + '-' + Date.now() + '-' + Math.round(Math.random()*10000)
    } catch(e) {
      console.log(e)
    }
    return id
  }
}

console.log(IdGenerator.generator());