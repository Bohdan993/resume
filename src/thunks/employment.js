import { makeApiCall } from '../api/makeApiCall';
import { ADD_EMPLOYMENT, UPDATE_EMPLOYMENT, GET_EMPLOYMENTS } from '../constants/apiEndpoints';
import { setEmployments } from '../slices/employment';
import { makeCreate, makeUpdate } from './helpers';


const createEmployments = makeCreate('employment', ADD_EMPLOYMENT);
const updateEmployments = makeUpdate('employment', UPDATE_EMPLOYMENT);


export const getEmployment = () => async (dispatch) => {
    const result =  await makeApiCall('get', GET_EMPLOYMENTS());

    dispatch(setEmployments(result));
};

export const makeEmployment = (data) => async (dispatch) => {
    await dispatch(createEmployments(data));
    await dispatch(updateEmployments(data));

    dispatch(setEmployments(data));
};


