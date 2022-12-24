import { makeApiCall } from '../api/makeApiCall';
import { GET_CV, ADD_NEW_CV, UPDATE_CV } from '../constants/apiEndpoints';
import { slice } from '../slices/contact';



export const getContact = () => async (dispatch) => {
    const result =  await makeApiCall('get', GET_CV());

    dispatch(slice.actions.setContact(result));
};


export const createContact = (data) => async (dispatch) => {
    const result =  await makeApiCall('post', ADD_NEW_CV(), data);
    dispatch(slice.actions.setContact(data));
};


export const updateContact = (data) => async (dispatch) => {
    // const result =  await makeApiCall('post', UPDATE_CV(data.id), data);
    console.log('update');
    dispatch(slice.actions.setContact(data));
};



export const makeContact = (data, valuesExist) => async (dispatch) => {
    if(valuesExist) {
        dispatch(updateContact(data));
    } else {
        dispatch(createContact(data));
    }
};