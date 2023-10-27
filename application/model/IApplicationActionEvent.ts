import { Dispatch, SetStateAction } from "react";

import ApplicationActionStatus from "./ApplicationActionStatus";

export default interface IApplicationActionEvent {
    actionStatus?: Dispatch<SetStateAction<ApplicationActionStatus>>;
}