const host = "http://localhost:8888"
const containerSize = {
  height: 300,
  width: 300
};
const qrcodeSize = {
  height: 240,
  width: 240
};



function geneQRCode() {
  let url = `${host}/qrcode/gene`
  return axios.get(url).then(res => {
    return res.data
  }).catch(err => {
    return err
  });
}

function checkQRCodeStatus(qrcodeId) {
  let url = `${host}/qrcode/check?qrcodeId=${qrcodeId}`
  return axios.get(url).then(res => {
    return res.data
  }).catch(err => {
    return err
  });
}


const genImage = (src) => {
  const qrcodeImage = document.createElement('img');
  qrcodeImage.class = 'authing__qrcode';
  qrcodeImage.src = src;
  qrcodeImage.width = qrcodeSize.width;
  qrcodeImage.height = qrcodeSize.height;
  return qrcodeImage;
};



function startAppAuthScanning(options) {
  let { onPollingStart, onResult } = options;
  const unloading = () => {
    const child = document.getElementById('authing__spinner');
    qrcodeNode.removeChild(child);
  };

  let mount = "authing__app-scan-qrcode-root-node";
  let interval = 2000;
  let mountNode = mount;
  qrcodeNode = document.getElementById(mountNode);
  let qrcodeWrapper;
  if (!qrcodeNode) {
    qrcodeNode = document.createElement('div');
    qrcodeNode.id = 'authing__app-scan-qrcode-root-node';
    qrcodeNode.style = `z-index: 65535;position: fixed;background: #fff;width: ${containerSize.width}px;height: ${containerSize.height}px;left: 50%;margin-left: -${containerSize.width / 2}px;display: flex;justify-content: center;align-items: center;top: 50%;margin-top: -${containerSize.height / 2}px;border: 1px solid #ccc;`;
    // console.log(qrcodeNode);
    document.getElementsByTagName('body')[0].appendChild(qrcodeNode);
  } else {
    qrcodeNode.style = 'position:relative';
  } 
  // console.log(qrcodeNode)
  

  const styleNode = document.createElement('style');
  const style = '#authing__retry a:hover{outline:0px;text-decoration:none;}#authing__spinner{position:absolute;left:50%;margin-left:-6px;}.spinner{margin:100px auto;width:20px;height:20px;position:relative}.container1>div,.container2>div,.container3>div{width:6px;height:6px;background-color:#00a1ea;border-radius:100%;position:absolute;-webkit-animation:bouncedelay 1.2s infinite ease-in-out;animation:bouncedelay 1.2s infinite ease-in-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.spinner .spinner-container{position:absolute;width:100%;height:100%}.container2{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}.container3{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}.circle1{top:0;left:0}.circle2{top:0;right:0}.circle3{right:0;bottom:0}.circle4{left:0;bottom:0}.container2 .circle1{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.container3 .circle1{-webkit-animation-delay:-1.0s;animation-delay:-1.0s}.container1 .circle2{-webkit-animation-delay:-0.9s;animation-delay:-0.9s}.container2 .circle2{-webkit-animation-delay:-0.8s;animation-delay:-0.8s}.container3 .circle2{-webkit-animation-delay:-0.7s;animation-delay:-0.7s}.container1 .circle3{-webkit-animation-delay:-0.6s;animation-delay:-0.6s}.container2 .circle3{-webkit-animation-delay:-0.5s;animation-delay:-0.5s}.container3 .circle3{-webkit-animation-delay:-0.4s;animation-delay:-0.4s}.container1 .circle4{-webkit-animation-delay:-0.3s;animation-delay:-0.3s}.container2 .circle4{-webkit-animation-delay:-0.2s;animation-delay:-0.2s}.container3 .circle4{-webkit-animation-delay:-0.1s;animation-delay:-0.1s}@-webkit-keyframes bouncedelay{0%,80%,100%{-webkit-transform:scale(0.0)}40%{-webkit-transform:scale(1.0)}}@keyframes bouncedelay{0%,80%,100%{transform:scale(0.0);-webkit-transform:scale(0.0)}40%{transform:scale(1.0);-webkit-transform:scale(1.0)}}';
  styleNode.type = 'text/css';
  if (styleNode.styleSheet) {
    styleNode.styleSheet.cssText = style;
  } else {
    styleNode.innerHTML = style;
  }
  document.getElementsByTagName('head')[0].appendChild(styleNode);


  const loading = () => {
    console.log(qrcodeNode);
    qrcodeNode.innerHTML = '<div id="authing__spinner" class="spinner"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>';
    
  };

  let start = () => {
    loading();
    geneQRCode().then((res) => {
      if (res.code !== 200) {
        
      } else {
        const { qrcodeId, qrcodeUrl } = res.data
        console.log(qrcodeId, qrcodeUrl);
        if (qrcodeNode) {
          qrcodeWrapper = document.createElement('div');
          qrcodeWrapper.id = 'authing__qrcode-wrapper';
          qrcodeWrapper.style = 'text-align: center;position: relative;';
          const qrcodeImage = genImage(qrcodeUrl);
          qrcodeImage.onload = () => {
            unloading();
            startPollingQRCodeStatus({
              qrcodeId,
              interval,
              onPollingStart,
              onResult
            })
          }
          qrcodeWrapper.appendChild(qrcodeImage);
          qrcodeNode.appendChild(qrcodeWrapper);
        }

      }
    })
  }
  start();
}


function startPollingQRCodeStatus(options) {
  let { qrcodeId, interval = 800, onPollingStart, onResult } = options
  let intervalNum = 0

  intervalNum = setInterval(() => {
    if (onPollingStart) {
      onPollingStart(intervalNum)
    }

    checkQRCodeStatus(qrcodeId)
    .then(res  => {
      console.log(res);
      if (res.code === 200) {
        if (onResult) {
          onResult(res)
        }
      }
    })
  }, interval)
}