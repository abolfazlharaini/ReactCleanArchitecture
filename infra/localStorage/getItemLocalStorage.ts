import exceptionLog from "shared/exception/exceptionLog";
import EmptyType from "shared/EmptyType";
import EMPTY_RESULT from "shared/EMPTY_RESULT";
import { IS_SERVER } from "shared/configs";

const getItemLocalStorage = (key: string): string | EmptyType => {
    if (IS_SERVER)
        return EMPTY_RESULT;
    try {

        return (
            window.localStorage &&
            window.localStorage.getItem
        ) ?
            window.localStorage.getItem(key) :
            EMPTY_RESULT;

    } catch (e) {
        exceptionLog('error', e);
        return EMPTY_RESULT;
    }
}
export default getItemLocalStorage;