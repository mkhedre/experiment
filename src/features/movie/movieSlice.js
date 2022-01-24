import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import movieApi from "../../common/apis/movieApi";

const movieText="harry"
const shoesText="harry"


// async action creator
export const fetchActionmovie = createAsyncThunk('movies/fetchActionmovie',async()=>{
    const response = await movieApi
    .get(`?apikey=60143eb6&s=${movieText}&type=movie`)
    
    return response.data
})


export const fetchActionShoes = createAsyncThunk('shoes/fetchActionShoes',async()=>{
    const response= await movieApi
    .get(`?apikey=60143eb6&s=${shoesText}&type=series`)
    return response.data
})

export const fetchselectedmovie=createAsyncThunk('movie/fetchselectedmovie',async (id)=>{
    const response = await movieApi
    .get(`?apikey=2e8c1631&i=${id}&plot=full`)
    return response.data
})

const initialState={
    movie:{},
    shoes:{},
    selectedmovie:{},
    text:""
}
const movieSlice = createSlice({
    name:"movie",
    initialState,
    reducers:{
        addMovie:(state,{payload})=>{
            state.movie=payload
        },
        savechange:(state,{payload})=>{
            state.text = payload
        }
    },
    extraReducers:{
        [fetchActionmovie.pending]:()=>{
            console.log("pending")
        },
        [fetchActionmovie.fulfilled]:(state,{payload})=>{
            console.log("fullfilled")
            state.movie=payload
        },
        [fetchActionmovie.rejected]:()=>{
            console.log("rejected")
        },
        [fetchActionShoes.fulfilled]:(state,{payload})=>{
            console.log("fetchActionShoes")
            state.shoes = {payload}
        },
        [fetchselectedmovie.fulfilled]:(state,{payload})=>{
            console.log("fetchselectedmovie")
            state.selectedmovie={payload}
        }
    }

})
export const {savechange} =movieSlice.actions
export default movieSlice.reducer