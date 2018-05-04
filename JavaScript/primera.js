
function resultado() {
    var text = "1";
    var i;
    for (i = 1; i < 10; i++) {
        text += i + "<br>";
    }
    document.getElementById("demo").innerHTML = text;  

}