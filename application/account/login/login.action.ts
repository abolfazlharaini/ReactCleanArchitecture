import IApplicationActionEvent from "application/model/IApplicationActionEvent";
import IApplicationActionModel from "application/model/IApplicationActionModel";
import ILoginRequest from "./model/ILoginRequest";
import appCreateAction from "shared/redux/utils/appCreateAction";

const loginAction = appCreateAction<IApplicationActionEvent & IApplicationActionModel<ILoginRequest>>('ACCOUNT/LOGIN');
export default loginAction;
