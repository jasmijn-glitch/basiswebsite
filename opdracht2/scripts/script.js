// JavaScript Document
console.log("howdy");

var gridButton = document.querySelector("#view-grid");
var listButton = document.querySelector("#view-list");

gridButton.addEventListener("change", toGrid);

listButton.addEventListener("change", toList);

function toGrid() {
    document.body.classList.add("toonAlsGrid");
    document.body.classList.remove("toonAlsList");
}

function toList() {
    document.body.classList.add("toonAlsList");
    document.body.classList.remove("toonAlsGrid");
}


