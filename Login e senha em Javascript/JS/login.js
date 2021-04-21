function log(){

    var email = document.getElementById ("email");
    var password = document.getElementById ("password");

  
        if( email.value == "admin@dominio.com" && password.value == "admin") {

            localStorage.setItem("access",true);

            window.location.href="index.html";  
            
        
        }else{

            alert(" Access Denied");

        }
       return;
}

          

  
