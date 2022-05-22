import { Link } from "react-router-dom";
import style from "./MovieCard.module.css";

export function MovieCard({ movie }) {
  const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  return (
    <Link to={"/movies/" + movie.id}>
      <li className={style.movieCard}>
        <img className={style.movieImage} src={imgUrl} alt={movie.title} />
        <div>{movie.title}</div>
      </li>
    </Link>
  );
}
