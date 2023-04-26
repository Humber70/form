// form
const d = document
const $form = d.getElementById("form")
// icon
const $iconPassword = $form.querySelector(".fas")
const $iconPasswordRepeat = $form.querySelector(".pass-repeat")
// password
const $pass = d.getElementById("pass")
const $pass_repeat = d.getElementById("pass-repeat")

const validations = {
  regex: function (text) {
    const regexName = /^[a-zA-z]+$/
    return regexName.test(text)
  },

  includeNumber: function (text) {
    if (!isNaN(Number(text))) {
      console.log("Es un numero")
      return false
    } else {
      console.log("es una string")
      return true
    }
  },

  longCharacter: function (min, max, text) {
    return text.length > min && text.length <= max
  }
}
Object.freeze(validations)

const changeTypePassword = e => {
  const { classList } = e.target

  classList.toggle("active")

  if (e.target.matches(".active")) {
    $pass.type = "text"
    classList.replace("fa-eye-slash", "fa-eye")
  } else {
    $pass.type = "password"
    classList.replace("fa-eye", "fa-eye-slash")
  }
}

const changeTypePasswordRepeat = e => {
  const { classList } = e.target
  classList.toggle("active")

  if (e.target.matches(".active")) {
    $pass_repeat.type = "text"
    classList.replace("fa-eye-slash", "fa-eye")
  } else {
    $pass_repeat.type = "password"
    classList.replace("fa-eye", "fa-eye-slash")
  }
}

// validacion de inputs
const validationForm = event => {
  event.preventDefault()
}

const validationInputsForm = e => {
  const { name, value } = e.target

  if (name === "user") {
    !validations.regex(value)
      ? console.log("introduce tu nombre")
      : console.log(`bien hecho tu nombre es ${value}`)
  }
}

$iconPassword.addEventListener("click", changeTypePassword)
$iconPasswordRepeat.addEventListener("click", changeTypePasswordRepeat)

$form.addEventListener("change", validationInputsForm)
$form.addEventListener("submit", validationForm)
