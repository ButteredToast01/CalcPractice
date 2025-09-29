const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2")
const screen = document.getElementById("screen");

btn1.addEventListener("click", function() {
    screen.textContent += "1";
});

btn2.addEventListener("click", function() {
    screen.textContent += "2";
})