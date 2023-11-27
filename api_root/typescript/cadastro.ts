onload = () => {
    const signUp = () => {
        const username: string = (document.getElementById('user_nickname ') as HTMLInputElement).value;
        const password: string = (document.getElementById('user_password ') as HTMLInputElement).value;
        const email: string = (document.getElementById('user_email ') as HTMLInputElement).value;

        fetch(backendAddress + 'api_rest/user_manager/', {
            method: 'POST',
            body: JSON.stringify({
                'user_nickname ': username,
                'user_password ': password,
                'user_email ': email
            }),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            if (response.ok) { return response.json(); } else { throw new Error('Erro na criação do usuário'); }

        })
    };
    (document.getElementById('btnSignUp') as HTMLInputElement).addEventListener('click', evento => { evento.preventDefault(); signUp(); });
};