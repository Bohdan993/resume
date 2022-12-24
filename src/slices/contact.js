import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  contact : {
    resumeId: "",
    first_name: "",
    last_name: "",
    picture: "",
    email: "",
    phone: "",
    country: "",
    nationality: "",
    city: "",
    address: "",
    zip_code: "",
    driver_license: "",
    place_of_birth: "",
    date_of_birth: ""
  }
};

export const slice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setContact(
      state,
      action
    ){
      state.contact = {...state.contact, ...action.payload};
    }
  }
});


export const { setContact } = slice.actions;

export const { reducer } = slice;
