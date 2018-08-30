function LanguageClickEventHandler(lang) {
    
    MoveCover();
    SetLanguage(lang);
}

function MoveCover(){
    $(".full-move").toggleClass("full-move-to-left");
    $(".half-move").toggleClass("half-move-to-left")
}

function SetInnerText(inner, text){
    inner = text;
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

$(document).ready(function() {    
  
});