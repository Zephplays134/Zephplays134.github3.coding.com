// script.js

// Get the button element
const button = document.querySelector('button');
// Add an event listener to the button

button.addEventListener('click', () => {
    // Get the input element
    const input = document.querySelector('input');
})

//ui builder code
  const ui = document.querySelector('.ui');
  const input = document.querySelector('input');
  const button = document.querySelector('button');
  const list = document.querySelector('ul');
  const li = document.createElement('li');
  const p = document.createElement('p');
  const deleteButton = document.createElement('button');
  p.textContent = input.value;
  deleteButton.textContent = 'Delete';

  // add event listener to delete button