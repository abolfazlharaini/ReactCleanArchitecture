"use client"
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

        loggedIn,
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

                    <TouchRippleAnimLazy>
                        {({ TouchRippleEl, onRippleStart, onRippleStop }) => (
                            <button
                                aria-label='login'
                                className=''
                                disabled={loginActionStatus == 'loading'}
                                onMouseDown={onRippleStart}
                                onMouseUp={onRippleStop}
                                onMouseLeave={onRippleStop}
                                type='submit'>

                                {loginActionStatus == 'loading' ? (
                                    <SpinnerLoading
                                        className='loading'
                                        ignoreColor
                                        size={24} />
                                ) : (
                                    <LongArrowRightIcon />
                                )}

                                {TouchRippleEl}

                            </button>
                        )}
                    </TouchRippleAnimLazy>
                </Form>
            )}
        </Formik>
    );
}
export default LoginForm;
