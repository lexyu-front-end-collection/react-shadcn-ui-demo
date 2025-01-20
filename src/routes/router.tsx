import { useState, useEffect } from "react";
import { flattenRoutes, routes } from '@/routes/configs';

function Router() {
    const [currentHash, setCurrentHash] = useState(window.location.hash || "#/");
    const flatRoutes = flattenRoutes(routes);

    useEffect(() => {
        const handleHashChange = () => {
            setCurrentHash(window.location.hash);
        };

        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    const Component = flatRoutes[currentHash]?.component || (() => <div>Not found</div>);
    return <Component />;
}

export default Router