function CheckField(Input)
{
    console.log(Input)
    //BUG THIS DOSENT CHECK PROPERLY
    if (Input == "")
    {
        console.log("False")
        return false 
    }
    else
    {
        console.log("True")
        return true
    }
}

function CheckEmail(Input)
{
    if (Input == "")
    {
        return false
    }

    if (Input.includes("@"))
    {
        return true
    }
    else
    {
        return false
    }
}

function Check(ID) {
    //GET ELEMENTS
    FieldBox = $("#" + ID)
    console.log(FieldBox)
    Label = $("label[for=" + FieldBox.attr("id") + "]");

    //CHECK VALIDATION
    var CheckResult = false

    if(ID.includes("email"))
    {
        CheckEmail(FieldBox.val());
    }
    else
    {
        console.log("Normal")
        CheckField(FieldBox.val());
    }

    //OUTPUT
    if (!CheckResult)
    {
        FieldBox.addClass("error");
        Label.addClass("error");
    }
    else
    {
        FieldBox.removeClass("error");
        Label.removeClass("error");
    }
}

function FieldBoxEvent(event)
{
    //WRAP THE EVENT AND CALL FUNC
    Check(event.data.ID)  
}

$( document ).ready(function(){
    $( ".field" ).each(function() {
        //RUN IT AT PAGE LOAD
        Check( $(this).attr("id") );

        //ADD EVENT
        $( document ).on("keydown", $(this).id , { ID: this.id },  FieldBoxEvent)
    })
})