$(document).ready(function() {    
    "use strict";
    SetLanguage("fr");
    
    var homedist, invitedist, ourstorydist, weddingdist, mapdist, directiondist,
    ddaydist, ourdreamdist, giftsdist;
    
    const threshold = 50;
    
    function initializeDistances() {
        console.log('Basic Home: ' + $('#home').height() + ' | Home Mobile: ' + $('#home-mobile').height());
        if ($(window).width() >  575.98){
            homedist = $('#home').height();    
        }
        else {
            homedist = $('#home-mobile').height();
        }
        invitedist = homedist + $('#invite').height();
        ourstorydist = invitedist + $('#our-story').height();
        weddingdist = ourstorydist + $('#wedding').height();
        mapdist = weddingdist + $('#map').height();
        directiondist = mapdist + $('#direction').height();
        ddaydist = directiondist + $('#d-day').height();
        ourdreamdist = ddaydist + $('#our-dream').height();
        giftsdist = ourdreamdist +$('#gifts').height();
        console.log('Home: ' + homedist + ' | Invite: ' + invitedist
            + ' | Our Story: ' + ourstorydist + ' | Wedding: ' + weddingdist
            + ' | Map: ' + mapdist + ' | Direction: ' + directiondist
            + ' | D-Day: ' + ddaydist + ' | Our Dream: ' + ourdreamdist
            + ' | Gifts: ' + giftsdist);
    }

    function updateActiveNavItem(positionTop) {
        if ((positionTop + threshold) >= giftsdist) {
            $('#contact-item').addClass('active');
            $('#gifts-item').removeClass('active');
            $('#our-dream-item').removeClass('active');
            $('#d-day-item').removeClass('active');
            $('#direction-item').removeClass('active');
            $('#map-item').removeClass('active');
            $('#wedding-item').removeClass('active');
            $('#our-story-item').removeClass('active');
            $('#invite-item').removeClass('active');
            $('#home-item').removeClass('active');

            $('#contact-overlay').addClass('active');
            $('#gifts-overlay').removeClass('active');
            $('#our-dream-overlay').removeClass('active');
            $('#d-day-overlay').removeClass('active');
            $('#direction-overlay').removeClass('active');
            $('#map-overlay').removeClass('active');
            $('#wedding-overlay').removeClass('active');
            $('#our-story-overlay').removeClass('active');
            $('#invite-overlay').removeClass('active');
            $('#home-overlay').removeClass('active');
        } else if ((positionTop + threshold) >= ourdreamdist) {
            $('#contact-item').removeClass('active');
            $('#gifts-item').addClass('active');
            $('#our-dream-item').removeClass('active');
            $('#d-day-item').removeClass('active');
            $('#direction-item').removeClass('active');
            $('#map-item').removeClass('active');
            $('#wedding-item').removeClass('active');
            $('#our-story-item').removeClass('active');
            $('#invite-item').removeClass('active');
            $('#home-item').removeClass('active');

            $('#contact-overlay').removeClass('active');
            $('#gifts-overlay').addClass('active');
            $('#our-dream-overlay').removeClass('active');
            $('#d-day-overlay').removeClass('active');
            $('#direction-overlay').removeClass('active');
            $('#map-overlay').removeClass('active');
            $('#wedding-overlay').removeClass('active');
            $('#our-story-overlay').removeClass('active');
            $('#invite-overlay').removeClass('active');
            $('#home-overlay').removeClass('active');
        } else if ((positionTop + threshold) >= ddaydist) {
            $('#contact-item').removeClass('active');
            $('#gifts-item').removeClass('active');
            $('#our-dream-item').addClass('active');
            $('#d-day-item').removeClass('active');
            $('#direction-item').removeClass('active');
            $('#map-item').removeClass('active');
            $('#wedding-item').removeClass('active');
            $('#our-story-item').removeClass('active');
            $('#invite-item').removeClass('active');
            $('#home-item').removeClass('active');

            $('#contact-overlay').removeClass('active');
            $('#gifts-overlay').removeClass('active');
            $('#our-dream-overlay').addClass('active');
            $('#d-day-overlay').removeClass('active');
            $('#direction-overlay').removeClass('active');
            $('#map-overlay').removeClass('active');
            $('#wedding-overlay').removeClass('active');
            $('#our-story-overlay').removeClass('active');
            $('#invite-overlay').removeClass('active');
            $('#home-overlay').removeClass('active');
        } else if ((positionTop + threshold) >= directiondist) {
            $('#contact-item').removeClass('active');
            $('#gifts-item').removeClass('active');
            $('#our-dream-item').removeClass('active');
            $('#d-day-item').addClass('active');
            $('#direction-item').removeClass('active');
            $('#map-item').removeClass('active');
            $('#wedding-item').removeClass('active');
            $('#our-story-item').removeClass('active');
            $('#invite-item').removeClass('active');
            $('#home-item').removeClass('active');

            $('#contact-overlay').removeClass('active');
            $('#gifts-overlay').removeClass('active');
            $('#our-dream-overlay').removeClass('active');
            $('#d-day-overlay').addClass('active');
            $('#direction-overlay').removeClass('active');
            $('#map-overlay').removeClass('active');
            $('#wedding-overlay').removeClass('active');
            $('#our-story-overlay').removeClass('active');
            $('#invite-overlay').removeClass('active');
            $('#home-overlay').removeClass('active');
        } else if ((positionTop + threshold) >= mapdist) {
            $('#contact-item').removeClass('active');
            $('#gifts-item').removeClass('active');
            $('#our-dream-item').removeClass('active');
            $('#d-day-item').removeClass('active');
            $('#direction-item').addClass('active');
            $('#map-item').removeClass('active');
            $('#wedding-item').removeClass('active');
            $('#our-story-item').removeClass('active');
            $('#invite-item').removeClass('active');
            $('#home-item').removeClass('active');

            $('#contact-overlay').removeClass('active');
            $('#gifts-overlay').removeClass('active');
            $('#our-dream-overlay').removeClass('active');
            $('#d-day-overlay').removeClass('active');
            $('#direction-overlay').addClass('active');
            $('#map-overlay').removeClass('active');
            $('#wedding-overlay').removeClass('active');
            $('#our-story-overlay').removeClass('active');
            $('#invite-overlay').removeClass('active');
            $('#home-overlay').removeClass('active');
        } else if ((positionTop + threshold) >= weddingdist) {
            $('#contact-item').removeClass('active');
            $('#gifts-item').removeClass('active');
            $('#our-dream-item').removeClass('active');
            $('#d-day-item').removeClass('active');
            $('#direction-item').removeClass('active');
            $('#map-item').addClass('active');
            $('#wedding-item').removeClass('active');
            $('#our-story-item').removeClass('active');
            $('#invite-item').removeClass('active');
            $('#home-item').removeClass('active');

            $('#contact-overlay').removeClass('active');
            $('#gifts-overlay').removeClass('active');
            $('#our-dream-overlay').removeClass('active');
            $('#d-day-overlay').removeClass('active');
            $('#direction-overlay').removeClass('active');
            $('#map-overlay').addClass('active');
            $('#wedding-overlay').removeClass('active');
            $('#our-story-overlay').removeClass('active');
            $('#invite-overlay').removeClass('active');
            $('#home-overlay').removeClass('active');
        } else if ((positionTop + threshold) >= ourstorydist) {
            $('#contact-item').removeClass('active');
            $('#gifts-item').removeClass('active');
            $('#our-dream-item').removeClass('active');
            $('#d-day-item').removeClass('active');
            $('#direction-item').removeClass('active');
            $('#map-item').removeClass('active');
            $('#wedding-item').addClass('active');
            $('#our-story-item').removeClass('active');
            $('#invite-item').removeClass('active');
            $('#home-item').removeClass('active');

            $('#contact-overlay').removeClass('active');
            $('#gifts-overlay').removeClass('active');
            $('#our-dream-overlay').removeClass('active');
            $('#d-day-overlay').removeClass('active');
            $('#direction-overlay').removeClass('active');
            $('#map-overlay').removeClass('active');
            $('#wedding-overlay').addClass('active');
            $('#our-story-overlay').removeClass('active');
            $('#invite-overlay').removeClass('active');
            $('#home-overlay').removeClass('active');
        } else if ((positionTop + threshold) >= invitedist) {
            $('#contact-item').removeClass('active');
            $('#gifts-item').removeClass('active');
            $('#our-dream-item').removeClass('active');
            $('#d-day-item').removeClass('active');
            $('#direction-item').removeClass('active');
            $('#map-item').removeClass('active');
            $('#wedding-item').removeClass('active');
            $('#our-story-item').addClass('active');
            $('#invite-item').removeClass('active');
            $('#home-item').removeClass('active');

            $('#contact-overlay').removeClass('active');
            $('#gifts-overlay').removeClass('active');
            $('#our-dream-overlay').removeClass('active');
            $('#d-day-overlay').removeClass('active');
            $('#direction-overlay').removeClass('active');
            $('#map-overlay').removeClass('active');
            $('#wedding-overlay').removeClass('active');
            $('#our-story-overlay').addClass('active');
            $('#invite-overlay').removeClass('active');
            $('#home-overlay').removeClass('active');
        }  else if ((positionTop + threshold) >= homedist) {
            $('#contact-item').removeClass('active');
            $('#gifts-item').removeClass('active');
            $('#our-dream-item').removeClass('active');
            $('#d-day-item').removeClass('active');
            $('#direction-item').removeClass('active');
            $('#map-item').removeClass('active');
            $('#wedding-item').removeClass('active');
            $('#our-story-item').removeClass('active');
            $('#invite-item').addClass('active');
            $('#home-item').removeClass('active');

            $('#contact-overlay').removeClass('active');
            $('#gifts-overlay').removeClass('active');
            $('#our-dream-overlay').removeClass('active');
            $('#direction-overlay').removeClass('active');
            $('#d-day-overlay').removeClass('active');
            $('#map-overlay').removeClass('active');
            $('#wedding-overlay').removeClass('active');
            $('#our-story-overlay').removeClass('active');
            $('#invite-overlay').addClass('active');
            $('#home-overlay').removeClass('active');
        } else {
            $('#contact-item').removeClass('active');
            $('#gifts-item').removeClass('active');
            $('#our-dream-item').removeClass('active');
            $('#d-day-item').removeClass('active');
            $('#direction-item').removeClass('active');
            $('#map-item').removeClass('active');
            $('#wedding-item').removeClass('active');
            $('#our-story-item').removeClass('active');
            $('#invite-item').removeClass('active');
            $('#home-item').addClass('active');

            $('#contact-overlay').removeClass('active');
            $('#gifts-overlay').removeClass('active');
            $('#our-dream-overlay').removeClass('active');
            $('#d-day-overlay').removeClass('active');
            $('#direction-overlay').removeClass('active');
            $('#map-overlay').removeClass('active');
            $('#wedding-overlay').removeClass('active');
            $('#our-story-overlay').removeClass('active');
            $('#invite-overlay').removeClass('active');
            $('#home-overlay').addClass('active');
        }
    }
    
    function SetFrameHeight(windowHeight){
        document.getElementById("frame").height = windowHeight*.8;
    }
    
    function onScroll(positionTop) {
        updateActiveNavItem(positionTop);
    }
    
    $('.scrolling-btn').click(function () {
        var id = $(this).attr("data-id");
        $('html, body').animate({
            scrollTop: ($(id).offset().top)
        }, 500);
        return false;
    });
    
    window.onresize = function (event) {
        console.log("size: [" + $(window).width() + " ; " + $(window).height() + "]");
        SetFrameHeight($(window).height());
        initializeDistances();
        updateActiveNavItem($(this).scrollTop());
        onScroll($(this).scrollTop());
    };
    
    $(window).scroll(function () {
        onScroll($(this).scrollTop());
    });
    
    SetFrameHeight($(window).height());
    updateActiveNavItem($(this).scrollTop());
    initializeDistances();
    onScroll($(this).scrollTop());
});