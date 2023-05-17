import { Button } from "components/Button";
import classNames from 'classnames';
import { useAppNavigation } from "hooks/useAppNavigation";
import { RoutePaths } from "Enums/RoutePaths";
import { useIsCurrentPath } from "hooks/useIsCurrentPath";
import './Sidebar.css';
import { useSidebarContext } from "hooks/useSidebarContext";
import { toggleSidebarActionThunk } from "statemanagement/reducers/SidebarReducer";

/**
 * The navigation sidebar
 * @returns {JSX.Element}
 */
export function Sidebar() {
    const navigateToHome = useAppNavigation(RoutePaths.HOME);
    const navigateToStates = useAppNavigation(RoutePaths.STATES);
    const navigateToProvinces = useAppNavigation(RoutePaths.PROVINCES);
    const isStatesPath = useIsCurrentPath(RoutePaths.STATES);
    const isProvincesPath = useIsCurrentPath(RoutePaths.PROVINCES);
    const { state: { isCollapsed }, dispatch } = useSidebarContext();
    const toggleSidebarIsCollapsed = toggleSidebarActionThunk(dispatch);
    const sidebarClassName = classNames('app-sidebar', { expanded: !isCollapsed, collapsed: isCollapsed });

    return (
        <aside className={sidebarClassName}>
            <ul>
                <li className="sidebar-li collapse-expand">
                    <Button title={isCollapsed ? 'Expand' : undefined} onClick={toggleSidebarIsCollapsed}>
                        {isCollapsed ? '>>' : 'Collapse <<'}
                    </Button>
                </li>
                <li className="sidebar-li">
                    <Button title={isCollapsed ? 'Home' : undefined} onClick={navigateToHome}>
                        {isCollapsed ? 'H' : 'Home'}
                    </Button>
                </li>
                {!isProvincesPath &&
                    <li className="sidebar-li">
                        <Button title={isCollapsed ? 'Provinces' : undefined} onClick={navigateToProvinces}>
                            {isCollapsed ? 'P' : 'Provinces'}
                        </Button>
                    </li>
                }
                {!isStatesPath &&
                    <li className="sidebar-li">
                        <Button title={isCollapsed ? 'States' : undefined} onClick={navigateToStates}>
                            {isCollapsed ? 'S' : 'States'}
                        </Button>
                    </li>
                }
            </ul>
        </aside>
    );
}