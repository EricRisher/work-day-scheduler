$(function () {
  var saveBtn = $(".saveBtn");
  saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
    localStorage.setItem(time, text);
  });

  function timeTracker() {
    //get current number of hours.
    var timeNow = 12;
    console.log(timeNow);

    // loop over time blocks
    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("-")[1]);

      //check if we've moved past this time
      if (blockTime < timeNow) {
        $(this).addClass("past");
      } else if (blockTime === timeNow) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  //load any saved data from localStorage
for (let hour = 9; hour <= 17; hour++) {
  $(`#hour-${hour} .description`).val(localStorage.getItem(`hour-${hour}`));
}

  //display current date in header
  var currentDay = dayjs().format("MMMM D, YYYY [at] h:mm A");
  $("#currentDay").text(currentDay);
  timeTracker();

  //clears local storage
  $(".clear").on("click", function () {
    localStorage.clear();
    console.log("local storage cleared!");
  });
});