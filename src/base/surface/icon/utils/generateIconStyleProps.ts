import IconSizeType from "../model/IconSizeType";
import getRemWithPrefix from 'shared/number/getRemWithPrefix';
import { ICON_DEFAULT_SIZE } from 'shared/configs';


export default function generateIconStyleProps(size?: IconSizeType) {
    return {
        width: getRemWithPrefix(size || ICON_DEFAULT_SIZE),
        height: getRemWithPrefix(size || ICON_DEFAULT_SIZE),
    }
}