"use client"
import { memo } from "react";

import LoginForm from "./LoginForm";

const LoginCard: React.FC = () => {
    return (
        <div className="bg-[#D7E5FF] h-[50.75rem] overflow-hidden rounded-[2.5rem] relative w-[23.438rem] z-[4]">
            <i className="absolute bg-[#9BBEFD] h-[24.875rem] left-[10rem] rounded-full -top-4 w-[24.875rem]" />
            <i className="absolute bg-[#367CFE] h-[43.75rem] -left-[10.125rem] opacity-80 rounded-full -top-[31.875rem] w-[43.75rem]" />
            <i className="absolute bg-[#9BBEFD] h-[24.875rem] -left-[10rem] rounded-full -top-[20rem] w-[24.875rem]" />

            <div className="px-9 pt-[14rem] relative z-[1]">
                <h2 className="font-bold text-white text-5xl">Login</h2>
                <LoginForm />
            </div>

        </div>
    );
}
export default memo(LoginCard);
