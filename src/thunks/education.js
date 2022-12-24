import { makeApiCall } from '../api/makeApiCall';
import { ADD_EDUCATION, UPDATE_EDUCATION, GET_EDUCATION } from '../constants/apiEndpoints';
import { setEducations } from '../slices/education';
import { makeCreate, makeUpdate } from './helpers';


const createEducations = makeCreate('education', ADD_EDUCATION);
const updateEducations = makeUpdate('education', UPDATE_EDUCATION);


export const getEducation = () => async (dispatch) => {
    const result =  await makeApiCall('get', GET_EDUCATION());

    dispatch(setEducations(result));
};

export const makeEducation = (data) => async (dispatch) => {
    await dispatch(createEducations(data));
    await dispatch(updateEducations(data));

    dispatch(setEducations(data));
};


