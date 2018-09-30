//Let's set the global variables
var animals = ["bird", "dog", "cats", "octopus"];

function displayZoo(){

    //This "this", goes to the window but it's meant for whatever I clicked (Ya sabes, una cosa de cosas :v)
    var fauna = $( this ).attr( "data-name" );
    console.log(fauna)
    var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=1heqhQtwCysD3tcyVLATLdRRRx4bdc8l&tag=" + fauna + "&limit=1";
    console.log( "are we humans? " + queryURL );
    
    //Now let's call ajax to get the images and 
    $. ajax ({
        url: queryURL,
        method: "GET"
    }).then ( function ( response ) {
        var gifDiv = $( "<div>" ); 
        gifDiv.addClass ( "gif" );
        a = $ ( "<h3>" ).text ( fauna );
        gifDiv.append( a );

        flora = $( "<img>" );
        flora.attr ( "id", "disgif" );
        flora.addClass ( "legif" ); //  dis is da css class

        flora.attr ( "src", response.data.images.fixed_width.url );
        gifDiv.append ( flora );

        console.log ( gifDiv );
        $( "#gifDump" ).prepend( gifDiv );

         flora.attr ( "data-state", "still" );
         flora.attr( "data-still",  response.data.images.fixed_width_still.url );
         flora.attr( "data-animate", response.data.images.fixed_width.url );
         

    });


}


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

//Let's load the buttons on their own
renderButtons();


$( "#add-btn" ).on ( "click", function  (event){
    event.preventDefault();
    var fauna = $("#gif-input").val().trim();
    console.log(fauna)

    animals.push ( fauna );
     console.log(fauna)
    renderButtons();
    $( "#gif-input" ).val("");
   

});

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