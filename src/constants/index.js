const base_url = 'https://api.rawg.io/api/';
const games_endpoint= "games";
const genres_endpoint= "genres";
const developers_endpoint ="developers";
const set_page_size= "page_size=";
const set_page = "page=";
const set_platforms = "platforms=";

export const gamesGet       = (platforms)       => `${base_url}${games_endpoint}?${set_platforms}${platforms}&${set_page_size}12&${set_page}1`;
export const gameGet        = (game)            => `${base_url}${games_endpoint}/${game}`;
export const loadMoreGet    = (query)           => `${query}`;
export const genderGet      = (gender_slug)     => `${base_url}${genres_endpoint}/${gender_slug}`;
export const developersGet  = ()                => `${base_url}${developers_endpoint}?${set_page_size}12&${set_page}1`;
