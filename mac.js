
setTimeout(function() {
    location.reload();
}, 300000);

$(document).ready(function() {
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();

        if ($(this).attr('href') !== '#carousel-example-1') {
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 2000);
        }
    });
});


