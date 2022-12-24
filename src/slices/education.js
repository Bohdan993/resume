import { makeSlice } from './makeSlice';

const {actions, reducer} = makeSlice('education');

export {
  reducer
}

export const { setEducation, updateEducation, deleteEducation, setSelectedEducationId } = actions;
