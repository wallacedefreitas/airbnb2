onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const idPlace = document.getElementById('id') as HTMLSpanElement
  if(id) {
    console.log('id = ', id);
    idPlace.innerHTML = id;
    fetch(backendAddress + 'api/comments/manager/' + id + '/')
    .then(response => response.json())
    .then(post => {
      let campos = ['airbnb_name', 'user_comment']
      for(let i=0; i<campos.length; i++) {
        (document.getElementById(campos[i]) as HTMLInputElement).value = post[campos[i]];
      }

    }) .catch(erro => { console.log('Erro: ' + erro); });
  }
  
  else { idPlace.innerHTML = 'URL mal formada: ' + window.location; }

  (document.getElementById('edita') as HTMLButtonElement)
    .addEventListener('click', (evento) => {
  evento.preventDefault();
  const form = document.getElementById('meuFormulario') as HTMLFormElement;
  const elements = form.elements;
  let data: Record<string, string> = {};
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i] as HTMLInputElement;
    data[element.name] = element.value;
  }

  const token = localStorage.getItem('token');
  fetch(backendAddress + "api/comments/manager/" + id + '/', {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Authorization': 'Token ' + token,
      'Content-Type': 'application/json'
      }
  })
  .then(response => {
      if(response.ok) { (document.getElementById('mensagem') as HTMLDivElement).innerHTML = 'Sucesso' }

      else { (document.getElementById('mensagem') as HTMLDivElement).innerHTML = 'Erro: ' + response.status + " " + response.statusText }

  })
  .catch(erro => { console.log('Erro: ' + erro) })
    })
}