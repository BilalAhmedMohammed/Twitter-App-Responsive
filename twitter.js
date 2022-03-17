var inputTweet = document.getElementById('inputTweete');
inputTweet.addEventListener('input', update);
var tw = document.getElementById('tw');
function update() {
    if (inputTweet.value == "") {
        tw.disabled = true;
        tw.style.opacity = "0.5";
        tw.style.cursor = "auto";
    }
    else {
        tw.disabled = false;
        tw.style.opacity = "1";
        tw.style.cursor = "pointer";
        tw.style.color = "white";
    }
}
$(document).ready(function () {
    $('#everyPrivacy').click(function () {
        $('#menuPrivacy').show();
        setTimeout(function () {
            $('#menuPrivacy option').each(function () {
                if ($(this).is(':selected')) {
                    $('#every').text($('#menuPrivacy').val());
                    $('#menuPrivacy').hide();
                }
            });
        }, 3000)
    });
    // var tweets=[];
    // var elem=$('.tweete.a7a');
    // for (var i=0;i<100;i++)
    // {
    //     tweets.push(elem);
    // }
    // var j=0;
    $('.iconsTweete i').click(function (event) {
        // console.log(event.target);
        var elmes = $(".iconsTweete").find("*");
        // console.log(elmes[2].context);
        // console.log(event.target);
        // console.log(event.target.removeAttr("::b"));
        // console.log(elmes);
        // console.log($(event.target) == $(elmes[2]));
        // console.log($(elmes[2]));
        // console.log($(event.target));
        // console.log($(event.target).context);
        // console.log($(elmes[2]).context);
        if ($(event.target).context === $(elmes[2]).context || $(event.target).context === $(elmes[6]).context || $(event.target).context === $(elmes[10]).context || $(event.target).context === $(elmes[14]).context) {
            console.log('heart');
            if ($(event.target).css("color").trim() == "rgb(29, 155, 240)") {
                $(event.target).css("color", "red");
            }
            else {
                $(event.target).css("color", "rgb(29, 155, 240)");
            }
        }
        if ($(event.target).context === $(elmes[0]).context || $(event.target).context === $(elmes[4]).context || $(event.target).context === $(elmes[8]).context || $(event.target).context === $(elmes[12]).context) {
            console.log('tweet');
            if ($(event.target).css("color").trim() == "rgb(29, 155, 240)") {
                $(event.target).css("color", "blue");
            }
            else {
                $(event.target).css("color", "rgb(29, 155, 240)");
            }

        }

    });
    $('#tw').click(function () {
        $('.tweete.aaa .pag').text($('#inputTweete').val())
        $('#mind').after($('.tweete.aaa').show());
        // j++;
    });
    $('#search').focus(function () {
        $(this).css({ "background": "black", "opacity": "1", "border": "1px solid #1D9BF0" })
        $("#search2").css("color", "#1D9BF0");
        var availableTags = [
            "ActionScript",
            "AppleScript",
            "Asp",
            "BASIC",
            "C",
            "C++",
            "Clojure",
            "COBOL",
            "ColdFusion",
            "Erlang",
            "Fortran",
            "Groovy",
            "Haskell",
            "Java",
            "JavaScript",
            "Lisp",
            "Perl",
            "PHP",
            "Python",
            "Ruby",
            "Scala",
            "Scheme"
        ];
        $("#search").autocomplete({
            source: availableTags
        });
    }
    );
    $('#search').blur(function () {
        $(this).css({ "background": "#D9D9D9", "opacity": ".7", "color": "white" })
        $("#search2").css("color", "black")
    }
    );
});
