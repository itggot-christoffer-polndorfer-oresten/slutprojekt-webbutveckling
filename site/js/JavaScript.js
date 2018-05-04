$("body").scroll(function (e) {
    if ($("body").scrollTop()) {
        $('nav').addClass('black');
    }
    else {
        $('nav').removeClass('black');
    }
})

function toggleMenu(){
    var element = document.querySelector(".hamburger_slidemenu");
    element.classList.toggle("show");

