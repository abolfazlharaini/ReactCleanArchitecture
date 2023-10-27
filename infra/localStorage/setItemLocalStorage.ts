import exceptionLog from "shared/exception/exceptionLog";
import EmptyType from "shared/EmptyType";
import EMPTY_RESULT from "shared/EMPTY_RESULT";
import { IS_SERVER } from "shared/configs";

const setItemLocalStorage = (key: string, value?: string | EmptyType): boolean => {
    if (IS_SERVER)
        return false;
    try {

        const isAccessToSetLocalStorage = (
            window.localStorage &&
            window.localStorage.setItem !== undefined &&
            window.localStorage.setItem !== EMPTY_RESULT
        );
        if (isAccessToSetLocalStorage)
            window.localStorage.setItem(key, value ?? '');

        return isAccessToSetLocalStorage;

    } catch (e) {
        exceptionLog('error', e);
        return false;
    }
}
export default setItemLocalStorage;