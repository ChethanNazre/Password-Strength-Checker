const password = document.getElementById("password");
const message = document.getElementById("message");
const strength = document.getElementById("strength");
const submitButton = document.querySelector("button");

password.addEventListener("input",function(){
    const passwordValue = password.value;
    const passwordLength = passwordValue.length;
    let strengthValue ='';
    if(password===0){
        strengthValue = 'WEAKEST';
    }
    else if(passwordLength<6){
        strengthValue = 'HACKABLE'
    }
    else if(passwordLength<10){
        strengthValue = '-NOT-BAD-'
    }
    else if(passwordLength<12){
        strengthValue = '->GOOD<-'
    }
    else if(passwordLength<14){
        strengthValue = 'IMPRESSIVE'
    }
    else{
        strengthValue = 'STRONGEST'
    }
    strength.textContent = strengthValue;
    message.style.display="block"
});

submitButton.addEventListener("click",function(){
    const passwordType = password.getAttribute('type');
    if(passwordType === 'password'){
        password.setAttribute('type','text');
    }
    else{
        password.setAttribute('type','password');
    }
});