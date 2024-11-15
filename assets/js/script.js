const email = document.getElementById('email');
const singupPage = document.getElementById('singupPage');
const successPage = document.getElementById('successPage');
const form = document.getElementById('singupForm');
const successBtn=document.getElementById('successBtn')
const successEmail =document.getElementById('successEmail')
const errors= document.getElementById('error')

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const accaunt = e.target.querySelector("#email")
    if(accaunt.value && accaunt.value.includes('@') && emailRegex.test(accaunt.value)){
        singupPage.classList.add('singup-container-submited')
        successPage.classList.add('success-container-submited')
        successEmail.innerText= accaunt.value;
    }else{
        email.classList.add('input-border-error','input-background-error')
        errors.innerText='Valid email required'  
    }
})

successBtn.addEventListener("click", ()=>{
    singupPage.classList.remove('singup-container-submited')
    successPage.classList.remove('success-container-submited')
})

