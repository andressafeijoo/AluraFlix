const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    const listaRespostas = {
        "nome": e.target.elements["nome"].value,
        "descricao": e.target.elements["descricao"].value,
        "cor": e.target.elements["cor"].value,
        "codigo": e.target.elements["codigo"].value,
    }

    localStorage.setItem("cadastro", JSON.stringify(listaRespostas));

    window.location.href = "./nova-categoria.html"
})