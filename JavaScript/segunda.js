var text = "demo";
var i = 2;
while (i =< 20) {
    text += "<br>The number is " + i;
    i++;
}
document.getElementById("demo").innerHTML = text;