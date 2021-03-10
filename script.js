'use strict';
function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector; 
  this.height = height;
  this.width = width; 
  this.bg = bg;
  this.fontSize = fontSize;
  DomElement.prototype.element = function(){
    let count = 10;
    if(selector === '.block'){
      let block = document.createElement('div');
      block.classList.add('block');
      document.body.append(block);
      block.style.height = height;
      block.style.width = width;
      block.style.background = bg;
      block.style.fontSize = fontSize;
      block.style.position = 'absolute';
      block.innerHTML = 'Привет';
      document.addEventListener('keydown', function(e) {
        const key = e.key;
        if(key === 'ArrowRight'){
          count += 10;
          block.style.background = 'green';
          block.style.left = count + 'px';
        }
        else if(key === 'ArrowLeft'){
          count -= 10;
          block.style.background = 'blue';
          block.style.left = count + 'px';
        } else if(key === 'ArrowDown'){
          count += 10;
          block.style.background = 'yellow';
          block.style.top = count + 'px';
        }else if(key === 'ArrowUp'){
          count -= 10;
          block.style.background = 'grey';
          block.style.top = count + 'px';
        }
      })
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
