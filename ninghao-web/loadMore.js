(function(){
  function list() {
    $.ajax({
      url: 'https://www.easy-mock.com/mock/5ca2c29464930718b239eb94/lm/lvmeng/test',
      // url: './test.json',
      type: 'GET',
      success: function (res) {
        console.log(res.data)
        for (let n of res.data.lists) {
          $('#lesson').append(`<li class="span4 mix">
            <div class="thumbnail">
              <a title="${n.title}">
                <div style="background-color: ${n.bgc}; text-align: center" class="p20">
                  <img src="${n.imgUrl}">
                </div>
                <div>
                  <h3>${n.title}</h3>
                  <p>${n.desc}</p>
                </div>
              </a>
              <div class="meta">
                <span>${n.date}</span>
                <span class="pull-right">${n.time}</span>
              </div>
            </div>
          </li>`)
        }
      }
    })
  }
  list()
  $('#load-more').click(function(){
    list()
  })

  // ------
  $('.nav li a').click(function(){
    if (!$(this).hasClass('active')) {
      $('.nav li a').removeClass('active')
      $(this).addClass('active')
    }
    if ($(this).hasClass('course')) {
      if($(this).hasChildNodes()) {
        $(this).removeChild(deleteN.lastChild);
        }
      $.ajax({
        url: '/course.json',
        type: 'GET',
        success: function (res) {
          console.log(res.data)
          for (let n of res.data.lists) {
            $('#lesson').append(`<li class="span4 mix">
              <div class="thumbnail">
                <a title="${n.title}">
                  <div style="background-color: ${n.bgc}; text-align: center" class="p20">
                    <img src="${n.imgUrl}">
                  </div>
                  <div>
                    <h3>${n.title}</h3>
                    <p>${n.desc}</p>
                  </div>
                </a>
                <div class="meta">
                  <span>${n.date}</span>
                  <span class="pull-right">${n.time}</span>
                </div>
              </div>
            </li>`)
          }
        }
      })
    }
  })
})()