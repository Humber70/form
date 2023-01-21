const d = document;

const $form = d.getElementById('form')


const $name = d.getElementById('user');
const $email = d.getElementById('correo');
const $pass = d.getElementById('pass');





$form.addEventListener('submit', function(e) {
    e.preventDefault();
    if($name.value.lenght < 6) {
        console.log('introduce menos de 6 caracteres')
    }
    else {
        console.log('bienn')
    }
})
// console.log("hola");