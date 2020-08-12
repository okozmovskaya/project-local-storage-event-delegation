function addHandlerBtns() {

    const wrapper = document.querySelector(".wrapper");

    const clearAllBtn = document.createElement("BUTTON");
    clearAllBtn.setAttribute('id', 'clearAll');
    clearAllBtn.innerHTML = 'Clear all';

    const toggleItemsBtn = document.createElement("BUTTON");
    toggleItemsBtn.setAttribute('id', 'toggleItems');
    toggleItemsBtn.innerHTML = 'Toggle items';

    clearAllBtn.addEventListener('click', buttonHandler);
    toggleItemsBtn.addEventListener('click', buttonHandler);

    wrapper.append(toggleItemsBtn);
    wrapper.append(clearAllBtn);

}

function buttonHandler() {
    switch (event.target.id) {
        case "toggleItems":
            toggleItems();
            break;
        case 'clearAll':
            clearAll();
            break;
    }

}

function toggleItems() {

    items.forEach(item => {
        item.done = !item.done;

    });

    localStorage.setItem('items', JSON.stringify(items));
    addingText(items, itemsList);
}

function clearAll() {
    if (items.length === 0) return;

    if (confirm("Are you sure to clear all items?") === false) return;

    localStorage.clear();
    items.length = 0;
    addingText(items, itemsList);
};