import { useNavigate } from "react-router-dom";
import { RoutePaths } from "Enums/RoutePaths";

/**
 * @param {RoutePaths} path A path constant
 * @returns {() => void} A function that wraps the react router dom navigate function with a predfined path.
 */
export function useAppNavigation(path: RoutePaths): () => void {
    let navigate = useNavigate();
    return () => navigate(path);
}