import { useEffect, useState } from "react";

import logoutAction from "application/account/logout/logout.action";
import userInfoSelect from "service/account/selectors/userInfo.select";
import useAppDispatch from "shared/redux/hooks/useAppDispatch";
import useAppSelector from "shared/redux/hooks/useAppSelector";

const useWelcomeText = () => {
    const dispatch = useAppDispatch();

    const [showEmail, setShowEmail] = useState<boolean>(false);
    const userInfo = useAppSelector(userInfoSelect);

    const onLogout = () => dispatch(logoutAction({}));

    useEffect(() => { setShowEmail(true) }, []);

    return {
        onLogout,

        showContent: !!userInfo,
        showEmail,
        userInfo: userInfo!
    }
}
export default useWelcomeText;
