const mostraFilmes = (data) => {
   let dadosFilmes =JSON.parse(data.target.response)
   localStorage.setItem('db_filmes', data.target.response) 
    let dadosHTML = '';
    for (let i = 0; i < dadosFilmes.results.length; i++) {
        let filme = dadosFilmes.results[i];
        dadosHTML += `
        <div class="card col-3" id="mycards">
                <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" id="imgincard" class="card-img-top"alt="FilmeXPTO">
                <div class="card-body">
                    <h5 class="card-title">${filme.title}</h5>
                    <p class="card-text">${filme.overview}</p>
                    <a href="detalhes.html?id=${filme.id}" class="btn btn-dark">Veja mais...</a>
                </div>
            </div>`
    }
    document.getElementById('divListaFilmes').innerHTML = dadosHTML
}

const mostraErro = (data) => {
    alert (' Erro na requisição');
}

const init = () => {
    let xhr = new XMLHttpRequest ();
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=916aa5e57ea2b62b2e37d6ca137e07d8&language=pt-BR"
    xhr.onload = mostraFilmes;
    xhr.onerror = mostraErro;
    xhr.open ('GET', url, true);
    xhr. send ();

}

document.body.onload = init