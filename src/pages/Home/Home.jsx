import { Fragment, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { getMovies } from '../../api/movies';
import { useDispatch, useSelector } from 'react-redux'
import Moviecard from '../../components/MovieCard/Moviecard';
import Grid from '@mui/material/Grid';
function Home() {

    const { movies } = useSelector(state => state.movies)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovies())
    }, [dispatch])

    console.log("Movies state:", { movies })


    return (
        <Fragment>
            <Navbar />
            <div className="card-wrapper">
                <Grid container spacing={2}  sx={{ m: 2 }} >
                    {
                        movies?.length > 0 && movies.map((movie) => (
                            <Moviecard movie={movie} />
                        ))
                    }
                </Grid>

            </div>

        </Fragment>
    )
}

export default Home