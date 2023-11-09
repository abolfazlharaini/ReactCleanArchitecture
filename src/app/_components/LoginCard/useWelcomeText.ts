import { useEffect, useState } from "react";

import userInfoSelect from "service/account/selectors/userInfo.select";
import useAppSelector from "shared/redux/hooks/useAppSelector";

const useWelcomeText = () => {
    const [showEmail, setShowEmail] = useState<boolean>(false);

    const userInfo = useAppSelector(userInfoSelect);
    useEffect(() => { setShowEmail(true) }, []);

    return {
        showContent: !!userInfo,
        showEmail,
        userInfo: userInfo!
    }
}
export default useWelcomeText;
