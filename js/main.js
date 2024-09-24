
function validate(){
    var user=document.getElementById("user").value;
    var email=document.getElementById("email").value;
    var pass=document.getElementById("pass").value;
    var confirm=document.getElementById("confirm").value;
    var result=document.getElementById("result");

    result.setAttribute("class","alert alert-danger text-center")
    
    if(user=="" && email=="" && pass=="" && confirm==""){
        result.innerHTML = "Enter Data In Form";
        return false;
    }
    else if(user.length>15 || user.length<5){
        result.innerHTML = "Enter 5-15 characters";
        return false;
    }
    else if(email.indexOf("@")==-1 ||email.indexOf(".com")==-1){
        result.innerHTML = "Enter Valid Email";
        return false;
    }
    else if(pass==""){
        result.innerHTML = "Enter Password";
        return false;
    }
    else if(pass.length<8){
        result.innerHTML = "Week Password";
        return false;
    }
    else if(pass.length>20){
        result.innerHTML = "Enter Less Than 20";
        return false;
    }
    else if(pass.length !=confirm.length){
        result.innerHTML = "Match Password";
        return false;
    }
}