import { memo } from "react";

//App
//
import withIcon from "./withIcon";
import IconCommonProps from "./model/IconCommonProps";
import getIconColor from "./utils/getIconColor";


const LongArrowRightIcon: React.FC<IconCommonProps> = withIcon('ArrowDownIcon', ({
    ariaLabel,
    color,
    className,
    size,
    strokeWidth,
    style
}) => ((
    <svg aria-label={ariaLabel} width={size} height={size} className={className} viewBox="0 0 24 16" fill="none" style={style}>
        <path d="M23.8535 7.64649L16.3535 0.146496C16.1582 -0.048832 15.8418 -0.048832 15.6465 0.146496C15.4512 0.341824 15.4512 0.65823 15.6465 0.853511L22.293 7.50001H0.500015C0.22364 7.50001 0 7.72365 0 8.00002C0 8.2764 0.22364 8.50004 0.500015 8.50004H22.293L15.6465 15.1465C15.4512 15.3418 15.4512 15.6582 15.6465 15.8535C15.7441 15.9511 15.8721 16 16 16C16.1279 16 16.2559 15.9511 16.3536 15.8535L23.8535 8.35351C24.0488 8.15822 24.0488 7.84182 23.8535 7.64649Z" className={getIconColor('fill', color!)} strokeWidth={strokeWidth ?? "1.5"} />
    </svg>
)));
export default memo(LongArrowRightIcon);