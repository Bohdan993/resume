import { makeApiCall } from '../api/makeApiCall';
import { camelToSnakeCase } from '../utils';


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


export const makeGet = (name, apiFunc = Promise.resolve(), setData) => {
    return () => async (dispatch, getState) => {
        const {id} = getState().contact.contact;
        console.log(getState());
        const result =  await makeApiCall('get', apiFunc(id));
    
        if(result.statusText === 'OK') {

            const finalArr = [];
    
            result.data.forEach(el => {
                const arr = Object.entries(el);
                const newArr = arr.map(([key, value]) => {
                    return [camelToSnakeCase(key), value];
                })
    
                const saveArr = Object.fromEntries(newArr);
    
                finalArr.push(saveArr);
            })
    
            dispatch(setData(finalArr));
        }
    }
}

