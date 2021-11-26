function ImgClicked() {

    //GET PATH OF NEW IMG
    var ImageName = this.id.replace("-thumb", "");

    var ImagePath = "img/" + ImageName + ".jpg";

    //SET IMG PATH
    $( "#fullscreen-img" ).attr( "src", ImagePath)

    //SHOW FULLSCREEN IMAGE
    $( "#fullscreen-container" ).fadeToggle(200);
}

function ImgClose() {
    $( "#fullscreen-container" ).fadeToggle(200);
}

$( document ).ready(function() {
    //ON PAGE LOAD

    $( document ).on("click", ".img-thumb", ImgClicked);

    //FULLSCREEN CLOSE
    $( document ).on("click", "#fullscreen-img", ImgClose);
})