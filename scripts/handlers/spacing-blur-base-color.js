'use strict';
'use strict';
/* Add changes in html and css files*/ 

/* Get Elements (with querySelector)*/

window.onload = function () {
    const inputs = document.getElementById("controls").querySelectorAll("input");
    /* Write the function*/ 
    inputs.forEach(addEventListenerToElem);
}

function addEventListenerToElem(elem) {
    if (elem.type == 'range') {
        elem.addEventListener('mousemove', handleUpdate);
    } else if (elem.type == 'color') {
        elem.addEventListener('change', handleUpdate);
    }
}

function handleUpdate() {
    // debugger;
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }

/* write your event listeners in event-listeners.js*/
