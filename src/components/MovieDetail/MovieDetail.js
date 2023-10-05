import React, { useEffect } from 'react';
import "./MovieDetail.css";
//we need to get the id from url 
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncDetails, getAllSelected, removeSelectedMovieOrShow } from '../../redux/movies/movieSlice';

const MovieDetail = () => {
    const {imdbID1}=useParams();
    const dispatch=useDispatch();
    const data= useSelector(getAllSelected)
    console.log(data)
    useEffect(()=>{
        dispatch(fetchAsyncDetails(imdbID1))
        return()=>{     
            dispatch(removeSelectedMovieOrShow())
        }
    },[dispatch,imdbID1])
      return (
        <div className='movie-section'>
{/* if data is an array we can straight write data.length but because the data is object we write Object.keys(data)*/}
            {Object.keys(data).length===0?
            (<div>...loading </div>):(
            <>
          <div className='section-left'>
            <div className='movie-title'>{data.Title}</div>
             <div className='movie-rating'> 
                <span>imdbID Rating <i className='fa fa-star'>{data.imdbRating}</i></span>
                <span>imdbID Votes <i className='fa fa-thumbs-up'>{data.imdbVotes}</i></span>
                <span>imdbID RunTime <i className='fa fa-film'>{data.RunTime}</i></span>
                <span>Year <i className='fa fa-calender'>{data.Year}</i></span>
             </div>
             <p className='movie-plot'>{data.Plot}</p>
             <div className='movie-info'>
                <div>
                    <span>Director</span>
                    <span>{data.Director}</span>
                </div>
                <div>
                    <span>Starts</span>
                    <span>{data.Actors}</span>
                </div>
                <div>
                    <span>Generes</span>
                    <span>{data.Generes}</span>
                </div>
                <div>
                    <span>Languages</span>
                    <span>{data.Language}</span>
                </div>
                <div>
                    <span>Awards</span>
                    <span>{data.Awards}</span>
                </div>
             </div>
            
          </div>        
          <div className='section-right'>
                <img src={data.Poster}/> 
             </div>
             </>
            )}
        </div>
    );
};

export default MovieDetail;