import exceptionLog from "shared/exception/exceptionLog";
import IApplicationActionEvent from "../model/IApplicationActionEvent";

const actionCatchHandler = (
    level: 'low' | 'error' | 'fatal',
    action: { payload: Pick<IApplicationActionEvent, 'actionStatus'>, type: string }
) => exceptionLog(
    level,
    () => action.payload.actionStatus && action.payload.actionStatus('failed')
);
export default actionCatchHandler;