const params = new URLSearchParams(location.search);
let id = params.get('id');

dadosFilmes = JSON.parse(localStorage.getItem('db_filmes'));
let idxFilme = dadosFilmes.results.findIndex((elem) => elem.id == id)

if (idxFilme > -1) {
    let filme = dadosFilmes.results[idxFilme];

    document.getElementById('divDetalheFilme').innerHTML = `
            <img class="imgcenter" src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="Card image cap">
            <div class="row">
                <h1 style="font-size: 3rem;" class="text-center pt-5 pb-3">${filme.title}</h1>
                <p style="font-size: 1.2rem;" class="cmmtxt text-center">${filme.overview}</p>
            </div> `
}
else {
    alert('Filme não encontrado')
}