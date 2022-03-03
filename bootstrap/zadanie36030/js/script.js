$(document).ready(function() {

    let przycisk = $('.klik-1')
    let napis = $('.napis')
    przycisk.click(function() {
        napis.toggleClass('show')
    })

    let przycisk2 = $('.klik-2')
    let napis2 = $('.napis-2')
    przycisk2.click(function() {
        napis2.toggleClass('show')
    })

    let przycisk3 = $('.klik-3')
    let napis3 = $('.napis-3')
    przycisk3.click(function() {
        napis3.toggleClass('show')
    })

})