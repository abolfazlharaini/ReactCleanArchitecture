import appCreateAction from "shared/redux/utils/appCreateAction";
import ACCOUNT_ACTION_TYPE from "./ACCOUNT_ACTION_TYPE";


const logoutSharedAction = appCreateAction(`${ACCOUNT_ACTION_TYPE}/logoutSharedAction`);
export default logoutSharedAction;
