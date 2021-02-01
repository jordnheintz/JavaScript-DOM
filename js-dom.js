document.querySelector("#para1").textContent = "Developers for life!";
document.querySelector("#para2").textContent = "We are coders!";

let img = document.createElement('img');
img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/220px-SNice.svg.png"
document.querySelector('body').appendChild(img);

document.querySelector("#para1").style.color = "pink";
document.querySelector("#para2").style.color = "pink";

let button = document.createElement('button');
document.querySelector('body').appendChild(button);
document.querySelector("button").style.width = "60px";
document.querySelector("button").style.height = "20px";
let buttonText = document.createTextNode("Click Here");
button.appendChild(buttonText);

document.querySelector("#para1").style.fontSize = "40px";

button.addEventListener("click", function () {
    img.parentNode.removeChild(img);
    button.parentNode.removeChild(button);
});