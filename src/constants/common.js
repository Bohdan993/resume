export const apiPrefix = "http://resume.waytrel.pro";
function getTempToken (){
    const tempToken = window.localStorage.getItem('token') ? JSON.stringify(window.localStorage.getItem('token')).replace('"', '') : '';
    return tempToken;
}
const tempToken = getTempToken();

export const headerss = {
    "Content-Type": "multipart/form-data",
    "Authorization": tempToken ? `Bearer ${tempToken}` : ''
};
