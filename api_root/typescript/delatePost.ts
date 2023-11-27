onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const idPlace = document.getElementById('id') as HTMLSpanElement;

  if (id) {
    console.log('id = ', id);
    console.log('idPlace =' , idPlace);
    fetch(backendAddress + 'api/comments/manager/' + id + '/')
      .then(response => response.json())
      .then(post => {
        const mensagem = 'Deseja apagar o post "${post.airbnb_name}"?';
        const mensagemPlace = document.getElementById('mensagem') as HTMLDivElement;
        mensagemPlace.innerText = mensagem;
        const botaoCancelar = document.getElementById('botaoCancelar') as HTMLAnchorElement;
        botaoCancelar.addEventListener('click', () => { window.location.href = 'home.html'; });
        const botaoConfirmar = document.getElementById('botaoConfirmar') as HTMLButtonElement;
        botaoConfirmar.addEventListener('click', () => {
          console.log('Botão de confirmação clicado');
          const token = localStorage.getItem('token');
          fetch(backendAddress + 'api/comments/manager/' + id + '/', {
            method: 'DELETE',
            headers: {
              'Authorization': 'Token ' + token,
              'Content-Type': 'application/json'
            }
          })
          .then(response => {
            console.log('Publicação excluída com sucesso!');
            window.location.href = 'home.html';
          })
          .catch(erro => { console.error('Erro ao excluir o post:', erro); });
        });
      })
      .catch(erro => { console.log('Erro: ' + erro); });
  }
  
  else { idPlace.innerHTML = 'URL mal formada: ' + window.location; }

};