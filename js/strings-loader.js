/*jslint browser: true*/
/*global $, jQuery, alert*/

function LanguageClickEventHandler(lang) {
    SetLanguage(lang);
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
      });
}


$(document).ready(function() {    
    "use strict";
    SetLanguage("fr");
});