import { makeApiCall } from '../api/makeApiCall';
import { GET_CV, ADD_NEW_CV, UPDATE_CV } from '../constants/apiEndpoints';
import { setLoading } from '../slices/app';
import { setHobies } from '../slices/hobies';
import { camelToSnakeCase } from '../utils';




export const getHobies = () => async (dispatch, getState) => {
    await dispatch(setLoading(true));
    const result =  await makeApiCall('get', GET_CV());

    if(result.statusText === 'OK') {
        const arr = Object.entries(result.data[0]);
        const newArr = arr.map(([key, value]) => {
            return [camelToSnakeCase(key), value];
        })

        const saveArr = Object.fromEntries(newArr);
        await dispatch(setHobies(saveArr));
        await dispatch(setLoading(false));

    }
};


export const createHobies = (data) => async (dispatch) => {

    const result =  await makeApiCall('post', ADD_NEW_CV(), data);

    if(result.statusText === 'OK') {
        let {picture, ...rest} = data;
        if(typeof picture === 'object') {
            picture = URL.createObjectURL(picture);
        }
        await dispatch(setHobies(data));
    }

};


export const updateHobies = (data) => async (dispatch, getState) => {
        const {id} = getState().hobies.hobies;
        const result =  await makeApiCall('post', UPDATE_CV(id), data);

        if(result.statusText === 'OK') {
            let {picture, ...rest} = data;
            if(typeof picture === 'object') {
                picture = URL.createObjectURL(picture);
            }
            await dispatch(setHobies({picture, ...rest}));
        }
};



export const makeHobies = (data, valuesExist) => async (dispatch) => {

    if(valuesExist) {
        await dispatch(updateHobies(data));
    } else {
        await dispatch(createHobies(data));
    }
    
    return true;
};