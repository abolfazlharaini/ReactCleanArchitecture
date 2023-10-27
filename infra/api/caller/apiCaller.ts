import { AxiosRequestHeaders } from 'axios';

import axiosInstance from "./axiosInstance";
import IApiRequest from 'shared/api/IApiRequest';
import getCookie from 'infra/cookie/getCookie';
import parseJSON from 'shared/json/parseJSON';
import EmptyType from 'shared/EmptyType';
import EMPTY_RESULT from 'shared/EMPTY_RESULT';
import { AUTH_COOKIENAME } from 'shared/configs';

const apiCaller = async <TResponse>(request: IApiRequest) => {
    try {

        const token = getCookie(AUTH_COOKIENAME);
        if (!request.headers)
            request.headers = {} as AxiosRequestHeaders;
        if (!request.headers['Content-Type'])
            request.headers['Content-Type'] = 'application/json;charset=UTF-8';
        if (token)
            request.headers['Authorization'] = `Bearer ${token}`;

        const response = await axiosInstance(request);
        const errors = response.data?.errors;

        let data = EMPTY_RESULT;
        if (errors) {
            data = errors;
        } else {
            try {
                data = parseJSON(response.data) as any;
            } catch (error) {
                data = response.data;
            }
        }
        return {
            data: data as (TResponse | EmptyType),
            status: response.status,
            statusText: response.statusText,
            ok: response.status >= 200 && response.status < 300
        }
    } catch (e) {
        console.error(e);
        return {
            data: EMPTY_RESULT as (TResponse | EmptyType),
            status: 0,
            statusText: 'error',
            ok: false
        }
    }
}
export default apiCaller;
