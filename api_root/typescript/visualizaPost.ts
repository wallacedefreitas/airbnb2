onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const abnbNome = document.getElementById('airbnb_name') as HTMLSpanElement
  const userNome = document.getElementById('user_nickname ') as HTMLSpanElement
  const nota = document.getElementById('user_note ') as HTMLSpanElement
  const comentario = document.getElementById('user_comment ') as HTMLSpanElement

  console.log("a")
  if(id){
    abnbNome.innerHTML = id;
      fetch(backendAddress + 'api/comments/manager/' + id + '/')
      .then(response => response.json())
      .then(post =>{
        userNome.innerHTML = post['user_nickname']
        console.log(post['user_nickname'])
        nota.innerHTML = post['user_note ']
        comentario.innerHTML = post['user_comment ']
      }).catch(erro =>{ console.log('Erro: ' + erro); });
      
  } else { abnbNome.innerHTML = 'URL mal formada: ' + window.location; }
}