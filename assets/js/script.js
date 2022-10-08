setInterval (function() {
    // Gets and displays current day
    let day = moment().format("dddd, MMMM Do"); 
    $("#currentDay").text(day);
    // Gets current time in 24hr format
    let currentTime = moment().format("k");
    if((currentTime >= 9) && (currentTime <= 17)) { /* During Bussiness hours */
        if ($(".description").attr("id") = currentTime) {
            $("textarea").addClass("present")
        }
    } else if (currentTime > 17) { /* After Bussiness hours */
        $("textarea").addClass("past")
    } else if (currentTime < 9) { /* Before Bussiness hours */
        $("textarea").addClass("future")
    }
}, 1000)
