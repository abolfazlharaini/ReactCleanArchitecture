import IApplicationActionEvent from "application/model/IApplicationActionEvent";
import appCreateAction from "shared/redux/utils/appCreateAction";

const logoutAction = appCreateAction<IApplicationActionEvent>('ACCOUNT/LOGOUT');
export default logoutAction;
