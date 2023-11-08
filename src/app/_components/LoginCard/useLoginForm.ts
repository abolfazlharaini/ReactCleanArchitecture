import ILoginRequest from "application/account/login/model/ILoginRequest";
import loginAction from "application/account/login/login.action";
import useAppDispatch from "shared/redux/hooks/useAppDispatch";
import useApplicationActionStatus from "application/utils/useApplicationActionStatus";
import useAppSelector from "shared/redux/hooks/useAppSelector";
import isUserLoggedInSelect from "service/account/selectors/isUserLoggedIn.select";

const useLoginForm = () => {

    const dispatch = useAppDispatch();
    const [loginActionStatus, setLoginActionStatus] = useApplicationActionStatus();

    const loggedIn = useAppSelector(isUserLoggedInSelect);

    const onLogin = (model: ILoginRequest) => dispatch(loginAction({ model, actionStatus: setLoginActionStatus }));

    return {
        onLogin,

        loggedIn,
        loginActionStatus,
    }
}
export default useLoginForm;
