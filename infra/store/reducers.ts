import accountStateSlice from "service/account/state/accountStateSlice";

const reducers = () => ({
        account: accountStateSlice.reducer,
})
export default reducers;