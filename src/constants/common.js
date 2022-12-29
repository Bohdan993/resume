export const apiPrefix = "http://resume.waytrel.pro";
// export const tempToken =
// "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NzIxMDI5NTEsImV4cCI6MTY3MjQ2Mjk1MSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiYm9oZGFuM3RydXNoQGdtYWlsLmNvbSJ9.WhtNpCfkuP9OZBzjNC4TyuitSQVXHV1MrFnyuAJIVcUNMvDozZAiaYYE9dhzyfOtMty2ZE85g-PHRvcdDYBFzwj2bScDdy7Pr0FyOLZvNcIhUu-gz9hT0yJq6fInQQbr3rzVcSXFV_YCkrH1XUC-U8N0NhXnJSvxzhzx4vjqhJde5PBz_kLzBnkmO2hYTzMTP7XzwVxPEP7HxRchieqpVWYj5jODD7WfSiMc5qmlwR_6YQVunCrfBz3Ry6HySN2A3knOKt7BLFlgJV3sgo1NiCS3rPpsNPXJVc9Y7OH6noVg8CjB6uB_A8ugqR7h5Ju5cmdHTqd5guFmOgay38V0Yw"
// ;

const tempToken = window.localStorage.getItem('token') ? JSON.stringify(window.localStorage.getItem('token')).replace('"', '') : '';
export const headers = {
    "Content-Type": "multipart/form-data",
    "Authorization": `Bearer ${tempToken}`
};
