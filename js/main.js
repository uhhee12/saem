"use strict";

function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
}



$(function () {
    var gnbA = $("#youtube>li");
    $("#youtube").css("top", $(window).height() / 2 - $("#youtube").height() / 2 + "px");
    $(window).scroll(function () {
        var t = $(this).scrollTop() + ($(this).height() / 2 - $("#youtube").height() / 2);
        $("#youtube").stop().animate({
            top: t
        }, 300);
    });
});



$(document).ready(function () {

    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
        $(this).toggleClass('open');
    });

    $("#nav-icon4").click(function () {
        $(".quick_menu").toggleClass("open");
        window.location.hash = "#open";
    });

    $(".quli, .form1Btn").click(function () {
        $(".qupop").fadeIn();
    });

    $(".qubtn").click(function () {
        $(".qupop").fadeOut();
    });

    $(".mo_tubeIcon").click(function () {
        $(".youtube").fadeToggle();
    });

    $("#tab-4 .faq li").click(function () { 
        $(this).children(".hide").slideToggle()
    })

});
