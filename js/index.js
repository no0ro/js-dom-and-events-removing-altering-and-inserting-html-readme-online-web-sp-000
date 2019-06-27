//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
let element = document.createElement('div');

element.innerHTML = 'Hello, DOM!';
element.style.backgroundColor = '#f9f9f9';
//<div style="background-color: rgb(249, 249, 249);">Hello, DOM!</div>

document.body.appendChild(element);
element.style.textAlign = 'center';



let ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul);
//creates ul with 3 items

ul.style.textAlign = 'left';


ul.removeChild(ul.querySelector('li:nth-child(2)'));
//removed the 2nd list item with removeChild

ul.remove();
//to remove an element itself 
