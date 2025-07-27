
import {createSlice} from "@reduxjs/toolkit"

const PortfolioSlice = createSlice({
    name:"ModeToggle",
    initialState:{
        darkMode:false,
        mediumNavbar:false
    },
    reducers:{
        changeMode:(state)=>{
           state.darkMode = !state.darkMode
        },
        setMediumNavbar:(state)=>{
             state.mediumNavbar = !state.mediumNavbar
        }
}});

export default PortfolioSlice