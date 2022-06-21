const dadosFilmes = {
    "results": [
        {
            "backdrop_path": "/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg",
            "id": 338953,
            "original_language": "en",
            "original_title": "Fantastic Beasts: The Secrets of Dumbledore",
            "overview": "O professor Alvo Dumbledore sabe que o poderoso mago das trevas Gellert Grindelwald está se movimentando para assumir o controle do mundo mágico. Incapaz de detê-lo sozinho, ele pede ao magizoologista Newt Scamander para liderar uma intrépida equipe de bruxos, bruxas e um corajoso padeiro trouxa em uma missão perigosa, em que eles encontram velhos e novos animais fantásticos e entram em conflito com a crescente legião de seguidores de Grindelwald. Mas com tantas ameaças, quanto tempo poderá Dumbledore permanecer à margem do embate?",
            "popularity": 3521.98,
            "poster_path": "/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg",
            "release_date": "2022-04-06",
            "title": "	Animais Fantásticos: Os Segredos de Dumbledore",
            "vote_average": 6.9,
        },
        {
            "backdrop_path": "/cqnVuxXe6vA7wfNWubak3x36DKJ.jpg",
            "id": 639933,
            "original_language": "en",
            "original_title": "The Northman",
            "overview": " Baseado na obra de Shakespeare, Hamlet, e na lenda viking de Amelth. No ano de 914, o príncipe Amleth (Alexander Skarsgård) testemunha o brutal assassinato de seu pai, Horvendill (Ethan Hawke) por seu tio, Fjölnir (Claes Bang). O menino foge mas jura que voltará para vingar seu pai, salvar sua mãe e matar seu tio. Vinte anos depois conhece uma vidente que o lembra que é chegada a hora de cumprir sua promessa.",
            "popularity": 2440.073,
            "poster_path": "/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg",
            "release_date": "2022 - 04 - 07",
            "title": "O Homem do Norte",
            "vote_average": 7.3,
        },
        {
            "backdrop_path": "/kiH3KPWi7BaRMvdAigcwrUFViHl.jpg",
            "id	": 818397,
            "original_language": "en",
            "original_title": "Memory",
            "overview": "Em Assassino Sem Rastro, Alex Lewis é um assassino experiente com reputação de precisão discreta. Preso em um dilema moral, Alex se recusa a concluir um trabalho que viola seu código de ética e deve rapidamente caçar e matar as pessoas que o contrataram antes que eles e o agente do FBI Vincent Serra o encontrem primeiro. Alex tinha o objetivo de se vingar, mas, com uma memória que começa a vacilar, ele é forçado a questionar todas as suas ações, se perdendo na linha entre o certo e o errado.",
            "popularity": 2310.293,
            "poster_path": "/QaNLpq3Wuu2yp5ESsXYcQCOpUk.jpg",
            "release_date": "2022 - 04 - 28",
            "title": "Assasino sem Rastro",
            "vote_average": 7.3,
        }

    ]

}


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
            </div>
        `

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