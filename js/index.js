// import { prevent } from "./fun";

document.addEventListener('DOMContentLoaded',() => {
    form()
})

const d = document;
const $form = d.getElementById('form')
const $name = d.getElementById('user');
const $email = d.getElementById('correo');
const $pass = d.getElementById('pass');
const $warning = $form.querySelectorAll('.warning')


//Expresiones Regulares
let regex = {    
    regexName: /^[a-zA-z]+$/,
    regexEmail: null,
    
    validation: function(text) {
        return this.regexName.test(text)
    }
}
Object.freeze(regex);



function form () {
    //Desestructuracion del objeto "Expressiones Regulares"

    $form.addEventListener('submit', (e) => {
        e.preventDefault();
    })

    $name.addEventListener("input", (e) => {
        let text = e.target.value;
        const maxLength = 15;
        const minLength = 5;

        if(!regex.validation(text)) {
            return console.log("Intenta no escribir numeros")
        }
        
        if(text.length > maxLength || text.length < minLength) {
            return console.log(`La cantidad requierida de caracters es que sea mayor a 5 hasta 15`)
        }
        
        return console.log(`Esta todo Ok, tu nombre ingresado es ${text}`)
    })

}




