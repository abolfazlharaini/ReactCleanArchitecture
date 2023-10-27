import IApplicationState from "shared/redux/model/IApplicationState";

const userInfoSelect = (state: IApplicationState) => state.account.info;
export default userInfoSelect;
