import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isLoginLoading: false,
    auth: {
        authMethod: null
    }
};

export const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    getLoading(
      state,
      action
    ){
      state.isLoginLoading = action.payload;
    },
  }
});

export const { reducer } = slice;
