function cadastrar() {
    let nome = document.getElementById("Cnome").value;
    let email = document.getElementById("Eemail").value;
    let idade = document.getElementById("idade").value;

    if (nome === "" || email === "" || idade === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    let usuario = { nome, email, idade };

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    console.log("Usuários Salvos:", JSON.stringify(usuarios));

    alert("Cadastro realizado com sucesso!");
    window.location.href = "detalhesLista.html";
}

function limparCampos() {
    document.getElementById("Cnome").value = "";
    document.getElementById("Eemail").value = "";
    document.getElementById("idade").value = "";
}