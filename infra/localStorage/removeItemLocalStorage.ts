import exceptionLog from "shared/exception/exceptionLog";
import EMPTY_RESULT from "shared/EMPTY_RESULT";
import { IS_SERVER } from "shared/configs";

const removeItemLocalStorage = (key: string) => {
    if (IS_SERVER)
        return false;

    try {

        const isAccessToRemoveLocalStorage = (
            window.localStorage &&
            window.localStorage.removeItem !== undefined &&
            window.localStorage.removeItem !== EMPTY_RESULT
        );
        if (isAccessToRemoveLocalStorage)
            window.localStorage.removeItem(key);

        return isAccessToRemoveLocalStorage;

    } catch (e) {
        exceptionLog('error', e);
        return false;
    }
}
export default removeItemLocalStorage;