import React, { useEffect } from 'react';
import MovieListing from "../MovieListing/MovieListing";

import "./Home.css";
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../redux/movies/movieSlice';

//Before createAsyncThunk
/*const Home = () => {
    const movieText="Harry";
    const dispatch=useDispatch();
    useEffect(()=>{
        const fetchMovies=async ()=>{
            const response=await movieApi.get(
                `?apiKey=${APIKey}&s=${movieText}&type=movie`)
                .catch((err)=>{console.log("err : ",err);
            });
            console.log("The response from Api : ",response)
            dispatch(addMovies(response.data))
        };
        fetchMovies();
    },[]);

    return (
        <div>
        <div className='banner-image'></div>
        <MovieListing/>
        </div>
    );
};*/

//after create AsyncThunk

const Home = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
            dispatch(fetchAsyncMovies())
            dispatch(fetchAsyncShows())
    },[]);
    
    return (
        <div>
        <div className='banner-image'></div>
        <MovieListing/>
        </div>
    );
};

export default Home;