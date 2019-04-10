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
})();