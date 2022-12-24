import { makeApiCall } from '../api/makeApiCall';
import { ADD_EMPLOYMENT, UPDATE_EMPLOYMENT, GET_EMPLOYMENTS } from '../constants/apiEndpoints';
import { setEmployments } from '../slices/employment';


const makeCreate = (name, apiFunc = Promise.resolve()) => {
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


const makeUpdate = (name, apiFunc = Promise.resolve()) => {
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


const createEmployments = makeCreate('employment', ADD_EMPLOYMENT);
const updateEmployments = makeUpdate('employment', UPDATE_EMPLOYMENT);



// const updateEmployments = (data) => async (dispatch, getState) => {
//     const employments = data;
//     const {employments: storeEmployments} = getState().employment;
//     const updatedEmployments = [];

//     employments.forEach((current, ind) => {
//         if (storeEmployments.some((el) => el.id === current.id)) {
//             updatedEmployments.push(current);
//         }
//     });

//     // await Promise.all([
//     //     ...newEmployments.map(employment => await makeApiCall('post', UPDATE_EMPLOYMENT(employment.id), employment)),
//     // ]);

    
// };

export const getEmployments = () => async (dispatch) => {
    const result =  await makeApiCall('get', GET_EMPLOYMENTS());

    dispatch(setEmployments(result));
};

export const makeEmployment = (data) => async (dispatch) => {
    await dispatch(createEmployments(data));
    await dispatch(updateEmployments(data));

    dispatch(setEmployments(data));
};


