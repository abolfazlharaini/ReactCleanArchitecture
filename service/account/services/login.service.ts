import ACCOUNT_CONTROLLER from "./ACCOUNT_CONTROLLER";
import EMPTY_RESULT from "shared/EMPTY_RESULT";
import apiServiceAsync from "service/apiServiceAsync";
import IAccountResponseDto from "shared/models/account/IAccountResponseDto";

export default async function loginService(request: {
    email: string;
    password: string;
}) {
    const response = await apiServiceAsync<{ email: string; }[]>({
        url: ACCOUNT_CONTROLLER,
        method: 'get',
        data: {
            email: request.email,
            password: request.password,
        },
    });
    if (!response.ok || !response.data)
        return EMPTY_RESULT;

    const user = response.data.filter(a => a.email == request.email);
    if (user.length === 0)
        return EMPTY_RESULT;

    return {
        user: {
            email: user[0].email
        }
    } as IAccountResponseDto;
}
