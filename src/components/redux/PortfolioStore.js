import { configureStore } from "@reduxjs/toolkit";
import PortfolioStore from "./PortfolioSlice"

const Store = configureStore({
    reducer:{
        modeState: PortfolioStore.reducer
    }
})

export default Store