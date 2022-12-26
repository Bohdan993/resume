import { ADD_INTERSHIP, UPDATE_INTERSHIP, GET_INTERSHIP } from '../constants/apiEndpoints';
import { setInterships } from '../slices/intership';
import { makeCreate, makeUpdate, makeGet } from './helpers';
import { ROUTES } from '../constants/routes';


const createInterships = makeCreate(`${ROUTES['intership']}`, ADD_INTERSHIP);
const updateInterships = makeUpdate(`${ROUTES['intership']}`, UPDATE_INTERSHIP);

export const getIntership = makeGet(`${ROUTES['intership']}`, GET_INTERSHIP, setInterships);

export const makeIntership = (data) => async (dispatch) => {
    await dispatch(createInterships(data));
    await dispatch(updateInterships(data));

    dispatch(setInterships(data));
    return true;
};


