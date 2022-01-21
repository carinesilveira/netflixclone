const API_KEY = '7ddc69e4908de80ab207a2cf94c8387a';
const API_BASE = 'https://api.themoviedb.org/3';


const basicFetch = async (endpoint) => {  /* recebe a url = endpoint*/
    const req = await fetch(`${API_BASE}${endpoint}`); /* fetch-busca. FAZ a requisão */
    const json = await req.json(); /*returna o json */
    return json;
}

export default {
    getHomeList : async () =>{
       return [
           {
               slug: 'originals',
               title : "Originais do Netflix",
               items : await basicFetch(`/discover/tv/?with_networks=213&language=pt-BR&api_key=${API_KEY}`)
           },
           {
               slug: 'trending',
               title : "Recomendados para Você",
               items : await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
           },
           {
               slug: 'toprated',
               title : "Em Alta",
               items : await basicFetch(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)
           },
           {
               slug: 'action',
               title : "Ação",
               items : await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
           },
           {
               slug: 'comedy',
               title : "Comédia",
               items : await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
           },
           {
               slug: 'horror',
               title : "Terror",
               items : await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
           },
           {
               slug: 'romance',
               title : "Romance",
               items : await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
           },            
           {
               slug: 'documentary',
               title : "Documentários",
               items : await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
           },
       ]
    },
}