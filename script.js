
function estadowrapper() {
    if (document.getElementById('wrapper').style.display == 'grid') {
        document.getElementById('wrapper').style.display = 'none';
        document.getElementById('wrapperfechar').innerHTML = '⟩'
    } else {
        document.getElementById('wrapper').style.display = 'grid';
        document.getElementById('wrapperfechar').innerHTML = '⟨'
    }
}
class Post {
    constructor(imagem, idpost, autor, nome, especie) {
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
    document.body.style.overflowY = "auto"
})
let gridposts = document.getElementById("gridposts")
function criarposts () {
    for (let i = 0; i < 20; i++) {
        let miniatura = document.createElement('div');
        miniatura.style.backgroundColor = `rgb(${Math.floor(Math.random()* 255) },${Math.floor(Math.random()* 255)},${Math.floor(Math.random()* 255)})`
        miniatura.innerHTML = i
        miniatura.setAttribute('id', 'post' + i );
        miniatura.addEventListener("click", function () {
            document.getElementById('postminiatura').innerHTML = "<p>"+this.innerHTML+"<p>"
            document.getElementById('postminiatura').style.backgroundColor = this.style.backgroundColor
            document.getElementById('idpost').innerHTML = "id: "+this.innerHTML
            postexpandido.style.display = "flex"
            document.body.style.overflowY = "hidden"
        })
        document.getElementById('gridpost').appendChild(miniatura);
    }
}

criarposts()

