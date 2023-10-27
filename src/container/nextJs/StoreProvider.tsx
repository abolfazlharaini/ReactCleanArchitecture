"use client";
import { Provider } from "react-redux";

import store from "infra/store";
import { IChildrenAnyProps } from "src/base/childrenProps";

type StoreProviderProps = IChildrenAnyProps;
const StoreProvider: React.FC<StoreProviderProps> = ({
    children
}) => (
    <Provider store={store}>
        {children}
    </Provider>
);
export default StoreProvider;