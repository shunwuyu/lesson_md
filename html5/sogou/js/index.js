(function(){
  let interval = setInterval(increment, 100)
  function increment () {
    let num = parseFloat((($('#loadingPercent')[0].offsetWidth / 200).toFixed(2)*1000)/10) + '%'
    $('#loading')[0].innerHTML = num
    if (num === '100%') {
      clearInterval(interval)
      $('#loaddingWrap').addClass("displaynone")
      $('#minWrap').removeClass('displaynone')
    }
  }
  var t = setTimeout(function(){
    clearTimeout(t);
    $("#introductionTxt").fadeOut(1500,function(){
      $("#indexWrap").fadeIn()
    });
  },2000)
 
}())