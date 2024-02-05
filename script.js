const InputPassword = document.querySelector('#password')

const inputlength = document.querySelector('#password-length')
const uppercaseCheckEl = document.querySelector('#uppercase-check')
const numberCheckEl = document.querySelector('#number-check')
const symbolCheckEl = document.querySelector('#symbol-check')

const securityindicatorBar =document.querySelector('#security-indicator-bar') 

document.querySelector('#copy').addEventListener('click', copy)
document.querySelector('#copy-2').addEventListener('click', copy)

let inputlengthvalue = 16


function GeratePasswords(){
let chars = 'abcdefghjkmnpqrstuvwxyz'

const uppercaseChar = 'ABCDEFGHJKLMNPQRSTUVWXYZ'
const numberChar = '123456789'
const symbolChar = '?!@&*()[]#'


if(uppercaseCheckEl.checked){
 chars += uppercaseChar
}

if(numberCheckEl.checked){
    chars += numberChar
    }

    if(symbolCheckEl.checked){
        chars += symbolChar
        }

let password = ''

for(let i = 0; i < inputlengthvalue; i++){

    const randomNumber = Math.floor( Math.random()* chars.length)

    password += chars.substring(randomNumber, randomNumber+1)

}
InputPassword.value = password
 console.log(password)
 
 calculateQuality()
}

function calculateQuality(){
const numberCheckEl = document.querySelector('#number-check')
const percent = Math.round((inputlengthvalue / 64)*25 +(uppercaseCheckEl.checked ?  30 : 0) + (numberCheckEl.checked ?  15 : 0 ) + (symbolCheckEl.checked ? 30 : 0))

securityindicatorBar.style.width = `${percent}% `

if(percent > 70){
securityindicatorBar.classList.add('safe')
securityindicatorBar.classList.remove('warning')
securityindicatorBar.classList.remove('critical')
}else if(percent > 50){
   securityindicatorBar.classList.add('warning')
   securityindicatorBar.classList.remove('critical')
    securityindicatorBar.classList.remove('safe')
}else{
securityindicatorBar.classList.add('critical')
securityindicatorBar.classList.remove('warning')
securityindicatorBar.classList.remove('safe')
}
}




uppercaseCheckEl.addEventListener('click', GeratePasswords)
numberCheckEl.addEventListener('click', GeratePasswords)
symbolCheckEl.addEventListener('click', GeratePasswords)

function copy(){

    navigator.clipboard.writeText(InputPassword.value)
}

inputlength.addEventListener('input', function(){

inputlengthvalue = inputlength.value
GeratePasswords()
calculateQuality()
document.querySelector('#password-length-text').innerText = inputlengthvalue



} )



GeratePasswords()
calculateQuality()
