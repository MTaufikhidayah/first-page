// validation code for inputs

var email = document.forms['form']['email'];
var email = document.forms['form']['pasword'];

var email_error = document.getElementById('email_error')
var pass_error = document.getElementById('pass_error')

function validation(){
    if(email.value.length < 9){
        email.style.border ="1px solid red";
        email_error.style.display="block";
        email.focus();
        return false;
    }
    if(password .value .length < 6){
        password .style .border ="1px solid red";
        pass_error .style .display ="block";
        password.focus();
        return false;
    }
}