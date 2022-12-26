import { makeApiCall } from '../api/makeApiCall';
import { GET_CV, ADD_NEW_CV, UPDATE_CV } from '../constants/apiEndpoints';
import { setLoading } from '../slices/app';
import { setContact } from '../slices/contact';
import { camelToSnakeCase } from '../utils';




export const getContact = () => async (dispatch, getState) => {
    await dispatch(setLoading(true));
    const result =  await makeApiCall('get', GET_CV());

    if(result.statusText === 'OK') {
        const arr = Object.entries(result.data[0]);
        const newArr = arr.map(([key, value]) => {
            return [camelToSnakeCase(key), value];
        })

        const saveArr = Object.fromEntries(newArr);
        await dispatch(setContact(saveArr));
        await dispatch(setLoading(false));

    }
};


export const createContact = (data) => async (dispatch) => {

    const result =  await makeApiCall('post', ADD_NEW_CV(), data);

    if(result.statusText === 'OK') {
        let {picture, ...rest} = data;
        if(typeof picture === 'object') {
            picture = URL.createObjectURL(picture);
        }
        await dispatch(setContact({picture, ...rest}));
    }

};


export const updateContact = (data) => async (dispatch, getState) => {
        const {id} = getState().contact.contact;
        const result =  await makeApiCall('post', UPDATE_CV(id), data);

        if(result.statusText === 'OK') {
            let {picture, ...rest} = data;
            if(typeof picture === 'object') {
                picture = URL.createObjectURL(picture);
            }
            await dispatch(setContact({picture, ...rest}));
        }
};



export const makeContact = (data, valuesExist) => async (dispatch) => {

    if(valuesExist) {
        await dispatch(updateContact(data));
    } else {
        await dispatch(createContact(data));
    }
    
    return true;
};