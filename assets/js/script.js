// wrapped code inside jQuery read function
$(function () {
var currentDayEL=$("#currentDay")
var currentDayTime=dayjs().format("dddd, MMMM D")
var currentHour=dayjs().hour()
var saveBtn=$(".saveBtn")

// added code to display current day and time to header
console.log(currentDayTime)
currentDayEL.text(currentDayTime)
console.log(currentHour)

  // added for loop for time blocks to display classes for past, present, and future.
  for (let i = 9; i < 18; i++) {
    var timeBlock=$("#hour-"+i)
    var event=localStorage.getItem("hour-"+i)

    console.log(event)
    timeBlock.children()

    if (i===currentHour) {
      timeBlock.addClass("present")
    }
    else if(currentHour > i){
      timeBlock.addClass("past")
    }
    else{
      timeBlock.addClass("future")
    }
  }

  // created function for savebtn to save information to local storage
  function saveEvent(event){
  var currentButton=$(event.target)
  var textArea=currentButton.siblings("textarea")
  var parentId=currentButton.parent().attr("id")

  alert(textArea.val() + " " + parentId)
  localStorage.setItem(parentId, textArea.val())

  }

  saveBtn.on("click", saveEvent)
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
});
