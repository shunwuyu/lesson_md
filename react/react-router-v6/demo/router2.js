(function(){   
    // 状态对象（state object） 标题（title） 地址（URL）
    // history.replaceState(null,null,'');//最开始的状态，采用replace直接替换
    document.getElementById('router').innerHTML = '<p>显示内容区域</p>';
    [...document.querySelectorAll('a')].forEach(
        link => link.addEventListener('click', function() {
            var text = this.text;
            document.getElementById('router').innerHTML = '<p>'+ text +'</p>'
            history.pushState(null,null,'#/'+text);
        })
    )
    // $('#router').html('<p>显示内容区域</p>')
    // $('a').on('click',function(){
    //     console.log(this.text)
    //     var text = this.text;
    //     $('#router').html('<p>'+ text +'</p>')
    //     history.pushState(null,null,'#/'+text);
    // })    
  })()