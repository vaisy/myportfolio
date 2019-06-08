$(document).ready(function () {
    $("#menu-icon").attr('src', 'img/menu-open.png');
    $(".nav-mobile-menu").hide();

    $('#menu-icon').click(function () {
        if ($("#menu-icon").attr('src') === 'img/menu-open.png') {
            $("#menu-icon").attr('src', 'img/menu-close.png');
            $(".nav-mobile-menu").slideDown();
        }
        else {

            $("#menu-icon").attr('src', 'img/menu-open.png');
            $(".nav-mobile-menu").slideUp();
        }
    });
});
function ShowMoreText(button, dots, moretext) {
    var dots_new = document.getElementById(dots);
    var moretext_new = document.getElementById(moretext);
    var showbtn = document.getElementById(button);

    if (moretext_new.style.display === "none" || moretext_new.style.display === "") {
        moretext_new.style.display = "inline";
        dots_new.style.display = "none";
        showbtn.innerText = "Read less";
    }
    else {
        moretext_new.style.display = "none";
        dots_new.style.display = "inline";
        showbtn.innerText = "Read more";
    }
}