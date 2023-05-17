import { RoutePaths } from "Enums/RoutePaths";
import { useLocation } from "react-router-dom";

/**
 * @param {RoutePaths} path A path constant
 * @returns {boolean} whether the given path is the current path.
 */
export function useIsCurrentPath(path: RoutePaths) {
    const location = useLocation();
    return path === location.pathname;
}