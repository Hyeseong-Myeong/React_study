import PropTypes from "prop-types"
import {Link} from "react-router-dom"

function Movie({id, coverImg, title, summary, genres })    {
    return (
        <div>
            <img src={coverImg} />
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
            <p>{summary}</p>
            <li>
                {genres.map(g => (
                    <li key={g}>{g}</li>
                ))}
            </li>
        </div>
    )
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string)
}

export default Movie;