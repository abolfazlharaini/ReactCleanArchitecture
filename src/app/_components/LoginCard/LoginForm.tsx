"use client"
import { memo } from "react";
import { Formik, Form } from "formik";

import TextField from "@/base/input/TextField";
import useLoginForm from "./useLoginForm";
import loginValidation from "@/app/loginValidation";
import LongArrowRightIcon from "@/base/surface/icon/LongArrowRightIcon";
import { SpinnerLoading } from "@/base/anim/SpinnerLoading";
import { TouchRippleAnimLazy } from "@/base/anim/touchRipple/TouchRipple";

const LoginForm: React.FC = () => {
    const {
        onLogin,

        loginActionStatus,
    } = useLoginForm();

    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={loginValidation}
            onSubmit={(e) => {
                onLogin({
                    email: e.email,
                    password: e.password
                });
            }}>
            {() => (
                <Form>
                    <TextField
                        className="mt-3"
                        inputProps={{
                            name: 'email',
                            type: 'email'
                        }}
                        labelProps={{ text: 'Email' }} />

                    <TextField
                        className="mt-3"
                        inputProps={{
                            name: 'password',
                            type: 'password'
                        }}
                        labelProps={{ text: 'Password' }} />

                    <div className="flex justify-end mt-[1.875rem]">
                        <TouchRippleAnimLazy>
                            {({ TouchRippleEl, onRippleStart, onRippleStop }) => (
                                <button
                                    aria-label='login'
                                    className='bg-[#367CFE] flex items-center justify-center h-16 relative rounded-full text-white transition-all w-16'
                                    disabled={loginActionStatus == 'loading'}
                                    onMouseDown={onRippleStart}
                                    onMouseUp={onRippleStop}
                                    onMouseLeave={onRippleStop}
                                    type='submit'>

                                    {loginActionStatus == 'loading' ? (
                                        <SpinnerLoading
                                            className='loading'
                                            size={20} />
                                    ) : (
                                        <LongArrowRightIcon />
                                    )}

                                    {TouchRippleEl}

                                </button>
                            )}
                        </TouchRippleAnimLazy>
                    </div>
                </Form>
            )}
        </Formik>
    );
}
export default memo(LoginForm);
