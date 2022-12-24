import { makeApiCall } from '../api/makeApiCall';

export const makeCreate = (name, apiFunc = Promise.resolve()) => {
    return (data) => async (dispatch, getState) => {
        const values = data;
        const {[name + 's']: storeValues} = getState()[name];
        const newValues = [];
    
        values.forEach((current) => {
            if (!(storeValues.some((el) => el.id === current.id))) {
                newValues.push(current);
            }
        });
    
        // await Promise.all([
        //     ...newValues.map(value => await makeApiCall('post', apiFunc(), value)),
        // ]);
    }
}


export const makeUpdate = (name, apiFunc = Promise.resolve()) => {
    return (data) => async (dispatch, getState) => {
        const values = data;
        const {[name + 's']: storeValues} = getState()[name];
        const newValues = [];
    
        values.forEach((current) => {
            if (!(storeValues.some((el) => el.id === current.id))) {
                newValues.push(current);
            }
        });
    
        // await Promise.all([
        //     ...newValues.map(value => await makeApiCall('post', apiFunc(value.id), value)),
        // ]);
    }
}
