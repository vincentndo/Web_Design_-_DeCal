
/* No need to wrap code inside $(document).ready if the script code is
   placed at the bottom (after all dom elements, just before </body>) */
$(document).ready(function() {

    $(".outfit-selection").click(function() {
        $("#body").hide()
        $(".outfit").hide()
        var id = "#o" + this.id.slice(1)
        $(id).show()
    })

    $("#strip-button").click(function() {
        $(".outfit").hide()
        $("#body").show()
    })
    
})