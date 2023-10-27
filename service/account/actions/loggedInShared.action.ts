import appCreateAction from "shared/redux/utils/appCreateAction";
import ACCOUNT_ACTION_TYPE from "./ACCOUNT_ACTION_TYPE";
import IAccountResponseDto from "shared/models/account/IAccountResponseDto";


const loggedInSharedAction = appCreateAction<IAccountResponseDto>(`${ACCOUNT_ACTION_TYPE}/loggedInSharedAction`);
export default loggedInSharedAction;
