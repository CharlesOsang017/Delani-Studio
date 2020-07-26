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
        $('#port1').toggle('slow');
    });
    $('img#port2').hover(function () {
        $('#port2').toggle('slow');
    });
    $('img#port3').hover(function () {
        $('#port3').toggle('slow');
    });
    $('img#port4').hover(function () {
        $('#port4').toggle('slow');
    });
    $('img#port5').hover(function () {
        $('#port5').slideToggle('slow');
    });
    $('img#port6').hover(function () {
        $('#port6').slideToggle('slow');
    });
    $('img#port7').hover(function () {
        $('#port7').slideToggle('slow');

    });
    $(".click").hover(function(){
        $(".click").slideToggle();
    });
    $('p#wonger').hover(function () {
        $('#wonger').slideToggle('slow');
    });
});


document.forms['forms'].addEventListener('submit', function (event) {
    event.preventDefault();
});
function myFunctions() {
    var name = document.forms['forms'].elements[0].value;
    var email = document.forms['forms'].elements[1].value;
    var message = document.forms['forms'].elements[2].value;

// form validation

    if (name == "" && email == "") {
        alert('Your name and email is required');
        return 0;
    }
    else {
        if (name == "") {
            alert("Enter your name to proceed");
        }
        else if (email == "") {
            alert("Please provide a valid email");
        }
    }
    if ((name !== "" && email != "" && text == "") || (name != "" && email != "" && text != "")) {
        alert("Dear " + name + " your message has been received successfully.Thank you for reaching out to us.");
    }
}