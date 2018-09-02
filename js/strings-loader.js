/*jslint browser: true*/
/*global $, jQuery, alert*/

function LanguageClickEventHandler(lang) {
    
    MoveCover();
    SetLanguage(lang);
}

function MoveCover(){
    $(".full-move").toggleClass("full-move-to-left");
    $(".half-move").toggleClass("half-move-to-left")
}



function SetLanguage(lang){
    var url = "json/strings-" + lang + ".json";
    var items = [];
    $.getJSON(url, function(result) {
        $.each(result, function(){
            result.string.forEach(function(element) {
                items.push(element);
            });
        });

        var texts = document.getElementsByClassName('text');
        for(i = 0; i < texts.length; i++) {
            for(j = 0; j < items.length; j++) {
                if (items[j].id == texts[i].id){
                    texts[i].innerHTML = items[j].text;
                    break;
                }
            }
        }
      })
    
}

function initMap() {
    // The location of Uluru
    var belliole = {lat: -48.188, lng: 3.076};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: belliole});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: belliole, map: map});
}
  

$(document).ready(function() {    
    "use strict";
    SetLanguage("fr");
    
    var homedist, introdist, ourstorydist, ourdreamdist, 
        giftideasdist, ddaydist, scheduledist;

    function initializeDistances() {
        homedist = $('#home').height();
        introdist = homedist + $('#intro').height();
        ourstorydist = introdist + $('#our-story').height();
        ourdreamdist = ourstorydist + $('#our-dream').height();
        giftideasdist = ourdreamdist + $('#gift-ideas').height();
        ddaydist = giftideasdist + $('#d-day').height();
        scheduledist = ddaydist + $('#schedule').height();
    }
    
    function updateActiveNavItem(positionTop) {
        if (positionTop >= scheduledist) {
            $('#contact-nav').addClass('active');
            $('#schedule-nav').removeClass('active');
            $('#d-day-nav').removeClass('active');
            $('#gift-ideas-nav').removeClass('active');
            $('#our-dream-nav').removeClass('active');
            $('#our-story-nav').removeClass('active');
            $('#intro-nav').removeClass('active');
            $('#home-nav').removeClass('active');
        } else if (positionTop >= ddaydist) {
            $('#contact-nav').removeClass('active');
            $('#schedule-nav').addClass('active');
            $('#d-day-nav').removeClass('active');
            $('#gift-ideas-nav').removeClass('active');
            $('#our-dream-nav').removeClass('active');
            $('#our-story-nav').removeClass('active');
            $('#intro-nav').removeClass('active');
            $('#home-nav').removeClass('active');
        } else if (positionTop >= giftideasdist) {
            $('#contact-nav').removeClass('active');
            $('#schedule-nav').removeClass('active');
            $('#d-day-nav').addClass('active');
            $('#gift-ideas-nav').removeClass('active');
            $('#our-dream-nav').removeClass('active');
            $('#our-story-nav').removeClass('active');
            $('#intro-nav').removeClass('active');
            $('#home-nav').removeClass('active');
        } else if (positionTop >= ourdreamdist) {
            $('#contact-nav').removeClass('active');
            $('#schedule-nav').removeClass('active');
            $('#d-day-nav').removeClass('active');
            $('#gift-ideas-nav').addClass('active');
            $('#our-dream-nav').removeClass('active');
            $('#our-story-nav').removeClass('active');
            $('#intro-nav').removeClass('active');
            $('#home-nav').removeClass('active');
        } else if (positionTop >= ourstorydist) {
            $('#contact-nav').removeClass('active');
            $('#schedule-nav').removeClass('active');
            $('#d-day-nav').removeClass('active');
            $('#gift-ideas-nav').removeClass('active');
            $('#our-dream-nav').addClass('active');
            $('#our-story-nav').removeClass('active');
            $('#intro-nav').removeClass('active');
            $('#home-nav').removeClass('active');
        } else if (positionTop >= introdist) {
            $('#contact-nav').removeClass('active');
            $('#schedule-nav').removeClass('active');
            $('#d-day-nav').removeClass('active');
            $('#gift-ideas-nav').removeClass('active');
            $('#our-dream-nav').removeClass('active');
            $('#our-story-nav').addClass('active');
            $('#intro-nav').removeClass('active');
            $('#home-nav').removeClass('active');
        } else if (positionTop >= homedist) {
            $('#contact-nav').removeClass('active');
            $('#schedule-nav').removeClass('active');
            $('#d-day-nav').removeClass('active');
            $('#gift-ideas-nav').removeClass('active');
            $('#our-dream-nav').removeClass('active');
            $('#our-story-nav').removeClass('active');
            $('#intro-nav').addClass('active');
            $('#home-nav').removeClass('active');
        } else {
            $('#contact-nav').removeClass('active');
            $('#schedule-nav').removeClass('active');
            $('#d-day-nav').removeClass('active');
            $('#gift-ideas-nav').removeClass('active');
            $('#our-dream-nav').removeClass('active');
            $('#our-story-nav').removeClass('active');
            $('#intro-nav').removeClass('active');
            $('#home-nav').addClass('active');
        }
    }
    
    function onScroll(positionTop) {
        $('#navbar').fadeTo(0, (positionTop / homedist));
        $('#container-floating').fadeTo(0, (positionTop / homedist));
        updateActiveNavItem(positionTop);
    }
    
    $('.scrolling-btn').click(function () {
        var id = $(this).attr("data-id");
        $('html, body').animate({
            scrollTop: ($(id).offset().top)
        }, 500);
        return false;
    });
    
    $('.top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 500);
    });
    
    initializeDistances();
    onScroll($(this).scrollTop());
    
    window.onresize = function (event) {
        initializeDistances();
    };
    
    $(window).scroll(function () {
        onScroll($(this).scrollTop());
    });
});