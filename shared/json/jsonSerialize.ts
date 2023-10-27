
import EMPTY_RESULT from 'shared/EMPTY_RESULT';

function jsonSerialize(value?: any) {
    return value === undefined || value === null ? EMPTY_RESULT : JSON.stringify(value);
}
export default jsonSerialize;
