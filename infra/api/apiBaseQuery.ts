import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";

import IApiExtraOptions from "../../shared/api/IApiExtraOptions";
import IApiRequest from "shared/api/IApiRequest";
import apiCaller from "infra/api/caller/apiCaller";
import IApiResponse from "shared/api/IApiResponse";

const apiBaseQuery = (): BaseQueryFn<IApiRequest, unknown, unknown> =>
    async (request, { dispatch }, extraOptions: IApiExtraOptions) => {

        let result: any;
        try {
            const response = await apiCaller(request);
            result = {
                data: {
                    data: response.data,
                    status: response.status,
                    statusText: response.statusText,
                    ok: response.status ? (response.status >= 200 && response.status < 300) : 0
                } as IApiResponse<any>
            };
        } catch (e) {
            console.error(e);

            const err = e as any;
            result = {
                data: {
                    data: {
                        error: {
                            code: err.response?.status,
                            message: err.response?.data || err.message,
                        },
                    },
                    ok: false,
                    status: err.response?.status ?? 500,
                    statusText: '',
                }
            }
        }

        if (result.data.ok) {
            notifySucceedMessage(dispatch, extraOptions);
        } else {
            notifyFailedMessage(dispatch, result.data);
        }

        return result;
    }
export default apiBaseQuery;

function notifySucceedMessage(dispatch: any, extraOptions: IApiExtraOptions) {

}

function notifyFailedMessage(dispatch: any, response: any) {
}
