$("document").ready(function(){

    /* Checa se o campo foi preenchido */
    function checkPadding(element, emptyFields, i){
        /* add classe de erro e indice = 1 */ 
        if(element.value == ""){ 
            $(element).addClass("formError")
            emptyFields[i] = 1;
        /* remove classe de erro e indice = 0 */ 
        } else {
            $(element).removeClass("formError")
            emptyFields[i] = 0;
        }
    } 

    /* Checa se as senhas informadas correspondem */
    function checkPassword (){
        var passwordField = document.getElementsByName("formField")[4]
        var checkPasswordField = document.getElementsByName("formField")[5]
                
        if(passwordField.value != checkPasswordField.value){
            alert("As senhas não correspondem")
            $(passwordField).addClass("formError")
            $(checkPasswordField).addClass("formError")
        } else {
            return true
            /*
            clearFields();
            alert("Cadastro Realizado com sucesso!")
            document.getElementsByName("formField")[0].focus() */
        }
    }
    
    /* EVENTO DE CLIQUE NO BOTÃO DE CADASTRO */ 
    $("#cadastroButton").click(function(){          
        
        /* Adiciona todos os elementos com name="formField" no array emptyFields*/
        var emptyFields = []
        for(var i = 0; i < 6; i++){
            var element = document.getElementsByName("formField")[i]
            checkPadding(element, emptyFields, i);
        }

        /* verifica se algum indicie = 1 -> sem preencher */ 
        var status = true
        var var1 = emptyFields.find(element => element > 0)
        if(var1 == 1){
            status = false
            alert("Preencha todos os campos!")
        }

        /* se todos os campos preenchidos, verifica senhas e cadastra */ 
        if(status == true){
            var vari = checkPassword();
            if(vari == true) {
                    for(j = 0; j < 6; j++){
                    var field = document.getElementsByName("formField")[j]
                    field.value = "";
                    }
                    alert("Cadastro Realizado com sucesso!")
            }
        }
        
    })


})