const API_URL = 'http://localhost:3000/usuarios';

function carregarCadastros() {
    fetch(API_URL)
        .then(res => res.json())
        .then(usuarios => {
            const tabela = document.getElementById("tabela-dados");
            tabela.innerHTML = "";

            usuarios.forEach(user => {
                const row = `
                    <tr>
                        <td>${user.nome}</td>
                        <td>${user.email}</td>
                        <td>${user.idade}</td>
                        <td>
                            <a href="index.html?id=${user.id}" class="btn btn-sm btn-warning me-1">Editar</a>
                            <button class="btn btn-sm btn-danger" onclick="deletarUsuario(${user.id})">Excluir</button>
                        </td>
                    </tr>`;
                tabela.innerHTML += row;
            });
        })
        .catch(error => console.error("Erro ao carregar usuários:", error));
}

function deletarUsuario(id) {
    if (confirm("Tem certeza que deseja excluir este usuário?")) {
        fetch(`${API_URL}/${id}`, { method: 'DELETE' })
            .then(() => carregarCadastros())
            .catch(error => console.error("Erro ao excluir usuário:", error));
    }
}

function limparCadastros() {
    fetch(API_URL)
        .then(res => res.json())
        .then(usuarios => {
            return Promise.all(usuarios.map(user =>
                fetch(`${API_URL}/${user.id}`, { method: 'DELETE' })
            ));
        })
        .then(() => carregarCadastros())
        .catch(error => console.error("Erro ao limpar usuários:", error));
}

window.onload = carregarCadastros;