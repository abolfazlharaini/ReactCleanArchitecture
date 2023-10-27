
export default interface IApiRequest {
    url: string,
    headers?: any,
    method?: 'get' | 'post' | 'put' | 'delete',
    queryParams?: any,
    data?: any,
}
