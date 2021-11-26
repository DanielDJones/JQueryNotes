BOOL_IsAdding = false

function TodaysDate() {
    //GET TODAYS DATE
    var Today = new Date();
    var Day = String( Today.getDate() ).padStart(2, 0);
    var Month = String( Today.getMonth() + 1 ).padStart(2, 0);
    var Year = Today.getFullYear();
    return Day + "/" + Month + "/" + Year
}

function SampleArray(ARR_Input) {
    //GET RANDOM ELEMENT FROM ARRAY
    return ARR_Input[Math.floor( Math.random() * ARR_Input.length )];
}

function GenRandomInfo() {
    //CREATE POOL OF RANDOM DATA
    var ARR_FileDir = ["images/", "classes/", "core/", "public/"] 
    var ARR_FileName = ["index.html", "master.css", "main.js", "form.php", "FileUploadController.php"];
    var ARR_Dev = ["Dan", "", "", "", "", "", "", "", ""];

    //GET RANDOM DATA
    var STR_FilePath = SampleArray(ARR_FileDir) + " " + SampleArray(ARR_FileName);
    var STR_DEV = SampleArray(ARR_Dev);
    var STR_Date = TodaysDate();

    return {
        FilePath: STR_FilePath,
        Dev: STR_DEV,
        Date: STR_Date 
    }
}

function AddRandomRows() {
    if(BOOL_IsAdding)
    {
        //DONT ADD IF ALREADY ADDING
        console.log("Was adding!")
        return
    }

    //REDUCES FLASHING IF A USER SPAMS THE ADD BUTTON
    BOOL_IsAdding = true



    $( "#index-table" ).animate({ opacity: 0});

    // $( "#index-table" ).fadeOut(200);

    //CALL PART 2
    setTimeout(AddRandomRowsAfter, 250);

}

function AddRandomRowsAfter() {
    //PART 2 OF ADD RANDOM ROWS FUNC, USED TO KEEP THINGS NEATER
    for(i = 0; i < 100; i++)
    {
        //ADD A RANDOM ROW TO THE TABLE
        DICT_RowData = GenRandomInfo();

        //CREATE INVISABLE ROW
        $( "#index-table" ).append(
            "<tr>"
            + "<td class='info-name'>"
            + DICT_RowData["FilePath"] 
            + "</td>"
            + "<td class='info-phone'>"
            + DICT_RowData["Dev"] 
            + "</td>"
            + "<td class='info-postcode'>"
            + DICT_RowData["Date"] 
            + "</td>"
            + "/<tr>"
        )
    } 
   
    //CLEAN EXCESS TR SO THERE ARE NO WIERD GAPS IN RESULTS 
    $("tr:not(:has(*))").remove();
    
    // $( "#index-table" ).fadeIn(200);

    $( "#index-table" ).animate({ opacity: 1});

    //FLAGS ADDING IS FINISHED AFTER ANIMATION PLAYS 
    setTimeout(function(){ BOOL_IsAdding = false }, 200);
}

function Search() {
    var STR_NameTerm = $( "#name-search" ).val();
    var STR_PhoneTerm= $( "#phone-search" ).val();
    var STR_Postcode= $( "#postcode-search" ).val();

    //HIDE ALL ROWS
    $( ".info-name" ).parent().hide()

    //SHOW RESULTS
    JQ_Results = $( ".info-name:contains('" + STR_NameTerm + "')" ).parent()
    //TAKE THE LAST RESULTS THEN RESERCH THE CHILDREN OF THE ROW
    JQ_Results = JQ_Results.children(".info-phone:contains('" + STR_PhoneTerm + "')" ).parent() //GET THE PARENT WHICH IS THE ROW
    JQ_Results = JQ_Results.children(".info-postcode:contains('" + STR_Postcode + "')" ).parent()
    JQ_Results.show()
}

$( document ).ready( function() {
    $( document ).on("click", "#new-row", AddRandomRows);
    $( document ).on("keydown", "#name-search", Search);
    $( document ).on("keydown", "#phone-search", Search);
    $( document ).on("keydown", "#postcode-search", Search);
})