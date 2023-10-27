import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// App
//
import IAccountState from "shared/redux/model/IAccountState";
import loggedInSharedAction from "../actions/loggedInShared.action";
import logoutSharedAction from "../actions/logoutShared.action";


const initialStateClean: IAccountState = {

}

// Slice
//
const accountStateSlice = createSlice({
    name: 'account',
    initialState: initialStateClean,
    reducers: {

        updateInfo: (state, action: PayloadAction<{
            email: string;
        }>) => {
            state.info = {
                email: action.payload.email,
            }
        },

    },
    extraReducers: (builder) => [

        builder.addCase(loggedInSharedAction, (state, action) => {
            state.info = {
                email: action.payload.user.email,
            }
        }),
        builder.addCase(logoutSharedAction, () => initialStateClean),

    ]
});
export default accountStateSlice;