$(".fa-search").click(function(){
    $(".searchBar").toggleClass("fadeout")
})

$(".searches").on("keypress", function(event){
    if(event.which === 13){
        $(this).val("")
    }
})

//setting maxlength to input field

$("input").keypress(function(){
    var maxLength = $(this).val().length;
    if (maxLength >= 35) {
        // alert('You cannot enter more than ' + maxLength + ' chars');
        return false;
    }
});

// $("input").on('focus', function()
//     {
//         $(this).attr('maxlength','40');
//     });

// egusi recipe

$("#egusi").on("click", "li", function(){
    if($(this).css("color") === "rgb(128, 128, 128)"){
        $(this).css({
            color: "black",
            textDecoration: "none"
       });
    } else {
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
       });
    }
})

$("#egusi").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});


$(".egu").keypress(function(event){
    // $(this).val().maxlength()
    if(event.which === 13){
        var todoText = $(this).val().toLowerCase();
       $(this).val("")
       $("#egusi").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
       $("#egusi li:gt(9)").remove()
    }
})


// obono recipe

$("#obono").on("click", "li", function(){
    if($(this).css("color") === "rgb(128, 128, 128)"){
        $(this).css({
            color: "black",
            textDecoration: "none"
       });
    } else {
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
       });
    }
})

$("#obono").on("click", "li", function(){
    $(this).toggleClass("completed")
})

$("#obono").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$(".obo").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val().toLowerCase();
       $(this).val("")
       //create new li and add it to the ul

       $("#obono").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
       $("#obono li:gt(9)").remove()
    }
})

//banga recipe

$("#banga").on("click", "li", function(){
    if($(this).css("color") === "rgb(128, 128, 128)"){
        $(this).css({
            color: "black",
            textDecoration: "none"
       });
    } else {
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
       });
    }
})

$("#banga").on("click", "li", function(){
    $(this).toggleClass("completed")
})

$("#banga").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$(".ban").keypress(function(event){
    if(event.which === 13){
       var todoText = $(this).val().toLowerCase();
       $(this).val("")
       //create new li and add it to the ul
       $("#banga").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
       $("#banga li:gt(9)").remove()
    }
})

// vegetable recipe

$("#vegetable").on("click", "li", function(){
    if($(this).css("color") === "rgb(128, 128, 128)"){
        $(this).css({
            color: "black",
            textDecoration: "none"
       });
    } else {
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
       });
    }
})

$("#vegetable").on("click", "li", function(){
    $(this).toggleClass("completed")
})

$("#vegetable").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$(".veg").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val().toLowerCase();
       $(this).val("")
       //create new li and add it to the ul
       $("#vegetable").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
       $("#vegetable li:gt(9)").remove()
    }
})

// okro recipe

$("#okro").on("click", "li", function(){
    if($(this).css("color") === "rgb(128, 128, 128)"){
        $(this).css({
            color: "black",
            textDecoration: "none"
       });
    } else {
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
       });
    }
})

$("#okro").on("click", "li", function(){
    $(this).toggleClass("completed")
})

$("#okro").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$(".Okro").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val().toLowerCase();
       $(this).val("")
       //create new li and add it to the ul
       $("#okro").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
       $("#okro li:gt(9)").remove()
    }
})



// okazi recipee

$("#Okazi").on("click", "li", function(){
    if($(this).css("color") === "rgb(128, 128, 128)"){
        $(this).css({
            color: "black",
            textDecoration: "none"
       });
    } else {
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
       });
    }
})

$("#Okazi").on("click", "li", function(){
    $(this).toggleClass("completed")
})

$("#Okazi").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$(".oka").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val().toLowerCase();
       $(this).val("")
       //create new li and add it to the ul
       $("#Okazi").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
       $("#Okazi li:gt(9)").remove()
    }
})