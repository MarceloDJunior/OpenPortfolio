const initialCadastroForm = {
    nome: '',
    sobrenome: '',
    email: '',
    dia: 1,
    mes: 0,
    ano: new Date().getFullYear()-18,
    data_nascimento: '',
    fone: '',
    sexo: 'M',
    senha: '',
    confirma_senha: ''
};

export default initialCadastroForm;