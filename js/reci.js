$("i").click(function(){
    $("input").toggleClass("fadeout")
})

$("input[type = 'text'").on("keypress", function(event){
    if(event.which === 13){
        $(this).val("")
    }
})