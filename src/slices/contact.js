import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  // FIXME: api returned no_data every tyme
  resumeId: 29,
  first_name: "",
  last_name: "",
  picture: null,
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
};

export const slice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setContact(
      state,
      action
    ){
      state = {...state, ...action.payload};
    }
  }
});

export const { reducer } = slice;
