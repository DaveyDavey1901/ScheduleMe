$(document).ready(function () {
  // display current day, year and time ontop of the page
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));
  //gets the current time in this case 24hour clock with kk
  var now = parseInt(moment().format("kk"));

  //looks at the testarea name and compares it to the current time.
  // then adds the relevent class to change the color of the cells.past grey, present red, and future green.
  $("textarea").each(function () {
    var name = parseInt($(this).attr("name"));
    
    if (name < now) {
      $(this).addClass("past");
    }

    if (name === now) {
      $(this).addClass("present");
    }

    if (name > now) {
      $(this).addClass("future");
    }

  });
  // retreives any data in the local storage matches 
  //the id and inserts the text back to the right timeblock.
  $(".time-block").each(function () {
    var id = $(this).attr("id");
    var retrieveText = JSON.parse(localStorage.getItem(id));
  
    if (retrieveText != null) {
      $(this).children(".description").val(retrieveText);
    }
  });
  
  $(".saveBtn").on("click", function () {
    var textEntry = $(this).siblings(".description").val();
    var entryTime = $(this).parent().attr("id");

    localStorage.setItem(entryTime, JSON.stringify(textEntry));
  });
});
