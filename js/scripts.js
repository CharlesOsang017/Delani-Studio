$(document).ready(function () {
    $("#img").click(function () {
        $("#p").show();
        $("#img").hide();
    });
    $("#p").click(function () {
        $("#img").show();
        $("#p").hide();
    });
    $("#img1").click(function () {
        $("#p1").show();
        $("#img1").hide();
    });
    $("#p1").click(function () {
        $("#img1").show();
        $("#p1").hide();
    });
    $("#img2").click(function () {
        $("#p2").show();
        $("#img2").hide();
    });
    $("#p2").click(function () {
        $("#img2").show();
        $("#p2").hide();
    });

    //Creating a hover on the portfolio picture

    $('img#port1').hover(function () {
        $('#port1').slideToggle('slow');
    });
    $('img#port2').hover(function () {
        $('#port2').slideToggle('slow');
    });
    $('img#port3').hover(function () {
        $('#port3').slideToggle('slow');
    });
    $('img#port4').hover(function () {
        $('#port4').slideToggle('slow');
    });
    $('img#port5').hover(function () {
        $('#port5').toggle('slow');
    });
    $('img#port6').hover(function () {
        $('#port6').toggle('slow');
    });
    $('img#port7').hover(function () {
        $('#port7').toggle('slow');
    });
    $('p#port8').hover(function () {
        $('#port8').slideToggle('slow');
    });
});