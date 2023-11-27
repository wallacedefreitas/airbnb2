onload = () => {
  (document.getElementById('btnLogin') as HTMLInputElement).addEventListener('click', evento => {
      evento.preventDefault();
      const username: string = (document.getElementById('user_nickname') as HTMLInputElement).value;
      const password: string = (document.getElementById('user_password') as HTMLInputElement).value;
      const msg = (document.getElementById('msg') as HTMLDivElement);

      fetch(backendAddress + 'api/user/all', {
          method: 'POST',
          body: JSON.stringify({
              'user_nickname': username,
              'user_password': password
          }),
          headers: { 'Content-Type': 'application/json' }
      })
      .then((response: Response) => {
          if (response.ok) { return response.json(); }
          
          else {
              if (response.status == 401) { msg.innerHTML = 'Usuário ou senha inválidos.'; }

              throw new Error('Erro na autenticação');
          }
      })
      .then((data: { token: string }) => {
          const token: string = data.token;
          localStorage.setItem('token', token);
          console.log(token)
          window.location.replace('home.html');
      })
      .catch(erro => { console.log(erro) });
  });
};