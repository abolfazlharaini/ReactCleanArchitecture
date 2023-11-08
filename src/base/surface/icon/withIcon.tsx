/* eslint-disable react/display-name */
import IconCommonProps from "./model/IconCommonProps";
import generateIconStyleProps from "./utils/generateIconStyleProps";
import { ICON_DEFAULT_SIZE } from "shared/configs";


const withIcon = (iconName: string, IconComponent: React.ComponentType<IconCommonProps>) =>
    (props: IconCommonProps) => (
        <IconComponent
            ariaLabel={props.ariaLabel || iconName}
            opacity={props.opacity}
            className={props.className}
            color={props.color || 'white'}
            size={props.size || 24}
            strokeWidth={props.strokeWidth}
            secondaryColor={props.secondaryColor}
            style={{ ...generateIconStyleProps(props.size || ICON_DEFAULT_SIZE as any) }} />
    );
export default withIcon;