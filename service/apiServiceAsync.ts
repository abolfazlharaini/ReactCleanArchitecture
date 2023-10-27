import IApiRequest from "shared/api/IApiRequest";

const apiServiceAsync = async <TResponse>(request: IApiRequest) =>
    (await import('infra/api/caller/apiCaller')).default<TResponse>(request);
export default apiServiceAsync;