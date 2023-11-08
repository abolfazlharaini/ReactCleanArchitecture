import { memo } from "react";

const PageTitle: React.FC = () => (
    <div className="absolute flex items-center h-full left-[5.5rem] top-0  z-[2]">
        <h1 className="font-bold text-[6.5rem]">
            React
            <br />
            Clean
            <br />
            <label className="relative">
                <i className="absolute bg-[#0B7EE8] bottom-2 h-[40%] opacity-50 -right-[2.5%] w-[105%] -z-[1]" />
                Architecture
            </label>
        </h1>
    </div>
);
export default memo(PageTitle);