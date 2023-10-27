import axios from 'axios';

import { API_BASE_URL } from 'shared/configs';

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 2_000 * 60 * 1,
    validateStatus: (status: any) => status >= 200 && status <= 500,
    transformResponse: [],
});
export default axiosInstance;