$(document).ready(function () {
$("#port1").mouseover(function(){
    $("#p-text1").show();
}).mouseout(function(){
    $("#p-text1").hide();
});
$("#port2").mouseover(function(){
    $("#p-text2").show();
}).mouseout(function(){
    $("#p-text2").hide();
});

$("#port3").mouseover(function(){
    $("#p-text3").show();
}).mouseout(function(){
    $("#p-text3").hide();
});

$("#port4").mouseover(function(){
    $("#p-text4").show();
}).mouseout(function(){
    $("#p-text4").hide();
});

$("#port5").mouseover(function(){
    $("#p-text5").show();
}).mouseout(function(){
    $("#p-text5").hide();
});

$("#port6").mouseover(function(){
    $("#p-text6").show();
}).mouseout(function(){
    $("#p-text6").hide();
});

$("#port7").mouseover(function(){
    $("#p-text7").show();
}).mouseout(function(){
    $("#p-text7").hide();
});

$("#port8").mouseover(function(){
    $("#p-text8").show();
}).mouseout(function(){
    $("#p-text8").hide();
});

// Adding click effect to what we do page

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

    // $('img#port1').click(function () {
    //     $('#port1').fadeToggle(slow);
    // });
    // $('img#port2').hover(function () {
    //     $('#port2').fadeToggle(slow);
    // });
    // $('img#port3').hover(function () {
    //     $('#port3').fadeToggle(slow);
    // });
    // $('img#port4').hover(function () {
    //     $('#port4').fadeToggle(slow);
    // });
    // $('img#port5').hover(function () {
    //     $('#port5').fadeToggle('slow');
    // });
    // $('img#port6').hover(function () {
    //     $('#port6').fadeToggle('slow');
    // });
    // $('img#port7').hover(function () {
    //     $('#port7').fadeToggle('slow');

    // });
    // $(".click").hover(function(){
    //     $(".click").fadeToggle('slow');
    // });
    // $('img#port8').hover(function () {
    //     $('#port8').fadeToggle('slow');
    // });
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
    if ((name !== "" && email !== "" && text == "") || (name != "" && email != "" && text != "")) {
        alert("Dear " + name + " your message has been received successfully.Thank you for reaching out to us.");
    }
}