"use strict";var d=document,$form=d.getElementById("form"),$iconPassword=$form.querySelector(".fas"),$iconPasswordRepeat=$form.querySelector(".pass-repeat"),$pass=d.getElementById("pass"),$pass_repeat=d.getElementById("pass-repeat"),validations={regex:function(e){return/^[a-zA-z]+$/.test(e)},includeNumber:function(e){return isNaN(Number(e))?(console.log("es una string"),!0):(console.log("Es un numero"),!1)},longCharacter:function(e,a,t){return t.length>e&&t.length<=a}};Object.freeze(validations);var changeTypePassword=function(e){var a=e.target.classList;a.toggle("active"),e.target.matches(".active")?($pass.type="text",a.replace("fa-eye-slash","fa-eye")):($pass.type="password",a.replace("fa-eye","fa-eye-slash"))},changeTypePasswordRepeat=function(e){var a=e.target.classList;a.toggle("active"),e.target.matches(".active")?($pass_repeat.type="text",a.replace("fa-eye-slash","fa-eye")):($pass_repeat.type="password",a.replace("fa-eye","fa-eye-slash"))},validationForm=function(e){e.preventDefault()},validationInputsForm=function(e){var a=e.target,t=a.name,s=a.value;"user"===t&&(validations.regex(s)?console.log("bien hecho tu nombre es ".concat(s)):console.log("introduce tu nombre"))};$iconPassword.addEventListener("click",changeTypePassword),$iconPasswordRepeat.addEventListener("click",changeTypePasswordRepeat),$form.addEventListener("change",validationInputsForm),$form.addEventListener("submit",validationForm);