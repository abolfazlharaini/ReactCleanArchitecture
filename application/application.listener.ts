import accountListener from "./account/account.listener";
import MiddlewareListenerType from "shared/redux/model/MiddlewareListenerType";

const applicationListener = (listener: MiddlewareListenerType) => {
    accountListener(listener);
}
export default applicationListener;
