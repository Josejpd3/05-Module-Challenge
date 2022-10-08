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
let saveBtn = $(".saveBtn");
// Saves inputed text when clicked on save 
saveBtn.on("click", save)
function save(event) {
    event.preventDefault();
    let buttonNum = $(this).attr('name');
    let textInput = $(this).parent().find('textarea').val();
    localStorage.setItem(buttonNum, textInput);
}; 
// retrives values from all inputs
$('#9').val(localStorage.getItem("9", "textInput"));
$('#10').val(localStorage.getItem("10", "textInput"));
$('#11').val(localStorage.getItem("11", "textInput"));
$('#12').val(localStorage.getItem("12", "textInput"));
$('#1').val(localStorage.getItem("1", "textInput"));
$('#2').val(localStorage.getItem("2", "textInput"));
$('#3').val(localStorage.getItem("3", "textInput"));
$('#4').val(localStorage.getItem("4", "textInput"));
$('#5').val(localStorage.getItem("5", "textInput"));