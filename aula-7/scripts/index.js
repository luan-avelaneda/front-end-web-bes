function executar(evento) {
 evento.preventDefault();
 limparErros();
 const nome = document.querySelector("#nome");
 const erroNome = document.querySelector("#erro-nome");
 if(nome.value === "") {
   erroNome.textContent = "Nome não pode estar vazio!";
   erroNome.classList.add("erro");
   erroNome.classList.remove("oculto");
 }  

const idade = document.querySelector("#idade");
const erroIdade = document.querySelector("#erro-idade");

if (idade.value === "") {
  erroIdade.textContent = "Idade não pode estar vazia!";
  erroIdade.classList.add("erro");
  erroIdade.classList.remove("oculto");
} else if (Number(idade.value) < 18) {
  erroIdade.textContent = "Idade deve ser maior ou igual a 18!";
  erroIdade.classList.add("erro");
  erroIdade.classList.remove("oculto");
}

 //TODO: COMO VALIDAR UM E-MAIL UTILIZANDO UM REGEX

function limparErros() {
 document.querySelectorAll(".erro").forEach((elemento) => {
   elemento.classList.remove("erro");
   elemento.classList.add("oculto");
 })
}
}