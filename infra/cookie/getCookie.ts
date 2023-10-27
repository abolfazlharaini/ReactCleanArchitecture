import EMPTY_RESULT from "shared/EMPTY_RESULT";
import EmptyType from "shared/EmptyType";
import { IS_BROWSER } from "shared/configs";

const getCookie = (cname: string): string | EmptyType => {

    if (!IS_BROWSER)
        return EMPTY_RESULT;

    const name = cname + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return EMPTY_RESULT;
}
export default getCookie;