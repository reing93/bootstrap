$(document).ready(function() {
    $(window).resize(function() {
        $(".sub-side").removeClass("active-cus");
    })

    $(".navbar-toggler").click(function() {
        $(".sub-side").toggleClass("active-cus");
        $("div.collapse").removeClass("show");
    })
    $(document).scroll(function() {
        $(".sub-side").removeClass("active-cus");
    })




    return false;


})