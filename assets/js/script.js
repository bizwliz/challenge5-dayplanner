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

    // allows the saved data to persist after refresh 
    if (event) {
      var textarea = timeBlock.find("textarea");
      textarea.val(event); 
    }

    console.log(event)

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
});
