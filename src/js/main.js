$(document)
    .ready(() => {
        $('.header__nav-toggle').on('click', function () {
            $(this).closest('.header__nav-wrap').toggleClass('_is-open');
        });
    });
