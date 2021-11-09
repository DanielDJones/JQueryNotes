//MODIFIED FROM MY JQUERY TEST

function ToggleDrawer()
{
    //this.id gets the id of the element clicked 
    console.log(this.id)
    DrawerID = this.id.replace("header", "drawer")
    //Open the draw
    console.log(DrawerID)

    //Toggle can be used to remove the need for a if/else or turnary condition 
    //$( "#" + DrawerID ).toggle()

    //Toggle with a nice animation (TimeInMS)
    $( "#" + DrawerID ).slideToggle(200)
    
}

function HideElement(event)
{
    //THIS FUNCTION IS USEFULL FOR COOKIE BANNERS AND NOTIFICATIONS


    //BY TAKING THE EVENT PARAMETER, A DICTIONARY CAN BE PASSED TO THE FUNCTION ALLOW FOR PARAMETERS
    ElementID = event.data.ElementID
    console.log(ElementID)

    //HIDE
    $( ElementID ).hide()
    //IN PLAIN JS (This wont work because of the leading # in the parameter)
    //document.getElementById( ElementID ).style.display = 'none';
}

//put drawers in a defualt hidden state
console.log("Hiding Drawers")

// CLOSE THE DRAWERS TO KEEP THINGS ORGANISED
//This (1) 
$( ".drawer" ).each(function() {
    $( this ).hide()    
});

//replaces (1) for each item manually
//$( "#main-light-drawer" ).hide()


//event listene REPLACES <button onclick=""> IN HTML OR VANILLA JS EVENT LISTENER

//This (2)

$( ".drawer-header" ).each(function() {
    //THE .on() IS USED OVER  .click() DUE TO USING LESS MEMORY AND THE ABILITY TO USE IT WITH DYNAMICLY ADDED ELEMENTS
    $( document ).on("click", "#" + this.id , ToggleDrawer)
});

//Replaces this (2)

//$( document ).on("click", "#main-light-header", ToggleDrawer)

//AND THE VANILLA JS WAY OF THIS

//document.getElementById("#main-light-header").addEventListener("click", function() {
    //FUNCTION CODE HERE
 //});

function AddUser(User)
{
    $ ( "#user-list").append(
        "<button class='drawer-header'>" + User["username"] + "</button>" +
        "<div class='drawer'>" +
        "Name:" + User["name"] +
        "<br>Email:" + User["email"] +
        "<br>Phone:" + User["phone"] +
        "<br>Website:" + User["website"] +
        "</div>" 
        )
}


function GetUsers()
{
    //CLEAR OUTPUT
    $ ( "#user-list" ).html("")
    
    $.ajax({
        //REQUEST
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        dataType: "json",
        success: function (data, text) {
            //WILL RUN ON SUCCESS
            console.log(data)
            //RESPONSE
            $.each(data, function(i, user){
                AddUser(this)
            })  
        },
        error: function (request, status, error) {
            //LOG ERROR INFO
            console.log(request)
            console.log(status)
            console.log(error)
        }
    })
}
$( document ).on("click", "#update-btn", GetUsers)

