let table = document.querySelector('#tableContents');
let list = document.createElement("ul");
let category = document.querySelectorAll("h1");

for (i = 0; i < category.length; i++) {
    let items = document.createElement("li");
    let links = document.createElement("a");
    links.setAttribute("href", "#");
    links.innerText = category[i].innerText;
    items.appendChild(links);
    list.appendChild(items);
}
table.appendChild(list);