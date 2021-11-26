$( document ).ready(function() {
    //ON PAGE LOAD
    console.log( $( "#test-list" ) )
    console.log( $( "#test-list" ).children() )
    console.log( $( "#test-list" ).children("small") )
    console.log( $( "#test-list > small" ) )
    //GET ALL BUT THE SELECTED
    console.log( $( "#test-list > small" ).siblings() )

})