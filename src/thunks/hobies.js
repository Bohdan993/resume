import { makeApiCall } from '../api/makeApiCall';
import { GET_HOBIE, ADD_HOBIE } from '../constants/apiEndpoints';
import { setHobies } from '../slices/hobies';




export const getHobies = () => async (dispatch, getState) => {
    const result =  await makeApiCall('get', GET_HOBIE());
    if(result.statusText === 'OK') {
        await dispatch(setHobies(result.data));
    }
};


export const updateHobies = (data) => async (dispatch, getState) => {
        const {id} = getState().contact.contact;
        const result =  await makeApiCall('post', ADD_HOBIE(id), data);

        if(result.statusText === 'OK') {
            await dispatch(setHobies(data));
        }
};



export const makeHobies = (data) => async (dispatch) => {

    await dispatch(updateHobies(data));
    return true;
};