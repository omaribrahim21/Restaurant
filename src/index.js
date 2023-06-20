import { pageLoader } from './firstPage';
import './style.css';

const container = document.querySelector('#content');

const tabOneBtn = document.createElement('button');
tabOneBtn.innerHTML = "Home Page";

const tabTwoBtn = document.createElement('button');
tabTwoBtn.innerHTML = "Menu";

container.appendChild(tabOneBtn);
container.appendChild(tabTwoBtn);

let buttons = document.querySelectorAll('button');

for (i of buttons){
    i.addEventListener('click')////this will be a loop assigning buttons click event listners
    //everytime a tab is clicked it will delete the current content of the tab
    //and use the pageLoader function to load the other tab
    //this project uses javascript to basically make everything
}


pageLoader();
