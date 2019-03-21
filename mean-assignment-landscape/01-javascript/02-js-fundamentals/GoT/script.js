$(document).ready(function() {
   
    id = [362, 378, 229, 17]
    for (let house of id) {
        $.get("https://anapioficeandfire.com/api/houses/"+house, gameThrones);
                
        function gameThrones(data) {
            $("#"+house).click(function() {
                $(this).after(`<p><b>Name: </b>${data.name}</p>`, `<p><b>Words: </b>${data.words}</p>`, `<p><b>Titles: </b>${data.titles}</p>`)
            });    
        }    
    }         
});