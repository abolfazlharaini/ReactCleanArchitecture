import IconAttrTypeColor from "../model/IconAttrTypeColor";
import IconColor from "../model/IconColor";


const ICON_COLOR = {
    fill: {
        'white': 'fill-white',
    },
    stroke: {
        'white': 'stroke-white',
    },
}
export default function getIconColor(attrType: IconAttrTypeColor, color: IconColor) {
    return ICON_COLOR[attrType][color];
}