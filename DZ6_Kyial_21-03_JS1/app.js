const counter=document.querySelectorAll('.counter')
const decBtn=document.querySelector('.decrement')
const input=document.querySelector('input')
const incBtn=document.querySelector('.increment')


decBtn.onclick=function (){
    input.value--
}
incBtn.onclick=function () {
    input.value++
}



