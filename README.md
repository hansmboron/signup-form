# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![Desktop layout](./print1.png)
![Form Validation](./print2.png)
![Mobile layout](./print3.png)


### Links

- Solution URL: [https://www.frontendmentor.io/solutions/css-grid-javascript-f6nobh6FE](https://www.frontendmentor.io/solutions/css-grid-javascript-f6nobh6FE)
- Live Site URL: [https://hansmboron.github.io/signup-form/](https://hansmboron.github.io/signup-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid

### What I learned

This challenge helped me train and improve my skills with CSS, learning how to use CSS Grid and add an icon inside the `input` tag.

```html
<form class="form" id="form" method="post">
    <input type="text" name="first-name" id="first-name" placeholder="First Name">
    <div class="error" id="first-name-message"></div>
```
```css
.error-icon {
    background: url(../images/icon-error.svg) no-repeat 93%;
}
```
```js
function addErrorIcon(input) {
    input.classList.add('error-icon');
}

function removeErrorIcon(input) {
    input.classList.remove('error-icon');
}
```

### Useful resources

- [https://stackoverflow.com](https://stackoverflow.com/questions/16907518/css-input-with-width-100-goes-outside-parents-bound/16907625) - This helped me correcting a bug with the the `input` that having a width of 100% took up too much space leaving the components misaligned.

## Author

- Website - [Hans M Boron](https://www.mehsys.com.br)
- Frontend Mentor - [@hansmboron](https://www.frontendmentor.io/profile/hansmboron)
- GitHub - [@hansmboron](https://www.github.com/hansmboron)
- YouTube - [@HansMBoron](https://www.youtube.com/c/HansMBoron)
- LinkedIn - [@hansmateusboron](https://www.linkedin.com/in/hansmateusboron/)
