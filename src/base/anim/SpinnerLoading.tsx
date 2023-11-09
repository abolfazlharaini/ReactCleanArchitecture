/* eslint-disable react/display-name */
import dynamic from "next/dynamic";
import { memo } from "react";

// App
//
import getClassNames from "../getClassNames";
import { IHtmlTagClassNameProps } from "../htmlTagProps";
import { SpinnerColorType } from "./SpinnerLoadingModel";


// Dynamic
//
const CircularProgressLazy = dynamic(() => import('@mui/material/CircularProgress'), { ssr: false, suspense: false, loading: () => <></> });

type LoadingProps = IHtmlTagClassNameProps & {
    color?: SpinnerColorType,
    ignoreColor?: boolean,
    size?: number
}

const SPINNER_COLOR = {
    "white": '!text-white',
}
export const SpinnerLoading: React.FC<LoadingProps> = memo(({
    className,
    color = 'white',
    size
}) => (
    <CircularProgressLazy
        size={size}
        classes={{
            root: getClassNames([
                SPINNER_COLOR[color],
                className
            ])
        }}
        color='primary' />
));