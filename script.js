"use strict";
function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  DomElement.prototype.element = function () {
    let count = 0;
    if (selector === ".block") {
      let block = document.createElement("div");
      block.classList.add("block");
      document.body.append(block);
      block.style.height = height;
      block.style.width = width;
      block.style.background = bg;
      block.style.fontSize = fontSize;
      block.style.position = "absolute";
      block.innerHTML = "Привет";
      document.addEventListener("keydown", function (e) {
        let cs = window.getComputedStyle(block);
        let left = parseInt(cs.marginLeft);
        let top = parseInt(cs.marginTop);

        switch (e.key) {
          case "ArrowLeft": // если нажата клавиша влево
            if (left > 0) block.style.marginLeft = left - 10 + "px";
            break;
          case "ArrowTop": // если нажата клавиша вверх
            if (top > 0) block.style.marginTop = top - 10 + "px";
            break;
          case "ArrowRight": // если нажата клавиша вправо
            if (left < document.documentElement.clientWidth - 100)
            block.style.marginLeft = left + 10 + "px";
            break;
          case "ArrowDown": // если нажата клавиша вниз
            if (top < document.documentElement.clientHeight - 100)
            block.style.marginTop = top + 10 + "px";
            break;
        }
      });
    } else if (selector === "#best") {
      let paragraph = document.createElement("p");
      paragraph.id = "#best";
      document.body.append(paragraph);
      paragraph.style.height = height;
      paragraph.style.width = width;
      paragraph.style.background = bg;
      paragraph.style.fontSize = fontSize;
      paragraph.innerHTML = "Как дела";
    }
  };
}
let domElement = new DomElement(".block", "100px", "100px", "blue", "14px");
// let paragraph = new DomElement('#best', '100px', '100px', 'blue', '14px');
DomElement.prototype.element();
