import ApplicationActionStatus from "application/model/ApplicationActionStatus";
import IApplicationActionEvent from "application/model/IApplicationActionEvent";

const setApplicationActionStatus = (action: { payload: IApplicationActionEvent; type: string; }, status: ApplicationActionStatus) =>
    action.payload.actionStatus && action.payload.actionStatus(status);
export default setApplicationActionStatus;
