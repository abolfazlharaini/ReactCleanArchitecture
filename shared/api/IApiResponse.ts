
export default interface IApiResponse<TResponse> {
    data?: TResponse;
    ok: boolean;
    status?: number;
    statusText?: string;
}
