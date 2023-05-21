import React, { useReducer, useContext } from "react";
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import reducer from "./reducer";
import { initialState } from "./defaults";


const user = localStorage.getItem("user") || "";
initialState.user = user ? JSON.parse(user) : null;

const AppContext = React.createContext(initialState);

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <AppContext.Provider
            value={{
                ...state,
                dispatch,
            }}
        >
            {/*<LocalizationProvider dateAdapter={AdapterMoment}>*/}
                {children}
            {/*</LocalizationProvider>*/}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };