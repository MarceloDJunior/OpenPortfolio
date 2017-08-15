

const UserAPI = {
    login: function (email, senha) {
        return fetch('http://localhost:8080/OpenPortfolioRest/rest/usuario/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                senha: senha,
            })
        }).then((res) => res.json());
    }
}


export default UserAPI
