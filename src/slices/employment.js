import { makeSlice } from './makeSlice';

const {actions, reducer} = makeSlice('employment');

export {
  reducer
}

export const { setEmployment, updateEmployment, deleteEmployment, setSelectedEmploymentId } = actions;

