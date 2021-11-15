$(document).ready(function () {
  // display current day, year and time ontop of the page
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));
  //gets the current time in this case 24hour clock with kk
  var now = parseInt(moment().format("kk"));
  //looks at the testarea name and compares it to the current time.
  // then adds the relevenat class to change the color of the cells.past grey, present red, and future green.

  $("textarea").each(function () {
    var name = parseInt($(this).attr("name"));
    console.log(name);
    if (name < now) {
      $(this).addClass("past");
    }

    if (name > now) {
      $(this).addClass("future");
    }

    if (name === now) {
      $(this).addClass("present");
    }
  });

  $(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var textEntry = $(this).siblings(".description").val();
    var entryTime = $(this).parent().attr("id");

    localStorage.setItem(entryTime, JSON.stringify(textEntry));
  });
});

