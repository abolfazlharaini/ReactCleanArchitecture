import logoutSharedAction from "service/account/actions/logoutShared.action";
import logoutAction from "./logout.action";
import middlewareListener from "shared/redux/middlewareListener";
import setApplicationActionStatus from "application/utils/setApplicationActionStatus";

export default function logoutActionHandler(listener: typeof middlewareListener) {
    listener.startListening({
        actionCreator: logoutAction,
        effect: (action, { dispatch }) => {

            dispatch(logoutSharedAction());
            setApplicationActionStatus(action, 'succeed');

        }
    });
}
