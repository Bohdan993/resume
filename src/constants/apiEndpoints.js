export const GET_COUNTRIEN = () => `/profile/list/countrys`;
export const GET_CITY_BY_COUNTRY = (country) => `/profile/list/${country}/citys`;
export const GET_CV = () => `/api/user/resume_list`;
export const ADD_NEW_CV = () => `/cv/add`;
export const UPDATE_CV = (id) => `/cv/update/${id}`;
export const ADD_EMPLOYMENT = (id) => `/cv/${id}/employment/history/add`;
export const GET_EMPLOYMENTS = (id) => `/cv/${id}/employment/history/get`;
export const UPDATE_EMPLOYMENT = (id) => `/cv/employment/history/update/${id}`;
export const ADD_EDUCATION = (id) => `/cv/${id}/education/add`;
export const GET_EDUCATION = (id) => `/cv/${id}/education/get`;
export const UPDATE_EDUCATION = (id) => `/cv/education/update/${id}`;
export const ADD_SKILL = (id) => `/cv/${id}/skills/add`;
export const GET_SKILLS = (id) => `/cv/${id}/skills/get`;
export const UPDATE_SKILLS = (id) => `/cv/skills/update/${id}`;
export const ADD_ACTIVITY = (id) => `/cv/${id}/extra_curricular/add`;
export const GET_ACTIVITY = (id) => `/cv/${id}/extra_curricular/get`;
export const UPDATE_ACTIVITY = (id) => `/cv/extra_curricular/update/${id}`;
