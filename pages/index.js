import { useEffect, useState } from "react";
import Seo from "../components/Seo"
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home({results}) {
/*   const [movies, setMovies] = useState();

  const getMovies = async () => {
    const response = await fetch("/api/movies")
    const {results} = await response.json();
    setMovies(results);
  }

  useEffect(()=> {
    getMovies()
  }, []) */

  const router = useRouter();
  const onImageClick = (id) => {
    router.push(`/movies/${id}`)
  }

  return (
    <div className="container">
      <Seo title="Home" />
      {/* {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => ( */}
      {results?.map((movie)=> (
        <div className="movie" key={movie.id}>
          <img onClick={() => onImageClick(movie.id)} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <Link  href={`/movies/${movie.id}`}>
            <h4>{movie.original_title}</h4>
          </Link>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export async function getServerSideProps() {
    const response = await fetch("http://localhost:3000/api/movies")
    const {results} = await response.json();
    // const {results} = await (await fetch("https://localhost:3000/api/movies")).json()
    return {
      props: {
        results,
      },
    }
}