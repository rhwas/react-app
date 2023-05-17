import { useContext } from "react";
import { SidebarContext } from "statemanagement/context/SidebarContextProvider";

export function useSidebarContext() {
    const context = useContext(SidebarContext);

    if (context === undefined) {
        throw new Error('useSidebarContext must be used within a SidebarContextProvider');
    }

    return context;
}