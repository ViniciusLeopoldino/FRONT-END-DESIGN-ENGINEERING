document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.querySelector(".menu-icon");
  const sideMenu = document.querySelector("#sideMenu");
  const contentFrame = document.querySelector("#contentFrame");

  menuIcon.addEventListener("click", function() {
      sideMenu.classList.toggle("active");
      document.body.classList.toggle("menu-active");
  });

  const menuItems = document.querySelectorAll("#sideMenu ul li");

  menuItems.forEach(function(item) {
      if (item.id !== "logoutBtn") {
          item.addEventListener("click", function() {
              const page = item.dataset.page;
              if (page) {
                  contentFrame.src = page;
              }
          });
      } else {
          item.addEventListener("click", function() {
              logout();
          });
      }
  });

  function logout() {
      window.location.href = "login.html";
  }
});

document.getElementById("cadastro").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nomeOficina = document.getElementById("nome_oficina").value;
    const peca = document.getElementById("peca").value;
    const descricao = document.getElementById("descricao").value;
    const valor = document.getElementById("valor").value;
    const dataCompra = document.getElementById("data_compra").value;

    const tabela = document.getElementById("tabela-dados");

    const novaLinha = tabela.insertRow();

    novaLinha.insertCell(0).textContent = nomeOficina;
    novaLinha.insertCell(1).textContent = peca;
    novaLinha.insertCell(2).textContent = descricao;
    novaLinha.insertCell(3).textContent = valor;
    novaLinha.insertCell(4).textContent = dataCompra;

    // Opções de Ações para editar e remover a linha
    const acoes = novaLinha.insertCell(5);
    acoes.innerHTML = '<button>Editar</button> <button>Remover</button>';

    // Limpar o formulário após o envio
    document.getElementById("cadastro").reset();
});


