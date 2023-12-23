const User = require('../models/User');
const bcrypt = require('bcrypt')

exports.createUser = function (req, res) {
    const nome = req.body.nome;
    const login = req.body.usuario;
    const senha = req.body.senha;

    bcrypt.hash(senha, 10, function(err, hash) {
        if (err) {
            console.error('Erro ao gerar esta senha.', err)
        }
    User.create({
        nome,
        login,
        senha: hash
    }).then(function (user) {
        console.log("Usuario cadastrado com sucesso!")
        res.redirect('/cadastro?success=Usuario cadastrado com sucesso: ' + user.nome)
    }).catch(function (erro) {
        console.error("Erro de cadastro: [ "+erro+" ]")
        res.redirect('/cadastro?erro=Erro no cadastro!')
    });
})
}

exports.authUser = function(req, res) {
    const login = req.body.usuario;
    const senha = req.body.senha;

    // Procurar um usuário com o login fornecido
    User.findOne({ login: login }).then(function(user) {
        if (user.login == login) {
            // Comparar a senha fornecida com a senha armazenada no banco de dados
            bcrypt.compare(senha, user.senha, function(err, result) {
                if (result) {
                    // Usuário encontrado e senha correta, autenticação bem-sucedida
                    req.session.user = { login: user.login, userId: user.id, nome: user.nome };
                    console.log('Usuário autenticado com sucesso', user);
                    res.redirect('/home?success=login bem sucedido');
                } else {
                    // Senha incorreta
                    console.error('Senha incorreta');
                    res.redirect('/login?error=Senha incorreta');
                }
            });
        } else {
            // Usuário não encontrado
            console.error('Usuário não encontrado');
            res.redirect('/login?error=Usuário não encontrado');
        }
    }).catch(function(erro) {
        console.error('Erro ao autenticar usuário', erro);
    });
};