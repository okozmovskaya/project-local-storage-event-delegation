# Development Strategy

> `project-local-storage-event-delegation`

A beginner project where we work collaboratively on Document Object Model. That is a small site with sort of tapas menu, where site-visitor can add things which save in menu after refresh the page. Also if site-visitor want he can check and uncheck menu items. And he hes special button for toggle all items by pressing and clear all items with the Clear All button. 
For the aim to alive the page it's added css-effects: spacing/blur/base color.

## Wireframe

![wireframe](./wireframe.png)

## 0. Set-Up

### Repository

- Created a new repository
- Cloned the repository
- Added HTML and CSS features for user interface
- Added JS template files
- Started `development-strategy.md` file
- Created issues
- Pushed the changes
- Turned on GitHub Pages

## 1. Button Add-item

**As a site visitor...**

> assigned to `oguz`  
> reviewers `olga` , `yauh` and `sayed`

## Repo

This user story was developed on a branch called `add-item`

## JS

- Got element with `querySelector` method
- Created an array to store user input
- Created a function to get user input and store in our array with `push()` method
- Used `LocalStorage`, `.setItem()` and `.getItem()` property to prevent the list disappear when the page is refreshed
- Created another function for converting our array to a string with `map()` method and change the HTML content with `.innerHTML` property

## HTML

- I moved the `script` tags into the `body` tag

---

## 2. Function to save items

**As a site visitor I want to see my list saved**

> assigned to `Yauheniya`  
> reviewers `Oguz` , `Olga` and `Pavel`

## Repo

This user story was developed on a branch called `save`

## JS

- Oguz created function for converting our array to a string with `map()` method and change the HTML content with `.innerHTML` property, with `join` method to finalise.

## HTML

- Added input tag for visual checkbox option with JS ternary condition.

---

## 3. Function to check/ uncheck items

**As a site visitor I want to be able to check or uncheck items from menu...**

> assigned to `Sayed`  
> reviewers `Oguz` and `Olga`

## Repo

This user story was developed on a branch called `Done-item`

## JS

- created the function called `checkedDone()`
- Added an `input` element in `add-item.js`
- Added event listener

## HTML

- Nothing

## CSS


---

## 4. Update CSS variables: spacing-blur-base-color

**As a site visitor I want to change background of tapas-menu with color-picker and change the blur and spacing of logo-fish with special progress bar**

> assigned to `Olga`  
> reviewers `Oguz` and `Pavel`

## Repo

This user story was developed on a branch called `spacing-blur-color`

## JS

- Use `window.onload` property
- Got element with `getElementByID` and `querySelector` method
- Got `forEach` method to call `function addEventListenerToElem` to each input-element in `div #controls`
- Create `function addEventListenerToElem()` to assign event-listener `mousemove` for progress-bar (effect spacing and blur) and `change` for color-picker
- Create `function handleUpdate()` for realize css-effects

## HTML

- moved the script-tag for `spacing-blur-base-color.js` inside head-tag
- add `div id-"controls"` for adding two progress-bars (spacing and blur) and color-picker


## CSS

- Add stile for CSS-controls `input` like as tapas-menu
- Assign `var` for color-picker, spacing and blur in `root-selector`
- Change value for properties padding and filter of `svg-selector` and for background of `.wrapper-selector` on variables from `root`

---

## 5. `Clear All` and `Toggle all items` buttons

**As a site visitor I can toggle all items by pressing and appropriate button. Also I can clear all items with the Clear All button**

> assigned to `Pavel`  
> reviewers `Olga` , `Oguz`
> closes issue #6


## Repo

This user story was developed on a branch called `additional-buttons`

## JS
The `onload` event listener was added, which callback function creates two buttons on the page and assigns `onclick` event to every button. 

## HTML
Script tag with the `items-handler-btns.js` was added. This script contains the callback and service functions for the `onload` event 

## CSS

Some CSS was added to style the handler buttons.

---
