$(document).ready(function () {
  $(".promo__slider-inner").slick({
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/left-arrow.png" alt="left-arrow" /></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/right-arrow.png" alt="left-arrow" /></button>',
  });
});

$(document).ready(function () {
  $(".car__color-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/down.png" alt="down" /></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/up.png" alt="up" /></button>',
  });
});

$(document).ready(function () {
  $(".car__color-change").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: true,
    customPaging : function(slider, i) {
      return '<div>';
  },
  });
});
