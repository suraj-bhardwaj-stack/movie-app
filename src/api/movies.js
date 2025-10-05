import axios from "axios";
import {setMovies} from '../slice/movieSlice'
export const getMovies = () => async dispatch => {
    const URL = 'https://api.tvmaze.com/shows'
    try {
            const { data } = await axios.get(URL)
            dispatch(setMovies(data))
            return data
    } catch (error) {
        return error
    }
    
}