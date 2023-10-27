import { useState } from "react";

const useBoolean = (defaultValue?: boolean) => useState<boolean>(defaultValue || false);
export default useBoolean;
