import ILoginRequest from "application/account/login/model/ILoginRequest";
import loginAction from "application/account/login/login.action";
import useAppDispatch from "shared/redux/hooks/useAppDispatch";
import logoutAction from "application/account/logout/logout.action";
import useApplicationActionStatus from "application/utils/useApplicationActionStatus";
import useAppSelector from "shared/redux/hooks/useAppSelector";
import isUserLoggedInSelect from "service/account/selectors/isUserLoggedIn.select";
import userInfoSelect from "service/account/selectors/userInfo.select";

export default function usePage() {

    const dispatch = useAppDispatch();
    const [loginActionStatus, setLoginActionStatus] = useApplicationActionStatus();
    const [logoutActionStatus, setLogoutActionStatus] = useApplicationActionStatus();

    const loggedIn = useAppSelector(isUserLoggedInSelect);
    const userInfo = useAppSelector(userInfoSelect);

    const onLogin = (model: ILoginRequest) => dispatch(loginAction({ model, actionStatus: setLoginActionStatus }));
    const onLogout = () => dispatch(logoutAction({ actionStatus: setLogoutActionStatus }));

    return {
        onLogin,
        onLogout,

        loginActionStatus,
        logoutActionStatus,
        loggedIn,
        userInfo,
    }
}
