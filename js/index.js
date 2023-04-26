//form
const d = document;
const $form = d.getElementById("form");
//icon
const $iconPassword = $form.querySelector(".fas");
const $iconPasswordRepeat = $form.querySelector(".pass-repeat");
//password
const $pass = d.getElementById("pass");
const $pass_repeat = d.getElementById("pass-repeat");

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
};

const changeTypePassword = (e) => {
  let { classList } = e.target;

  classList.toggle("active");

  if (e.target.matches(".active")) {
    $pass.type = "text";
    classList.replace("fa-eye-slash", "fa-eye");
  } else {
    $pass.type = "password";
    classList.replace("fa-eye", "fa-eye-slash");
  }
};

const changeTypePasswordRepeat = (e) => {
  let { classList } = e.target;
  classList.toggle("active");

  if (e.target.matches(".active")) {
    $pass_repeat.type = "text";
    classList.replace("fa-eye-slash", "fa-eye");
  } else {
    $pass_repeat.type = "password";
    classList.replace("fa-eye", "fa-eye-slash");
  }
};

$iconPassword.addEventListener("click", changeTypePassword);
$iconPasswordRepeat.addEventListener("click", changeTypePasswordRepeat);

$form.addEventListener("submit", validationInputs);
