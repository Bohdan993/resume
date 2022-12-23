import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    employments: []
};

export const slice = createSlice({
  name: 'employment',
  initialState,
  reducers: {
    setEmployment(
      state,
      action
    ){
      state.employments.push(action.payload);
    },
    deleteEmployment(
      state,
      action
    ){
      state.employments = state.employments.filter((employment) => employment.id !== action.payload);
    }
  }
});

export const { setEmployment, deleteEmployment } = slice.actions;

export const { reducer } = slice;
