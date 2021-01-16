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
})