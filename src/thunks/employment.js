import { makeApiCall } from '../api/makeApiCall';
import { GET_CV } from '../constants/apiEndpoints';
import { slice } from '../slices/contact';
import { headers } from '../constants/common';



export const createEmployments = () => async (dispatch) => {
    const result =  await makeApiCall('get', GET_CV());

    // dispatch(slice.actions.setContact(result));
};


export const updateEmployment = () => async (dispatch) => {
    const result =  await makeApiCall('get', GET_CV());

    dispatch(slice.actions.setContact(result));
};


export const makeEmployment = (data) => async (dispatch) => {
    const result =  await makeApiCall('get', GET_CV(), {}, {Authorization: headers.Authorization});

    dispatch(slice.actions.setContact(result));
};


