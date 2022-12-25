import { makeApiCall } from '../api/makeApiCall';
import { ADD_EMPLOYMENT, UPDATE_EMPLOYMENT, GET_EMPLOYMENTS } from '../constants/apiEndpoints';
import { setEmployments } from '../slices/employment';
import { makeCreate, makeUpdate } from './helpers';
import { ROUTES } from '../constants/routes';
import { camelToSnakeCase } from '../utils';



const createEmployments = makeCreate(`${ROUTES['employment']}`, ADD_EMPLOYMENT);
const updateEmployments = makeUpdate(`${ROUTES['employment']}`, UPDATE_EMPLOYMENT);


export const getEmployment = () => async (dispatch, getState) => {
    const {id} = getState().contact.contact;
    const result =  await makeApiCall('get', GET_EMPLOYMENTS(id));

    if(result.statusText === 'OK') {

        const finalArr = [];

        result.data.forEach(el => {
            const arr = Object.entries(el);
            const newArr = arr.map(([key, value]) => {
                return [camelToSnakeCase(key), value];
            })

            const saveArr = Object.fromEntries(newArr);

            finalArr.push(saveArr);
        })

        console.log(finalArr);

        dispatch(setEmployments(finalArr));
    }
};

export const makeEmployment = (data) => async (dispatch) => {
    await dispatch(createEmployments(data));
    await dispatch(updateEmployments(data));

    dispatch(setEmployments(data));
    return true;
};


