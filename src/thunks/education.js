import { makeApiCall } from '../api/makeApiCall';
import { ADD_EDUCATION, UPDATE_EDUCATION, GET_EDUCATION } from '../constants/apiEndpoints';
import { setEducations } from '../slices/education';
import { makeCreate, makeUpdate } from './helpers';
import { ROUTES } from '../constants/routes';


const createEducations = makeCreate(`${ROUTES['education']}`, ADD_EDUCATION);
const updateEducations = makeUpdate(`${ROUTES['education']}`, UPDATE_EDUCATION);


export const getEducation = () => async (dispatch) => {
    const result =  await makeApiCall('get', GET_EDUCATION());

    if(result.statusText === 'OK') {
        dispatch(setEducations(result.data));
    }
};

export const makeEducation = (data) => async (dispatch) => {
    await dispatch(createEducations(data));
    await dispatch(updateEducations(data));

    dispatch(setEducations(data));
    return true;
};


