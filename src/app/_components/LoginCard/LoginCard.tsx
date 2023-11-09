"use client"
import { memo, useEffect, useRef } from "react";

import LoginForm from "./LoginForm";
import isUserLoggedInSelect from "service/account/selectors/isUserLoggedIn.select";
import useAppSelector from "shared/redux/hooks/useAppSelector";
import LoginCardShapes from "./LoginCardShapes";
import WelcomeText from "./WelcomeText";

import style from './LoginCard.module.scss';

const LoginCard: React.FC = () => {

    const formRef = useRef<HTMLDivElement>(null);
    const welcomeRef = useRef<HTMLDivElement>(null);

    const loggedIn = useAppSelector(isUserLoggedInSelect);

    useEffect(() => {
        window.setTimeout(() => formRef.current?.classList.add('!opacity-100'), 700);
    }, []);

    useEffect(() => {
        if (loggedIn) {
            window.setTimeout(() => formRef.current?.classList.remove('!opacity-100'));
            window.setTimeout(() => {
                welcomeRef.current?.classList.add('!opacity-100');
                welcomeRef.current?.classList.add('z-[1]');
            }, 300);
        } else {
            window.setTimeout(() => {
                welcomeRef.current?.classList.remove('!opacity-100');
                welcomeRef.current?.classList.remove('z-[1]');
            });
            window.setTimeout(() => formRef.current?.classList.add('!opacity-100'), 300);
        }
    }, [loggedIn]);

    return (
        <div className={`${style['card']} bg-[#D7E5FF] h-[50.75rem] my-auto overflow-hidden rounded-[2.5rem] relative w-[23.438rem] z-[4]`}>

            <LoginCardShapes />

            <div
                className="absolute duration-700 left-0 opacity-0 px-9 pt-32 top-0 w-full z-[1]  transition-all"
                ref={formRef}>
                <h2 className="font-bold mb-56 select-none text-white text-5xl">Login</h2>
                <LoginForm />
            </div>
            <div
                className="absolute duration-700 flex items-center justify-center left-0 h-full opacity-0 transition-all top-0 w-full"
                ref={welcomeRef}>
                <WelcomeText />
            </div>

        </div>
    );
}
export default memo(LoginCard);
