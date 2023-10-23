class Post {
    constructor() {
        this.imagem = imagem;
        this.idpost = idpost;
        this.autor = autor;
        this.nome = nome;
        this.especie = especie;
    }
}
let postexpandido = document.getElementById('visualizarpost') 
document.getElementById('fechar').addEventListener('click', function () {
    postexpandido.style.display = "none"
})
let gridposts = document.getElementById("gridposts")
function criarposts () {
    for (let i = 0; i < 30; i++) {
        let miniatura = document.createElement('div');
        miniatura.innerHTML = i
        miniatura.setAttribute('id', 'post' + i );
        miniatura.addEventListener("click", function () {
            document.getElementById('postminiatura').innerHTML = "<p>"+this.innerHTML+"<p>"
            document.getElementById('idpost').innerHTML = "id: "+this.innerHTML
            postexpandido.style.display = "flex"
        })
        document.getElementById('gridpost').appendChild(miniatura);
    }
}

criarposts()