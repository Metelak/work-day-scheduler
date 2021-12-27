var today = new Date();
var date = moment().format("dddd, MMMM Do, YYYY");
document.getElementById("current").innerHTML = date;

var main = document.querySelector("main");

var schedData = [
    {
        time: "9:00 A.M.", timeClock: 9, content: " ", button: "saveBtn",
      },
      {
        time: "10:00 A.M.", timeClock: 10, content: " ", button: "saveBtn",
      },
      {
        time: "11:00 A.M.", timeClock: 11, content: " ", button: "saveBtn",
      },
      {
        time: "12:00 P.M.", timeClock: 12, content: " ", button: "saveBtn",
      },
      {
        time: "1:00 P.M.", timeClock: 13, content: " ", button: "saveBtn",
      },
      {
        time: "2:00 P.M.", timeClock: 14, content: " ", button: "saveBtn",
      },
      {
        time: "3:00 P.M.", timeClock: 15, content: " ", button: "saveBtn",
      },
      {
        time: "4:00 P.M.", timeClock: 16, content: " ", button: "saveBtn",
      },
      {
          time: "5:00 P.M.", timeClock: 17, content: " ", button: "saveBtn",
      }, 
];

var currentTime = function () {
  var timeNow = today.getHours(24);

  for (var i = 0; i < schedData.length; i++) {
    var currentId = "#hour" + schedData[i].timeClock;
    var currentEl = document.querySelector(currentId);

    if (schedData[i].timeClock < timeNow) {
      currentEl.className += " past";
    } else if (schedData[i].timeClock === timeNow) {
      currentEl.className += " present";
    } else {
      currentEl.className += " future";
    }
  }
};


var saveUserInput = function (event) {
  event.preventDefault();
  var savedContentEl = document.querySelector("textarea").value;

  savedItemEl.className = "textarea";
  savedItemEl.textContent = "";
  savedContentEl.appendChild(savedItemEl);

  var userInputEl = document.getElementById("textarea");

  var savedItemEl = JSON.stringify(userInputEl);
  localStorage.setItem("userInput", savedItemEl);
};

main.addEventListener("onload", currentTime());