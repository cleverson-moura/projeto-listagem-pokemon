//PEGAR O ID DO BOTAO TROCAR TEMA
const botaoAlterarTema = document.getElementById("botao-alterar-tema")

const imagemBotaoAlterarTema = document.querySelector(".imagem-botao")

//PEGAR O ELEMENTO BODY
const body = document.querySelector("body")

//IDENTIFICAR O CLIQUE DO USUARIO
botaoAlterarTema.addEventListener("click", () => {
    //QUANDO CLICAR DE NOVO VOLTAR O TEMA E A IMAGEM
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    //ALTERNADO ENTRE MODO ESCURO E CLARO
    body.classList.toggle("modo-escuro")

    //VERICAR SE ESTÁ NO MODO ESCURO
    if (modoEscuroEstaAtivo) {
        //MUDAR A IMAGEM DO BOTAO PARA SOL
        imagemBotaoAlterarTema.setAttribute("src", "./src/images/sun.png")
    } else {
        //MUDAR A IMAGEM DO BOTAO PARA LUA
        imagemBotaoAlterarTema.setAttribute("src", "./src/images/moon.png")
    }


})