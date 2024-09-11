// JavaScript for handling events

function changeColor(event) {
    event.target.style.backgroundColor = "lightblue";
}

function showMessage(id) {
    document.getElementById(id).style.display = "block";
}

function hideMessage(id) {
    document.getElementById(id).style.display = "none";
}

function hideButton(event) {
    event.target.style.display = "none";
}

// All functions defined Below ! 

document.getElementById("button1").addEventListener("click", changeColor);
document.getElementById("button1").addEventListener("mouseover", () => showMessage("message1"));
document.getElementById("button1").addEventListener("mouseout", () => hideMessage("message1"));
document.getElementById("button1").addEventListener("dblclick", hideButton);

document.getElementById("button2").addEventListener("click", changeColor);
document.getElementById("button2").addEventListener("mouseover", () => showMessage("message2"));
document.getElementById("button2").addEventListener("mouseout", () => hideMessage("message2"));
document.getElementById("button2").addEventListener("dblclick", hideButton);

document.getElementById("button3").addEventListener("click", changeColor);
document.getElementById("button3").addEventListener("mouseover", () => showMessage("message3"));
document.getElementById("button3").addEventListener("mouseout", () => hideMessage("message3"));
document.getElementById("button3").addEventListener("dblclick", hideButton);
