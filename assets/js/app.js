$(document).ready(function () {
    $('.fa-bars').click(function (e) {
        e.preventDefault();
        $('.side-menu').toggleClass('opened')
        $('.overlay').toggleClass('opened')

    })
    $('.overlay').click(function (e) {
        e.preventDefault();
        $('.side-menu').toggleClass('opened')
        $('.overlay').toggleClass('opened')

    })
    $('.side-bar-btn').click(function(){
        $('.side-bar').toggleClass('opened')
    })
    $('.lock-btn').click(function () {
        $('.lock-icon').toggleClass('fa-lock-open');
        $('.lock-screen').toggleClass('locked-screen');
        $('.lock-icon').toggleClass('fa-lock');
    })
    $('.psw-input').focus(function() {
        $('.psw-label').toggleClass('go-up')
    })
    $('.psw-form').submit(function(){
                $('.lock-screen').removeClass('locked-screen');
        $('.lock-icon').addClass('fa-lock-open');
        $('.lock-icon').removeClass('fa-lock');
    })
})
