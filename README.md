# giphyhomework
Homework with ajax

Have you ever think were are all those gifs in Twitter? In this project you can find out!

The fun thing (if I can say saw myself), is that the html is almost unexistent compared for older projects presented here.

The buttons in html are just:
<div id= "buttons"> </div>

This is not a mistake, you can see the buttons, they are just made in javascript right here:

function renderButtons(){
    $("#buttons").empty();

    for(var i = 0; i < animals.length; i++){
        var a = $("<button>");
        
        a.addClass("animal-btn");
        a.attr("data-name", animals[i]);
        a.text(animals[i]);
        $("#buttons").append(a);
    

    };
}

And all the bottoms actually are in an array:

var animals = ["bird", "dog", "cats", "octopus"];

What we do is that we get an API (for us not to generate the information ourselves!), we use it inside of a variable that hears the value of any button, connected to the array.
 
 var fauna = $( this ).attr( "data-name" );
 
 and then you can use within a variable with the link of the API, to start looking for the thing you want!
 
 var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=1heqhQtwCysD3tcyVLATLdRRRx4bdc8l&tag=" + fauna + "&limit=1";
 
 But be careful, because if it's ambiguous enough, you may like with gifs you don't want.
 
 The rest of the code is to push words in an array that will become new buttons, as we have seen before. The hidden secret in this place is that, if you don't want the gifs moving, you just need to do this:
 
 $ ( document ).on ( "click", ".animal-btn", displayZoo);


$( document ).on ( "click", ".legif", function(){

    var state = $ ( this ).attr ( "data-state" );

    if ( state === "animate" ) {
        $ ( this ).attr ( "src", $ ( this ).attr ( "data-animate" ) );
        $ ( this ).attr ( "data-state", "still" );
        
    } else {
        $ ( this ).attr ( "src", $( this ).attr ( "data-still" ) );
        $ ( this ).attr ( "data-state", "animate" ); 
    }



});

The if statement will do that those gifs animated will stop, and those which are still will animate. If the gif has a video too short, it will just restart.

Hope you find this useful!
  
  
