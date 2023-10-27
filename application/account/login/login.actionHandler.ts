import loginAction from "./login.action";
import actionCatchHandler from "application/utils/actionCatchHandler";
import loginService from "service/account/services/login.service";
import setApplicationActionStatus from "application/utils/setApplicationActionStatus";
import middlewareListener from "shared/redux/middlewareListener";
import loggedInSharedAction from "service/account/actions/loggedInShared.action";

export default function loginActionHandler(listener: typeof middlewareListener) {
    listener.startListening({
        actionCreator: loginAction,
        effect: async (action, { dispatch }) => {

            setApplicationActionStatus(action, 'loading');

            try {

                const response = await loginService({
                    email: action.payload.model.email,
                    password: action.payload.model.password
                });
                if (response) {
                    dispatch(loggedInSharedAction(response));
                    setApplicationActionStatus(action, 'succeed');
                    return;
                }

            } catch (error) {
                actionCatchHandler('error', action);
            }

            setApplicationActionStatus(action, 'failed');

        }
    });
}
