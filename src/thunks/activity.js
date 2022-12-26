import { ADD_ACTIVITY, UPDATE_ACTIVITY, GET_ACTIVITY } from '../constants/apiEndpoints';
import { setActivitys } from '../slices/activity';
import { makeCreate, makeUpdate, makeGet } from './helpers';
import { ROUTES } from '../constants/routes';


const createActivitys = makeCreate(`${ROUTES['activity']}`, ADD_ACTIVITY);
const updateActivitys = makeUpdate(`${ROUTES['activity']}`, UPDATE_ACTIVITY);

export const getActivity = makeGet(`${ROUTES['activity']}`, GET_ACTIVITY, setActivitys);

export const makeActivity = (data) => async (dispatch) => {
    await dispatch(createActivitys(data));
    await dispatch(updateActivitys(data));

    dispatch(setActivitys(data));
    return true;
};


