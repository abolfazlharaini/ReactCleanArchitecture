import { memo, useEffect, useRef } from "react";

import getClassNames from "@/base/getClassNames";
import isUserLoggedInSelect from "service/account/selectors/isUserLoggedIn.select";
import useAppSelector from "shared/redux/hooks/useAppSelector";

import style from './LoginCardShapes.module.scss';

const LoginCardShapes: React.FC = () => {

    const shape1Ref = useRef<HTMLElement>(null);
    const shape2Ref = useRef<HTMLElement>(null);
    const shape3Ref = useRef<HTMLElement>(null);

    const loggedIn = useAppSelector(isUserLoggedInSelect);

    useEffect(() => {
        window.setTimeout(() => shape1Ref.current?.classList.add(style['shape-1--init']), 500);
        window.setTimeout(() => shape2Ref.current?.classList.add(style['shape-2--init']), 100);
        window.setTimeout(() => shape3Ref.current?.classList.add(style['shape-3--init']), 700);
    }, []);

    return (<>
        <i
            className={getClassNames([
                `${style['shape-1']} absolute bg-[#9BBEFD] h-[24.875rem] left-[24rem] rounded-full -top-4 w-[24.875rem]`,
                loggedIn ? 'left-[24rem]' : undefined
            ])}
            ref={shape1Ref} />
        <i
            className={getClassNames([
                `${style['shape-2']} absolute bg-[#367CFE] h-[43.75rem] -left-[10.125rem] opacity-80 rounded-[43.75rem] -top-[44rem] w-[43.75rem]`,
                loggedIn ? '!h-[56rem] !-top-[3rem]' : undefined
            ])}
            ref={shape2Ref} />
        <i
            className={getClassNames([
                `${style['shape-3']} absolute bg-[#9BBEFD] h-[24.875rem] -left-[10rem] rounded-full -top-[26rem] w-[24.875rem]`,
                loggedIn ? '-top-[25rem]' : undefined
            ])}
            ref={shape3Ref} />
    </>);
}
export default memo(LoginCardShapes);
