import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  hobies : {
    text: ""
  }
};

export const slice = createSlice({
  name: 'hobies',
  initialState,
  reducers: {
    setHobies(
      state,
      action
    ){
      state.hobies = {...state.hobies, ...action.payload};
    }
  }
});


export const { setHobies } = slice.actions;

export const { reducer } = slice;
