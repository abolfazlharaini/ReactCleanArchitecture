import loginActionHandler from "./login/login.actionHandler";
import logoutActionHandler from "./logout/logout.actionHandler";
import MiddlewareListenerType from "shared/redux/model/MiddlewareListenerType";

export default function accountListener(listener: MiddlewareListenerType) {
    loginActionHandler(listener);
    logoutActionHandler(listener);
}
