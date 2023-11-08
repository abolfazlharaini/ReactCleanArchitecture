import IconColor from "./IconColor";
import IconSizeType from "./IconSizeType";
import { IHtmlTagClassNameProps } from "src/base/htmlTagProps";


type IconCommonProps = IHtmlTagClassNameProps & {
    ariaLabel?: string;
    color?: IconColor;
    size?: IconSizeType;
    opacity?: string;
    secondaryColor?: IconColor;
    strokeWidth?: string;
    style?: any;
}
export default IconCommonProps;
