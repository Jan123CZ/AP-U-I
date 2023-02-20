import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
const api_key = 'IFhrQRA6ISGhLn2yRsaETGlvwiAtT0TN';
const movie_id = 550;
const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}`;

fetch(url)
  .then(response => response.json())
  .then(movie_data => {
    // Display the movie title and overview
    console.log(`Movie title: ${movie_data.title}`);
    console.log(`Overview: ${movie_data.overview}`);
  })
  .catch(error => console.error('An error occurred while fetching movie data:', error));
