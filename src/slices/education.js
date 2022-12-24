import { makeSlice } from './makeSlice';

const {actions, reducer} = makeSlice('education');

export {
  reducer
}

export const { setEducations, setEducation, updateEducation, deleteEducation} = actions;
