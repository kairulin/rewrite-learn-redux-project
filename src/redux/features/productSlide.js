import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value:[],
    selectValue:[]
}

const productSlide = createSlice({
    name:'products',
    initialState,
    reducers:{
        setProducts :(state,action) =>{           
            state.value = action.payload
            state.selectValue= []
        },
        selectProducts : (state,action) =>{
            state.selectValue = action.payload
        }
    }
})

export const {setProducts,selectProducts} = productSlide.actions

export default productSlide.reducer