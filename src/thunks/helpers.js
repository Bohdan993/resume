import { makeApiCall } from '../api/makeApiCall';

export const makeCreate = (name, apiFunc = Promise.resolve()) => {
    return (data) => async (dispatch, getState) => {
        const {id} = getState().contact.contact;
        const values = data;
        const {[name + 's']: storeValues} = getState()[name];
        const newValues = [];
    
        values.forEach((current) => {
            if (!(storeValues.some((el) => el.id === current.id))) {
                newValues.push(current);
            }
        });

        await Promise.all([
            ...newValues.map(value => makeApiCall('post', apiFunc(id), value)),
        ]);

        
    }
}


export const makeUpdate = (name, apiFunc = Promise.resolve()) => {
    return (data) => async (dispatch, getState) => {
        const values = data;
        const {[name + 's']: storeValues} = getState()[name];
        const updateValues = [];
    
        values.forEach((current) => {
            if (storeValues.some((el) => el.id === current.id)) {
                updateValues.push(current);
            }

            

        });

        
        await Promise.all([
            ...updateValues.map(value => makeApiCall('post', apiFunc(value.id), value)),
        ]);

        console.log(storeValues);
    }
}
