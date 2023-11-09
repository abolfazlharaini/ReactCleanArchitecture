"use client"
import { memo } from "react";

import useWelcomeText from "./useWelcomeText";
import getClassNames from "@/base/getClassNames";

const WelcomeText: React.FC = () => {
    const {
        showContent,
        showEmail,
        userInfo,
    } = useWelcomeText();

    if (!showContent)
        return null;

    return (<>
        <h3 className="font-bold select-none text-3xl text-white text-center">Welcome to the App</h3>
        <div className={getClassNames([
            "absolute bg-white -bottom-[5.625rem] text-lg text-center transition-all w-full",
            showEmail ? '!bottom-0' : undefined
        ])}>
            <p className="px-8 py-7 select-none">{userInfo.email}</p>
            {/* <button>
                Logout
            </button> */}
        </div>
    </>);
}
export default memo(WelcomeText);
