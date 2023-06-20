import './style.css';
import pasta from './pasta.jpeg';

function pageLoader() {
    const tabOneDiv = document.createElement('div');
    
    const container = document.querySelector('#content');
    container.appendChild(tabOneDiv);

    let restaurantName = document.createElement('h1');

    tabOneDiv.appendChild(restaurantName);

    restaurantName.innerHTML = "Asta La Pasta!";
    const myPasta = document.createElement('img');
    myPasta.src = pasta;

    tabOneDiv.appendChild(myPasta);
}

export { pageLoader };
