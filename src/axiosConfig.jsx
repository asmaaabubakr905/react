

import axios from "axios";

export const axiosInstance = axios.create();



axiosInstance.interceptors.request.use(request => {
    console.log("hifrom interceptor")
    request.headers.Authorization = localStorage.getItem("token");
    return request;
})
axiosInstance.interceptors.response.use(response => {

    if (response.data.token) {
        localStorage.setItem("token", response.data.token)
    }

    return response;
}
)