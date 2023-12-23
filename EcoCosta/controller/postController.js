const Post = require('../models/Post');

exports.createPost = async function (req, res) {
    const autor = req.body.autor;
    const nome = req.body.nome;
    const especie = req.body.especie;
    const descricao = req.body.descricao;
    const imagem = req.body.imagem;
    let categorias = []
    categorias = req.body.categoria.map(categoria => categoria)

    Post.create({
        autor,
        nome,
        especie,
        descricao,
        imagem,
        categorias
    }).then(function (post) {
        console.log("Post criado com sucesso")
        res.redirect('/criarpost')
    }).catch(function (erro) {
        console.error("Erro na criação de post: [ "+erro+" ]")
        res.redirect('/criarpost')
    });
};


