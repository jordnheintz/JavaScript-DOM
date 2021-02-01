document.querySelector("body").style.fontFamily= "Arial, sans-serif";

document.querySelector('#name').textContent = 'Name: Jordan';
document.querySelector('#favs').textContent = 'Favorites: music, snow, french fries';
document.querySelector('#hometown').textContent = 'Hometown: New Castle';
document.querySelector('#fact').textContent = 'Pink is my favorite color.';

document.querySelector("ul").style.color= "pink";

let img = document.createElement('img'); 
img.src = "jordan.JPG"
document.querySelector('body').appendChild(img); 