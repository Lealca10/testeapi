function carregarCadastros() {
            let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
            let tabela = document.getElementById("tabela-dados");

            tabela.innerHTML = "";
            usuarios.forEach(user => {
                let row = `<tr><td>${user.nome}</td><td>${user.email}</td><td>${user.idade}</td></tr>`;
                tabela.innerHTML += row;
            });

            console.log("Usuários Carregados:", usuarios);
        }

        function limparCadastros() {
            localStorage.removeItem("usuarios");
            carregarCadastros();
        }

        window.onload = carregarCadastros;