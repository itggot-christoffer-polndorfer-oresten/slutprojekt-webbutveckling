$("body").scroll(function (e) {
    if ($("body").scrollTop()) {
        $('nav').addClass('black');
    }
    else {
        $('nav').removeClass('black');
    }
})

function togglehamburgerMenu(){
    var element = document.querySelector(".hamburger_menu_wrapper");
    element.classList.toggle("show_hamburgermenu");
}
