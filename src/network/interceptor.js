import axios from "axios";
const BASE_URL = 'http://localhost:3000/';

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    // headers: {
    //   'Content-Type': 'application/json',
    // },
});

// [axiosInstance].forEach(item => {

//     const cancellableConfig = config => {
//         const newConfig = { ...config };
//         return newConfig;
//     };

//     item.interceptors.request.use(
//         config => cancellableConfig(config),
//         error => Promise.reject(error),
//     );

//     item.interceptors.response.use(
//         response => response,
//         error => {
//             // Do something with response error
//             if (!error.response) return error;
//             switch (error.response.status) {
//                 case 401: {
//                     const payload = error.response ? 
//                         { status: 401, error: error.response.messsage || error.response } : 
//                         { status: 401, error: 'User not Authorized' };
//                     return payload;
//                 }
//                 case 403: {
//                     const payload = error.response ? 
//                         { status: 403, error: error.response.data.messsage || error.response } : 
//                         { status: 403, error: 'User not Authorized' };
//                     return payload;
//                 }
//                 case 422:
//                 case 404:
//                 case 400: {
//                     const payload = error.response ? { status: 400, message: error.response.data || error.response } : 
//                         { status: 400, message: 'Bad Request' };
//                     return payload;
//                 }
//                 case 409:
//                     return { status: 409, error: error.response.data };
//                 case 500:
//                     return { status: 500, error: error.response.data };
//                 default:
//                     return Promise.reject(error);
//             }
//         },
//     );
// });