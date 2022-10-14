var script = document.getElementsByTagName("script");
for (var i = 0; i < script.length; i++) {
  if (script[i].getAttribute("version")) {
    if (script[i].getAttribute("version") != localStorage["version"]) {
      localStorage.clear();
      localStorage["version"] = script[i].getAttribute("version");
    }
  }
}

function loadJs(jsUrl) {
  if(!localStorage[jsUrl]){
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET",jsUrl,false);
    xmlhttp.send();
    localStorage[jsUrl] = xmlhttp.responseText;
  }
  return localStorage[jsUrl]
}

function loadCss(url) {
  if(!localStorage[url]){
      var xmlhttp=new XMLHttpRequest();
      xmlhttp.open("GET",url,false);
      xmlhttp.send();
      localStorage[url] = xmlhttp.responseText;
  }
  var s = document.createElement("style");
  s.innerHTML = localStorage[url];
  document.getElementsByTagName("head")[0].appendChild(s)
}