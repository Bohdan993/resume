import { makeApiCall } from '../api/makeApiCall';
import { ADD_EDUCATION, UPDATE_EDUCATION, GET_EDUCATION } from '../constants/apiEndpoints';
import { setActivitys } from '../slices/activity';
import { makeCreate, makeUpdate } from './helpers';
import { ROUTES } from '../constants/routes';


const createActivitys = makeCreate(`${ROUTES['activity']}`, ADD_EDUCATION);
const updateActivitys = makeUpdate(`${ROUTES['activity']}`, UPDATE_EDUCATION);


export const getActivity = () => async (dispatch) => {
    const result =  await makeApiCall('get', GET_EDUCATION());

    if(result.statusText === 'OK') {
        dispatch(setActivitys(result.data));
    }
};

export const makeActivity = (data) => async (dispatch) => {
    await dispatch(createActivitys(data));
    await dispatch(updateActivitys(data));

    dispatch(setActivitys(data));
    return true;
};


