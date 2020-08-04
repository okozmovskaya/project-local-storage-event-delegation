'use strict';
/* Get Elements (with querySelector)*/
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');

// use JSON.parse for converting to JS object from string
//this variable 
const items = JSON.parse(localStorage.getItem('items')) || [];

/* Write the function*/ 
function addItem(event) {

    debugger;

    //to prevent reloading the page
    event.preventDefault();

    const value = (this.querySelector('[name=item]')).value;
    console.log(value);
    const item = {
        value,
        done: false
    };

    //to add input value to our array 
    items.push(item);

    // use innerhtml and show my list on userinterface
    addingText(items, itemsList);

    //use local storage against refreshing
    //use JSON,stringify for converting to string from JS object form
    localStorage.setItem('items', JSON.stringify(items));

    //to clean input again
    this.reset();

}

function addingText(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
      return `
        <li>
          <label for="item${i}">${plate.value}</label>
        </li>
      `;
    }).join('');
  }

  addingText(items, itemsList);

/* write your event listeners in event-listeners.js*/
