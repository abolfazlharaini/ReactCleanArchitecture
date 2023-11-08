/* eslint-disable react/display-name */
import { useField } from "formik";
import { forwardRef } from "react";

// App
//

import style from './TextField.module.scss';
import getClassNames from "../getClassNames";
import BaseField from "./BaseField";
import { IHtmlTagClassNameProps } from "../htmlTagProps";


type TextFieldProps =
    IHtmlTagClassNameProps & {
        inputProps: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
        labelProps: IHtmlTagClassNameProps & {
            text: string
        },
    };

const TextField = forwardRef<any, TextFieldProps>(({
    className,
    inputProps,
    labelProps,
}, ref: any) => {

    const [_, meta] = useField(inputProps.name || '');
    return (
        <div className={getClassNames([style["root"], meta.error ? style['error'] : undefined, className])}>
            <BaseField
                inputProps={{
                    ...inputProps,
                    className: getClassNames([
                        `${style['input']} peer focus:border-2 focus:border-gray-900`,
                        inputProps.className
                    ]),
                    onInput: (e) => { console.log('a'); },
                    placeholder: ' ',
                }}
                ref={ref} />
            <label
                className={getClassNames([
                    `${style['label']} peer-placeholder-shown:text-lg peer-placeholder-shown:translate-y-0 peer-placeholder-shown:z-[1]  peer-focus:ps-[1.063rem] peer-focus:text-xs peer-focus:-translate-y-3`,
                    labelProps.className,
                ])}>
                {meta.error || labelProps.text}
            </label>
        </div>
    )
});
export default TextField;