// import { prevent } from "./fun";

document.addEventListener('DOMContentLoaded',() => {
    form()
})

//form elements
const d = document;
const $form = d.getElementById('form')
const $name = d.getElementById('user');
const $email = d.getElementById('correo');
const $pass = d.getElementById('pass');

//error messages
const $parentWarning = $form.firstElementChild.nextElementSibling;

const $warning = d.createElement("p");



//Expresiones Regulares && validaciones
let validations = {    
    
    regex: function(text) {
        let regexName = /^[a-zA-z]+$/
        return regexName.test(text)
    },

    includeNumber: function (text) {
        if(!isNaN(Number(text))) {
            return false
        }else {
            return true
        }
    },

    longCharacter: function (min, max, text) {
        return (text.length > min && text.length <= max )
    }

}


Object.freeze(validations);


function form () {

    
    $form.addEventListener('submit', (e) => {
        e.preventDefault();
    })

    const {regex, includeNumber, longCharacter} = validations
    
    $name.addEventListener("blur", (e) => {
        
        let text = e.target.value.toUpperCase();

    
        if (includeNumber(text) && regex(text) && longCharacter(5,10,text)) {
            $name.style.outline = "5px solid #97d8aa"
            console.log("bien")
        } else {
            $name.style.outline = "5px solid red"
            console.log("mal")
        }
             
         
    })

}




