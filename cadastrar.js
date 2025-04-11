const API_URL = 'http://localhost:3000/usuarios';

window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const editId = urlParams.get('id');

    if (editId) {
        fetch(`${API_URL}/${editId}`)
            .then(res => res.json())
            .then(usuario => {
                document.getElementById("Cnome").value = usuario.nome;
                document.getElementById("Eemail").value = usuario.email;
                document.getElementById("idade").value = usuario.idade;

                // Alterar botão para "Atualizar"
                document.getElementById("btnCadastrar").textContent = "Atualizar";
            });
    }
};

function cadastrar() {
    const nome = document.getElementById("Cnome").value.trim();
    const email = document.getElementById("Eemail").value.trim();
    const idade = document.getElementById("idade").value.trim();
    const urlParams = new URLSearchParams(window.location.search);
    const editId = urlParams.get('id');

    if (!nome || !email || !idade) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const usuario = { nome, email, idade: parseInt(idade) };
    const url = editId ? `${API_URL}/${editId}` : API_URL;
    const metodo = editId ? 'PUT' : 'POST';

    fetch(url, {
        method: metodo,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuario)
    })
    .then(() => {
        alert(editId ? "Cadastro atualizado com sucesso!" : "Cadastro realizado com sucesso!");
        window.location.href = "detalhesLista.html";
    })
    .catch(error => {
        console.error("Erro:", error);
        alert("Erro ao salvar cadastro.");
    });
}

function limparCampos() {
    document.getElementById("Cnome").value = "";
    document.getElementById("Eemail").value = "";
    document.getElementById("idade").value = "";
}
