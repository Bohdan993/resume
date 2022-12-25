import { ADD_EMPLOYMENT, UPDATE_EMPLOYMENT, GET_EMPLOYMENTS } from '../constants/apiEndpoints';
import { setEmployments } from '../slices/employment';
import { makeCreate, makeGet, makeUpdate } from './helpers';
import { ROUTES } from '../constants/routes';



const createEmployments = makeCreate(`${ROUTES['employment']}`, ADD_EMPLOYMENT);
const updateEmployments = makeUpdate(`${ROUTES['employment']}`, UPDATE_EMPLOYMENT);

export const getEmployment = makeGet(`${ROUTES['employment']}`, GET_EMPLOYMENTS, setEmployments);

export const makeEmployment = (data) => async (dispatch) => {
    await dispatch(createEmployments(data));
    await dispatch(updateEmployments(data));

    dispatch(setEmployments(data));
    return true;
};


