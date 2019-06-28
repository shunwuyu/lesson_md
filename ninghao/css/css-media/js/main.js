(function () {
  /**
   * navbar
   */
  $('.ui.navbar .search-icon > i')
    .click(function () {
      let icon = $(this)
      if (icon.text() === 'search') {
        icon.text('close').parents('.content').addClass('searching')
      } else {
        icon.text('search').parents('.content').removeClass('searching')
      }
    })
  /**
   * slick carousel
   */
  $('.ui.hero.carousel')
    .slick({
      // arrows: false,
      prevArrow: '<button class="ui prev bottom button"><i class="material-icons">chevron_left</i></button>',
      nextArrow: '<button class="ui next bottom button"><i class="material-icons">chevron_right</i></button>',

      responsive: [
        {
          breakpoint: 767,
          settings: {
            dots: true
          }
        }
      ]
    })
  /**
   * sidebar
   */
  $('.ui.sidebar')
    // dimPage 右边变暗
    .sidebar('setting', 'dimPage', true)
    .sidebar('attach events', '.ui.navbar .menu-icon', 'show')
    .sidebar('attach events', '.ui.sidebar .close-icon', 'hide')

  $('.ui.navbar .menu')
    .clone()
    .appendTo('.ui.sidebar')
})();