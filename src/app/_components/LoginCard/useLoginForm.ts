import ILoginRequest from "application/account/login/model/ILoginRequest";
import loginAction from "application/account/login/login.action";
import useAppDispatch from "shared/redux/hooks/useAppDispatch";
import useApplicationActionStatus from "application/utils/useApplicationActionStatus";

const useLoginForm = () => {

    const dispatch = useAppDispatch();
    const [loginActionStatus, setLoginActionStatus] = useApplicationActionStatus();

    const onLogin = (model: ILoginRequest) => dispatch(loginAction({ model, actionStatus: setLoginActionStatus }));

    return {
        onLogin,

        loginActionStatus,
    }
}
export default useLoginForm;
