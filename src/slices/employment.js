import { makeSlice } from './makeSlice';

const {actions, reducer} = makeSlice('employment');

export {
  reducer
}

export const { setEmployments, setEmployment, updateEmployment, deleteEmployment } = actions;

