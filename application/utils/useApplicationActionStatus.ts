import { useState } from "react";

import ApplicationActionStatus from "application/model/ApplicationActionStatus";

const useApplicationActionStatus = (defaultValue?: ApplicationActionStatus) =>
    useState<ApplicationActionStatus>(defaultValue || 'none');
export default useApplicationActionStatus;
