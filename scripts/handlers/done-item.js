'use strict';
/* Get Elements (with querySelector and getItem)*/

// Not needed because elements have called in add-item.js


/* Write the function*/ 

function checkedDone(event){

    if(!event.target.matches('input')) return;

    const el = event.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    addingText(items, itemsList);
}



/* write your event listeners in event-listeners.js*/
