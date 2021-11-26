

function SearchBy1()
{
    console.log($("#index-table"))
    console.log($("#index-table").html())
    console.log($("#index-table").children())
    console.log($("test"))

}

$( document ).ready(function() {
    $( document ).on("click", "#1-champ", SearchBy1)
})
