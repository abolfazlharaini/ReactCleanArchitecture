import { memo } from "react";

import style from './CircleAnimation.module.scss';

const CircleAnimation: React.FC = () => (
    <div className={`${style['root']} absolute h-[27.813rem] -left-32 rounded-[15rem] -top-72 w-[29rem] z-[1]  lg:-left-28 lg:-top-28`}></div>
);
export default memo(CircleAnimation);