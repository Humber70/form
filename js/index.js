//form
const d = document;
const $form = d.getElementById("form");
//icon
const $icon_view = $form.querySelector(".fas");
const $icon_view_repeat = $form.querySelector(".pass-repeat");
console.log($icon_view_repeat);

//password
const $pass = d.getElementById("pass");
const $pass_repeat = d.getElementById("pass-repeat");

//funcitons
let validations = {
  regex: function (text) {
    let regexName = /^[a-zA-z]+$/;
    return regexName.test(text);
  },

  includeNumber: function (text) {
    if (!isNaN(Number(text))) {
      return false;
    } else {
      return true;
    }
  },

  longCharacter: function (min, max, text) {
    return text.length > min && text.length <= max;
  },
};
Object.freeze(validations);

//functions inputs
const validationInputs = (event) => {
  event.preventDefault();
  // const {user, correo, pass} = event.target;

  // console.log(user.value, correo.value, pass.value)
};

const iconPass = (e) => {
  e.target.classList.toggle("active");

  if (e.target.matches(".active")) {
    $pass.type = "text";
    e.target.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    $pass.type = "password";
    e.target.classList.replace("fa-eye", "fa-eye-slash");
  }
};

const iconPassRepeat = (e) => {
  e.target.classList.toggle("active");

  if (e.target.matches(".active")) {
    $pass_repeat.type = "text";
    e.target.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    $pass_repeat.type = "password";
    e.target.classList.replace("fa-eye", "fa-eye-slash");
  }
};

$icon_view.addEventListener("click", iconPass);

$icon_view_repeat.addEventListener("click", iconPassRepeat);

$form.addEventListener("submit", validationInputs);
