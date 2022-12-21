import {useEffect, useState} from "react";
import {Movie} from "../components/Movie";
import MovieCard from "../components/MovieCard";
import axios from "axios";


export default function Root() {


// GET movie list
    const [movieList, setMovieList] = useState<Movie[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("/api/movie")
                setMovieList(response.data)
            } catch (e: any) {
                console.error(e.message);
            }
        })();


    }, [])

//POST Movie

    const initialState = {
        id: "",
        title: "",
        posterUrl: "",
        year: ""
    }

    const [movie, setMovie] = useState<Movie>(initialState);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const targetName = event.target.name
        const value = event.target.value
        setMovie({
            ...movie,
            [targetName]: value
        })
    }

    const onSubmit = () => {

        axios.post("/api/movie", movie)
            .then(response => {
                return response.data
            })
            .catch(error => console.error(error))


    }

    const noMovie = () => {
       if (movieList.length === 0) {
           return (<p>Kein Film vorhanden. Füge unten einen neuen hinzu!</p>);
       }

    }

    return (

        <div className={"page"}>
            <div className={"header"}><h1>Movie DB</h1></div>
            <div className={"list-container"}>
                <ul>
                    {movieList.map(movies => (
                        <MovieCard id={movies.id} title={movies.title} posterUrl={movies.posterUrl}
                                   year={movies.year}></MovieCard>


                    ))}
                    {
                     noMovie()
                    }
                </ul>
            </div>
            <div className={"input-container"}>
                <form onSubmit={onSubmit}>
                    <input name ="title" type="text" value={movie.title} onChange={onChange}/>
                    <input name ="posterUrl" type="text" value={movie.posterUrl} onChange={onChange}/>
                    <input name ="year" type="text" value={movie.year} onInput={onChange}/>
                    <button>Add</button>
                </form>
            </div>

        </div>
    );
}
