import IApplicationState from "shared/redux/model/IApplicationState";

const isUserLoggedInSelect = (state: IApplicationState) => !!state.account.info;
export default isUserLoggedInSelect;
