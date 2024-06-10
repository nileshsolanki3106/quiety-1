// Animation to Scroll Reveal  


document.addEventListener('DOMContentLoaded', function() {



    ScrollReveal().reveal('.section--hero', {
        delay: 700,
        distance: '70px',
        duration: 1000,
        easing: 'ease-in-out',
        origin: 'bottom',
        reset: true
    });


    ScrollReveal().reveal('.features__promo', {
        delay: 500,
        distance: '50px',
        duration: 1000,
        easing: 'ease-out',
        origin: 'left',
        reset: true,
        scale: 0.85,
        rotate: {
            x: 10,
            y: 0,
            z: 0
        }
    });



    ScrollReveal().reveal('.features__data', {
        delay: 200,
        reset: true,
        easing: "ease-in-out",
        interval: 200,
        scale: 1,
    });


    ScrollReveal().reveal('.courses__card', {
        delay: 200,
        reset: true,
        easing: "ease-out",
        interval: 200,
        scale: 1.2,
    });

    ScrollReveal().reveal('.section__heading', {
        delay: 500,
        reset: false,
        desktop: true,
        easing: "ease-out",
        opacity: 0,
        rotate: {
            x: 18,
            y: 0,
            z: 0
        }
    });

    ScrollReveal().reveal('.business__img', {
        duration: 1500,
        origin: 'top',
        distance: '200px',
        easing: 'ease-in-out',
        reset: true
    });
    ScrollReveal().reveal('.brand__img', {
        duration: 1500,
        origin: 'top',
        distance: '200px',
        easing: 'ease-in-out',
        reset: true
    });

    ScrollReveal().reveal('.section--process', {
        duration: 1500,
        origin: 'top',
        distance: '100px',
        easing: 'ease-out',
        reset: true
    });

    ScrollReveal().reveal('.pricing__plan', {
        delay: 200,
        reset: true,
        easing: "ease-out",
        interval: 200,
        scale: 1.2,
    });


    ScrollReveal().reveal('.questions__works ', {
        duration: 1500,
        origin: 'left',
        distance: '100px',
        easing: 'ease-out',
        reset: true
    });

    ScrollReveal().reveal('.choose__video', {
        duration: 1500,
        origin: 'right',
        distance: '100px',
        easing: 'ease-out',
        reset: true
    });
    ScrollReveal().reveal('.questions__thumb', {
        duration: 1500,
        origin: 'top',
        distance: '100px',
        easing: 'ease-out',
        reset: true
    });


    ScrollReveal().reveal('.integration__connect', {
        duration: 1500,
        origin: 'top',
        distance: '100px',
        easing: 'ease-out',
        reset: true
    });

    ScrollReveal().reveal('.footer__links', {
        duration: 1500,
        origin: 'top',
        distance: '100px',
        easing: 'ease-out',
        reset: true
    });
    ScrollReveal().reveal('.footer__logo', {
        duration: 1500,
        origin: 'top',
        distance: '100px',
        easing: 'ease-out',
        reset: true
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('header').addClass("sticky");
        $('.logo').hide();
        $('.logo__sticky').show();
    } else {
        $('header').removeClass("sticky");
        $('.logo').show();
        $('.logo__sticky').hide();
    }
});