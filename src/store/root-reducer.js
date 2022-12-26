import {combineReducers } from '@reduxjs/toolkit';
import { reducer as appReducer } from '../slices/app';
import { reducer as activityReducer } from '../slices/activity';
import { reducer as certificatiesReducer } from '../slices/certificaties';
import { reducer as contactReducer } from '../slices/contact';
import { reducer as courseReducer } from '../slices/course';
import { reducer as educationReducer } from '../slices/education';
import { reducer as employmentReducer } from '../slices/employment';
import { reducer as hobbiesReducer } from '../slices/hobies';
import { reducer as intershipReducer } from '../slices/intership';
import { reducer as languagesReducer } from '../slices/languages';
import { reducer as referencesReducer } from '../slices/references';
import { reducer as skillsReducer } from '../slices/skills';
import { reducer as socialsReducer } from '../slices/socials';

const combinedReducer = combineReducers({
  app: appReducer,
  activity: activityReducer,
  certificaties: certificatiesReducer,
  contact: contactReducer,
  course: courseReducer,
  education: educationReducer,
  employment: employmentReducer,
  hobies: hobbiesReducer,
  intership: intershipReducer,
  languages: languagesReducer,
  reference: referencesReducer,
  skills: skillsReducer,
  socials: socialsReducer
});

export const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};
