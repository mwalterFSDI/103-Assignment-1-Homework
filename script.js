/* Session 1 Homework
*date 01/30/2021
*description: Variables, Loop and If Statement
*/

alert("Hello Professor!!!"); // this is a message
alert("How are you Professor?");
alert("It's a Great Day!!!!");
alert("Thank you Professor, I'm learing a lot from you!!!");

// 20 Variables
const firstName = "Matt";
const lastName = "Walter";
let age =42;
let car = "Chevy";
var weather = "Cloudy";
var temp = "cold";
const basketball = "SDSUAztecs";
let computer = "laptop";
var number = "one";
var price =20;
const superbowl = "Tampa";
var fun = "true";
var work = "false";
let sunny = "true"
let cloudy = "false";
let day = "sunny";
let night = "dark";
var food = "hungry";
var water = "thisty";
const bed = "sleep";

// HTML Variables

document.write("Matt");
document.write("Walter");
document.write(42);
document.write("Chevy");
document.write("Cloudy");
document.write("cold");
document.write("SDSUAztecs");
document.write("laptop");
document.write(20);
document.write("Tamp");
document.write("true");
document.write("false");
document.write("true");
document.write("false");
document.write("sunny");
document.write("dark");
document.write("hungry");
document.write("thirsty");
document.write("sleep</br>");

// Loop 1 - 100 by 2

for(var x=1;x<=101;x+=2){
    document.write("Line" + x + "</br>");
}

// If Statement

var cash=500;
var price=502;

if(price>cash){
    document.write("NO WAY!!!");
}else if(cash<price){
    document.write("You can buy it");
}else{
    document.write("yes!!!");
}

document.write("Thank you Professor!!");



