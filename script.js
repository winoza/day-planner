$(document).ready(function() {
    // Display current date in header
    var currentDate = dayjs().format("dddd, MMMM D, YYYY")
    $("#currentDay").text(currentDate);
    // Get current hour
    var currentHour = parseInt(dayjs().format('HH'))
    // Update current time every 30 seconds
    var autoRefresh = setInterval(setBlockColor, 30000);

      // Get saved data from local storage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    
    $(".saveBtn").on("click", function() {
        // get values of what you put in description text box
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
    
        // save values in localStorage
        localStorage.setItem(time, value);
      });
    
    // Set function to determine current time vs current hour and display the appropriate colors
    function setBlockColor() {

    $(".time-block").each(function() {
        var x = $(this)
        var  blockHour = parseInt($(x).attr("id").split("-")[1])
        console.log(blockHour)
        if (blockHour < currentHour) {
            $(this).addClass("pastHour")
        } else if (currentHour == blockHour) {
            $(this).removeClass("pastHour");
            $(this).addClass("presentHour");
        } else {
            $(this).removeClass("pastHour");
            $(this).removeClass("presentHour");
            $(this).addClass("futureHour");
            }
        })
    }
    setBlockColor()
})