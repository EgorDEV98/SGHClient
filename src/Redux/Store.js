import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { userReducer } from "./Reducers/UserReducer";
import { deviceReducer } from "./Reducers/DeviceReducer";

const store = configureStore({
    reducer: {
        user: userReducer,
        devices: deviceReducer,
    },
    middleware: [ thunk ],
});

export default store;
