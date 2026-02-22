
import { useLocation, Navigate } from "react-router-dom";

function AuthCheck(
    { isauthenticated, user, children }
) {
    const location = useLocation();
    if (!isauthenticated &&
        !(
            location.pathname.includes("/login") ||
            location.pathname.includes("/register")
        )) {
        return <Navigate to="/login" />;

    }
    if (isauthenticated &&
        (location.pathname.includes("/login") ||
            location.pathname.includes("/register"))) {
        return <Navigate to="/" />;
    }

    if (isauthenticated && (location.pathname.includes("/login"))) {
        if (user?.role === "admin") {
            return <Navigate to="/admin" />;
        }
        return <Navigate to="/mens/hoodie" />;
    }
    if (isauthenticated && user?.role !== "admin" && location.pathname.includes("/admin")) {
        return <Navigate to="/" />;
    }
    return <> {children}</>
}
export default AuthCheck;