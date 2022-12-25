import { makeApiCall } from '../api/makeApiCall';
import { GET_CV, ADD_NEW_CV, UPDATE_CV } from '../constants/apiEndpoints';
import { headers } from '../constants/common';
import { setLoading } from '../slices/app';
import { setContact } from '../slices/contact';
import { camelToSnakeCase } from '../utils';




export const getContact = () => async (dispatch) => {
    dispatch(setLoading(true));
    const result =  await makeApiCall('get', GET_CV());

    if(result.statusText === 'OK') {
        const arr = Object.entries(result.data[0]);
        const newArr = arr.map(([key, value]) => {
            return [camelToSnakeCase(key), value];
        })

        const saveArr = Object.fromEntries(newArr);
        dispatch(setContact(saveArr));
        dispatch(setLoading(false));
    }
};


export const createContact = (data) => async (dispatch) => {

    const result =  await makeApiCall('post', ADD_NEW_CV(), data);

    if(result.statusText === 'OK') {
        dispatch(setContact(data));
    }

};


export const updateContact = (data) => async (dispatch) => {

    const result =  await makeApiCall('post', UPDATE_CV(data.id), data);

    if(result.statusText === 'OK') {
        dispatch(setContact(data));
    }
};



export const makeContact = (data, valuesExist) => async (dispatch) => {
    if(valuesExist) {
        dispatch(updateContact(data));
    } else {
        dispatch(createContact(data));
    }
    return true;
};