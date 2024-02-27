import { useEffect, useState } from "react";
import Seo from "../components/Seo"

export default function Home() {
  const [movies, setMovies] = useState();

  const getMovies = async () => {
    const response = await fetch("/api/movies")
    const {results} = await response.json();
    setMovies(results);
  }

  useEffect(()=> {
    getMovies()
  }, [])

  return <div>
    <Seo title={"Home"}/>
    {!movies && <h4>Loading...</h4>}
    {movies?.map(movie=> (
      <div key={movie.id}>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        <h4>{movie.original_title}</h4>
      </div>
    ))}
  </div>
}