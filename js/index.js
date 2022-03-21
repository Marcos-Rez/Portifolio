function validarDados() {
    window.event.preventDefault()
    if(document.form.nome.value == ""){
        alert("Campo é obrigatório");
        document.form.nome.focus();//Para focar no elemento trabalhado
    }else if (document.form.email.value.indexOf("@") == -1 || document.form.email.value.indexOf(".") == -1){
        alert("email invalido")
    }

}
document.querySelector("form").addEventListener("submit", validarDados)