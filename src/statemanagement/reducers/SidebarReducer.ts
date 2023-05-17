import { Dispatch } from "react";

export interface ISidebarState {
    isCollapsed: boolean
}

export interface ISidebarAction {
    type: 'toggle' | 'set';
    payload?: boolean;
}

export const SidebarReducerDefaultState: ISidebarState = {
    isCollapsed: false
}

export function SidebarReducer(state: ISidebarState, action: ISidebarAction) {
    switch (action.type) {
        case 'toggle':
            return { isCollapsed: !state.isCollapsed } as ISidebarState;
        case 'set':
            return { isCollapsed: action.payload } as ISidebarState;
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export function toggleSidebarActionThunk(dispatch: Dispatch<ISidebarAction>): () => void {
    return () => dispatch({ type: 'toggle' });
}

export function setSidebarActionThunk(dispatch: Dispatch<ISidebarAction>, bool: boolean): () => void {
    return () => dispatch({ type: 'set', payload: bool });
}