$(document).ready(function() {
    var shapeToCross1 = document.getElementById("shape-to-cross-1"),
        crossToShape1 = document.getElementById("cross-to-shape-1"),
        whiteToGreen1 = document.getElementById("white-to-green-1"),
        greenToWhite1 = document.getElementById("green-to-white-1"),
        
        shapeToCross2 = document.getElementById("shape-to-cross-2"),
        crossToShape2 = document.getElementById("cross-to-shape-2"),
        whiteToGreen2 = document.getElementById("white-to-green-2"),
        greenToWhite2 = document.getElementById("green-to-white-2"),
        
        shapeToCross3 = document.getElementById("shape-to-cross-3"),
        crossToShape3 = document.getElementById("cross-to-shape-3"),
        whiteToGreen3 = document.getElementById("white-to-green-3"),
        greenToWhite3 = document.getElementById("green-to-white-3"),
        
        isOpen = false;

    $('.overlay-click').click(function () {
        if (isOpen){
            isOpen = false;
            $('#overlay-btn').removeClass('open');
            $('#overlay-menu').removeClass('open');
            crossToShape1.beginElement();
            crossToShape2.beginElement();
            crossToShape3.beginElement();
            greenToWhite1.beginElement();
            greenToWhite2.beginElement();
            greenToWhite3.beginElement();
        } else {
            isOpen = true;
            $('#overlay-btn').addClass('open');
            $('#overlay-menu').addClass('open');
            shapeToCross1.beginElement();
            shapeToCross2.beginElement();
            shapeToCross3.beginElement();
            whiteToGreen1.beginElement();
            whiteToGreen2.beginElement();
            whiteToGreen3.beginElement();
        }
    });
});