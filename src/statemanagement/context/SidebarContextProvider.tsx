import { Dispatch, ReactNode, createContext, useReducer } from "react"
import { ISidebarAction, ISidebarState, SidebarReducer, SidebarReducerDefaultState } from "statemanagement/reducers/SidebarReducer";

interface IProps {
    children: ReactNode
}

export const SidebarContext = createContext<{ state: ISidebarState; dispatch: Dispatch<ISidebarAction> } | undefined>(undefined);

export function SidebarContextProvider({ children }: IProps) {
    const [state, dispatch] = useReducer(SidebarReducer, SidebarReducerDefaultState);
    const value = { state, dispatch };
    return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
}