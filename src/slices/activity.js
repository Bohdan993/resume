import { makeSlice } from './makeSlice';

const {actions, reducer} = makeSlice('activity');

export {
  reducer
}

export const { setActivitys, setActivity, updateActivity, deleteActivity} = actions;
