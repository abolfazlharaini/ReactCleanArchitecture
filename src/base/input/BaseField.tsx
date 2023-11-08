/* eslint-disable react/display-name */
import { Field as FormikField } from "formik";
import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from "react";

// App
//
import getClassNames from "src/base/getClassNames";


type BaseFieldProps = {
    inputProps: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
};

const BaseField = forwardRef((props: BaseFieldProps, ref: any) => (
    <FormikField
        {...props.inputProps}
        ref={ref}
        className={getClassNames([
            'appearance-none outline-none shadow-none w-full focus:outline-none placeholder:text-gray-100 disabled:bg-gray-100 disabled:text-gray-600',
            props.inputProps.className
        ])} />
));
export default BaseField;