import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={ useReducer(reducer, initialState) }> { /* reducer listen - initialState how the db looks like before */ }
        { /* our App : */ }
        { children }
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);