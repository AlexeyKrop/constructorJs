'use strict';
function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector; 
  this.height = height;
  this.width = width; 
  this.bg = bg;
  this.fontSize = fontSize;
  DomElement.prototype.element = function(){

    if(selector === '.block'){
      let div = document.createElement('div');
      div.classList.add('block');
      document.body.append(div);
      div.style.height = height;
      div.style.width = width;
      div.style.background = bg;
      div.style.fontSize = fontSize;
      div.innerHTML = 'Привет';
    }else if(selector === '#best'){
       let paragraph = document.createElement('p');
       paragraph.id = '#best';
       document.body.append(paragraph);
       paragraph.style.height = height;
       paragraph.style.width = width;
       paragraph.style.background = bg;
       paragraph.style.fontSize = fontSize;
       paragraph.innerHTML = 'Как дела';
    }
  };
  

}
let domElement = new DomElement('.block', '100px', '100px', 'blue', '14px');
// let paragraph = new DomElement('#best', '100px', '100px', 'blue', '14px');
DomElement.prototype.element();
