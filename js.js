$(document).ready(function () {
    var myDialog = $('#signUpWithMobile').show().dialog({
        modal: true,
        autoOpen: false,
    });
    myDialog.css({"background-color":"black"});
    $('#signup').click(function () {
        myDialog.dialog( "option", "width", 440);
        myDialog.dialog("open");
        $('#name').css("border", "4px solid #1D9BF0");
        $("#name").focus(function () {
            $(this).css("border", "4px solid #1D9BF0");
        });
        $("#name").blur(function () {
            $(this).css("border", "1px solid #6E767D");
        });
        $("#mobile").focus(function () {
            $(this).css("border", "4px solid #1D9BF0");
        });
        $("#mobile").blur(function () {
            $(this).css("border", "1px solid #6E767D");
        });
    });
    $('#transfer').click(function (event) {
        if ($(this).text() == 'Use email instead') {
            event.preventDefault();
            $('#mobile').attr('placeholder', 'Email');
            $('#mobile').attr('type', 'email');
            $(this).text('Use phone instead');
        }
        else {
            event.preventDefault();
            $('#mobile').attr('placeholder', 'Phone');
            $(this).text('Use email instead');
        }
    });
    $('#appel').click(function(){
        window.location.href="https://twitter.com/BilalAMohammed8";
    })
    $('#profile').click(function(){
        window.location.href="twitter.html";
    })

});