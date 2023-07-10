import _ from 'lodash';

const throttledStorageUpdate = _.throttle(getFormData, 500);
const emailField = document.querySelector('input');
const textArea = document.querySelector('textarea');
const form = document.querySelector('form');
let formObject = {};

//Track input event on form//
//Each time event is activated write to local storage an object//
//Object contains email and message fields and saves the value //
//in each field when the input event was activated//
//Let the key for the storage be the "feedback-form-state" string.//

emailField.addEventListener('input', saveformData);
textArea.addEventListener('input', saveformData);

function saveformData() {
  const email = emailField.value;
  const message = textArea.value;

  if (email !== '' || message !== '') {
    const formData = { email, message };
    const formdataString = JSON.stringify(formData);
    localStorage.setItem('feedback-form-state', formdataString);
  }
}
//after page loads check the state of storage. if it stores data//
//use it to fill emailField and textArea.//
//if the local storage object is empty then both fields must be empty//

window.addEventListener('load', getFormData);

function getFormData() {
  const storageState = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (storageState) {
    formObject = storageState;
    form.elements.email.value = storageState.email || '';
    form.elements.message.value = storageState.message || '';
  }
}

//clear storage and form field on form submit//
//Display object with email and message fields and their current values//
//within Console//
//also remove any unwated default actions//

form.addEventListener('submit', event => {
  event.preventDefault();
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  formObject = { email, message };
  console.log(formObject);
  localStorage.removeItem('feedback-form-state');
  form.reset();
});
