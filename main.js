let domButton = document.createElement("button");
let bodyElement = document.querySelector("body");

domButton.append("Remove")
bodyElement.append(domButton);

let domMain = document.createElement("main");
bodyElement.append(domMain);

let domImgElement = document.createElement("img");
domImgElement.className = "image";
domImgElement.src = "https://upload.wikimedia.org/wikipedia/commons/2/22/Kangur.rudy.drs.jpg";
domMain.append(domImgElement);

let domAnchorElement = document.createElement("a");
domAnchorElement.className = "link";
domAnchorElement.href = "https://en.wikipedia.org/wiki/Kangaroo";
domAnchorElement.append("Link to Wikipedia");
domMain.append(domAnchorElement);

domButton.addEventListener("click", function () {

    let domMain = document.querySelector("main");
    domMain.remove();
})