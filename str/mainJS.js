

document.getElementsByClassName('btn')[0].addEventListener('click', function () {
    document.getElementsByClassName('txt')[0].classList.toggle('open');
    document.getElementsByClassName('txt')[1].classList.toggle('open');
    document.getElementsByClassName('btn')[0].classList.toggle('txt');
    document.getElementsByClassName('btn')[1].classList.toggle('txt');
   

})
document.getElementsByClassName('btn')[1].addEventListener('click', function () {
    document.getElementsByClassName('ntxt')[0].classList.toggle('open');
    document.getElementsByClassName('container')[0].classList.toggle('txt');
   

})