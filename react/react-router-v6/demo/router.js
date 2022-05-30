(function() {
    var cur = '首页'
    const router = document.getElementById('router')
    history.replaceState(cur,cur,'')
    document.querySelectorAll('a').forEach(function(link){
        link.addEventListener('click', function() {
            cur = this.text
            router.innerHTML = cur
            history.pushState(cur, cur, '#/' + cur)
        })
    })

    window.addEventListener('popstate',function(e){
        console.log(e.state);
       var state = e.state;
       router.innerHTML = state
    })
})()