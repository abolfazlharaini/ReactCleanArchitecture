import { IS_BROWSER } from "shared/configs";

const setCookie = (name: string, value: string, exHour?: number | 'Session'): void => {

    if (!IS_BROWSER)
        return;

    let expires;
    if (exHour == "Session") {
        expires = "expires=Session";
    } else {
        let d = new Date();
        if (exHour) {
            d.setTime(d.getTime() + (exHour * 60 * 60 * 1000));
        } else {
            d = new Date('2038-01-19, 03:14:08 UTC');
        }
        expires = `expires=${d.toUTCString()}`;
    }
    document.cookie = `${name}=${value};${expires};path=/`;
}
export default setCookie;