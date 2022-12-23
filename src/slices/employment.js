import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    employments: [],
    selectedEmploymentId: null
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
    updateEmployment(
      state,
      action
    ){
      const employment = action.payload;

      state.employments = state.employments.map((_employment) => {
        if (_employment.id === employment.id) {
          return employment;
        }

        return _employment;
      });
    },
    deleteEmployment(
      state,
      action
    ){
      state.employments = state.employments.filter((employment) => employment.id !== action.payload);
    },
    setSelectedEmploymentId(
      state,
      action
    ){
      state.selectedEmploymentId = action.payload;
    }
  }
});

export const { setEmployment, updateEmployment, deleteEmployment, setSelectedEmploymentId } = slice.actions;

export const { reducer } = slice;
