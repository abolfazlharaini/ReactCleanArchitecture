import EMPTY_RESULT from "shared/EMPTY_RESULT";

const dateFormat = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d*)?)?(\+\d{2}\:\d{2})*(Z?)$/;
function reviver(_: string, value: any) {
    if (typeof value === "string" && dateFormat.test(value)) {
        return new Date(value);
    }
    if (value && value.hasOwnProperty('hasValue') && value.hasOwnProperty('value')) {
        if (value.hasValue)
            return value.value;
        return undefined;
    }
    return value;
}

/**
 * return a thousand comma seperated string for input value
  * @param {number} value input number
  * @param {boolean} ignoreCustomTypeMapping ignore custom type mapping
 */
function parseJSON(value: string | undefined, ignoreCustomTypeMapping?: boolean) {
    if (!value || value.trim() === '')
        return EMPTY_RESULT;

    if (ignoreCustomTypeMapping == true)
        return JSON.parse(value);

    return JSON.parse(value, reviver);
}
export default parseJSON;