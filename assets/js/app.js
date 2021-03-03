var timesClicked = 0;

$('.hamburger').click(function() {
    timesClicked++;

    if (timesClicked%2==0) {
        document.querySelector('.nav').style.width = '0';
        document.body.style.overflow = null;
        document.querySelector('.hamburger').classList.remove('is-active');
    } else {
        scroll(0, 0);
        document.querySelector('.nav').style.width = '100vw';
        document.body.style.overflow = 'hidden';
        document.querySelector('html').scrollTop = window.scrollY;
        document.querySelector('.hamburger').classList.add('is-active');
    };
});

$(function () {
    $(document).scroll(function () {
      var $nav = $(".nav");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});