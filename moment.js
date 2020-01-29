var m = document.querySelector("#currentDay");
m.textContent = moment().format('dddd[,] MMMM Do YYYY');
 
var currentTime = moment().format('H');
currentTime = parseInt(currentTime);

var t1 = document.querySelector(".t1").textContent;
t1 = parseInt(t1[0]);
var e9 = document.querySelector(".e9");

var t2 = document.querySelector(".t2").textContent;
t2 = parseInt(t2[1]) + 10;
var e10 = document.querySelector(".e10");

var t3 = document.querySelector(".t3").textContent;
t3 = parseInt(t3[1]) +10;
var e11 = document.querySelector(".e11");

var t4 = document.querySelector(".t4").textContent;
t4 = parseInt(t4[1]) + 10;
var e12 = document.querySelector(".e12");

var t5 = document.querySelector(".t5").textContent;
t5 = parseInt(t5[0]) +12;
var e1 = document.querySelector(".e1");

var t6 = document.querySelector(".t6").textContent;
t6 = parseInt(t6[0]) +12;
var e2 = document.querySelector(".e2");

var t7 = document.querySelector(".t7").textContent;
t7 = parseInt(t7[0]) +12;
var e3 = document.querySelector(".e3");

var t8 = document.querySelector(".t8").textContent;
t8 = parseInt(t8[0]) +12;
var e4 = document.querySelector(".e4");

var t9 = document.querySelector(".t9").textContent;
t9 = parseInt(t9[0]) +12;
var e5 = document.querySelector(".e5");


var hours  = [t1, t2, t3, t4, t5, t6, t7, t8, t9];
var inputs = [e9, e10, e11, e12, e1, e2, e3, e4, e5];
function colorcoding() {
    for (i = 0; i < hours.length; i ++) {
        if (hours[i] < currentTime) {
            inputs[i].classList.add("past");
        }
        else if (hours[i] === currentTime) {
            inputs[i].classList.add("present");
        }
        else {
            inputs[i].classList.add("future");
        }
    }
}
colorcoding();