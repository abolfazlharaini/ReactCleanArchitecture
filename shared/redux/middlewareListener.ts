import { createListenerMiddleware } from "@reduxjs/toolkit";

// App
//
import applicationListener from "application/application.listener";


const middlewareListener = createListenerMiddleware();
applicationListener(middlewareListener);
export default middlewareListener;