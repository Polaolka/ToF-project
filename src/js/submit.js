let fields = document.querySelectorAll('.form__input'); // select all inputs
let submitButton = document.querySelector('.modal__btn'); // select submit btn

fields = Array.from(fields); // Turn fields into an Array to access the ".every" method.

fields.forEach(field => {
  field.addEventListener('keyup', () => {
    submitButton.disabled = !fields.every(field => field.value);
  });
});
