import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import movieApi from "../../common/apis/MovieApi";
import {APIKey} from "../../common/apis/MovieApiKey"
// createAsyncThunk :start , success , error للأكشن الخاصة بال  dispatch  هي بتعمل كل ال 
//loading :pending , success : fullfilled , error : rejected  

//with createAsyncThunk
export const fetchAsyncMovies=createAsyncThunk("movies/fetchAsyncMovies", 
async ()=>{
    const movieText="Harry";
    const response=await movieApi.get(
        `?apiKey=${APIKey}&s=${movieText}&type=movie`)

        //response.data : it's an object inside this object there is an array as Search
        console.log("response.data : ",response.data)

        return response.data;
    });
    export const fetchAsyncShows=createAsyncThunk("movies/fetchAsyncShows", 
    async ()=>{
        const seriesText="Friends";
        const response=await movieApi.get(
            `?apiKey=${APIKey}&s=${seriesText}&type=series`)
    
            return response.data;
        }); 



        export const fetchAsyncDetails=createAsyncThunk("movies/fetchAsyncDetails", 
        async (id)=>{
            const response=await movieApi.get(
                `?apiKey=${APIKey}&i=${id}&Plot=short`)
                return response.data;
            });
const initialState={
        movies:{},
        shows:{},
        selectedDetail:{}
    }

const movieSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovies:(state,{payload})=>{
            state.movies = payload;
        },
        removeSelectedMovieOrShow:(state)=>{
            state.selectedDetail={}
        }

    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("pending")
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log("Fetched Successfully","payload : ",payload);
            return{...state,movies:payload}
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log("Fetched Rejected")
        },
        [fetchAsyncShows.fulfilled]:(state,{payload})=>{
            console.log("Fetched Successfully");
            return{...state,shows:payload}
        },
        [fetchAsyncDetails.fulfilled]:(state,{payload})=>{
            console.log("Fetched Successfully");
            return{...state,selectedDetail:payload}
        },
    }
});
export const {removeSelectedMovieOrShow,addMovies}=movieSlice.actions;
export const getAllMovies=(state)=>state.movies/*name :"movies"*/.movies;
export const getAllShows=(state)=>state.movies.shows;
export const getAllSelected=(state)=>state.movies.selectedDetail;
export default movieSlice.reducer;


