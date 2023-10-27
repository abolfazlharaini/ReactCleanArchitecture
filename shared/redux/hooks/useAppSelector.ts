import { TypedUseSelectorHook, useSelector, shallowEqual } from "react-redux";

import IApplicationState from "../model/IApplicationState";


const useAppSelector: TypedUseSelectorHook<IApplicationState> = (selector) => useSelector(selector, shallowEqual);
export default useAppSelector;