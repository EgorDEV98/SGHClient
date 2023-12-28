//Инициализация состояния
const deviceState = {
    devices: [],
    currentDevice: {
        deviceName: '',
        deviceUid: ''
    }
}

// Круды
const ADD_DEVICE = "ADD_DEVICE";

const GET_DEVICE_INFO = "GET_DEVICE_INFO";
const GET_DEVICE_LIST = "GET_DEVICE_LIST";

const CHANGE_DEVICE_NAME = "CHANGE_DEVICE_NAME";
const CHANGE_CURRENT_DEVICE = "CHANGE_CURRENT_DEVICE";

const REMOVE_DEVICE = "REMOVE_DEVICE";

const deviceReducer = (state = deviceState, action) => {
    switch (action.type){
        case ADD_DEVICE:
            return { ...state, devices: [...state.devices, action.payload] };

        case GET_DEVICE_INFO:
            return { ...state, currentDevice: action.payload };
        case GET_DEVICE_LIST:
            return { ...state, devices: action.payload };

        case CHANGE_DEVICE_NAME:
            return {
                ...state,
                devices: state.devices.map(device => (device.deviceUid === action.payload.deviceUid) ? action.payload : device)
            }

        case REMOVE_DEVICE:
            return { ...state, devices: state.devices.filter(x => x.deviceUid !== action.payload )}


        //UI
        case CHANGE_CURRENT_DEVICE:
            return { ...state, currentDevice: action.payload };
    }
}

// Экшен методы
export const addDeviceAction = (payload) => ({ type: ADD_DEVICE, payload });
export const getDeviceInfoAction = (payload) => ({ type: GET_DEVICE_INFO, payload });
export const getDeviceListAction = (payload) => ({ type: GET_DEVICE_LIST, payload });
export const changeDeviceNameAction = (payload) => ({ type: CHANGE_DEVICE_NAME, payload });
export const changeCurrentDeviceAction = (payload) => ({ type: CHANGE_CURRENT_DEVICE, payload });
export const removeDeviceAction = (payload) => ({ type: REMOVE_DEVICE, payload });