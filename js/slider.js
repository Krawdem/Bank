$('.single_slide').slick();

slides = 0;
if ($(window).width() <= '425'){
    slides = 1;
} else if ($(window).width() > '425' && $(window).width() <= '768') {
    slides = 2;
} else {
    slides = 3;
}

$('.future').slick({
    infinite: true,
    slidesToShow: slides,
    slidesToScroll: 1
  });


