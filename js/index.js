//form
const d = document;
const $form = d.getElementById('form')


//funcitons
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

//functions inputs
const validationInputs = (event) => {
    event.preventDefault();
    // const {user, correo, pass} = event.target;

    // console.log(user.value, correo.value, pass.value)

}

$form.addEventListener('submit', validationInputs)





