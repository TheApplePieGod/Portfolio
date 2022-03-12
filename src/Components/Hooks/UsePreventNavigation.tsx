import * as React from "react";

export const usePreventNavigation = (fn: (e: Event) => void) => {
    const cb = React.useRef(fn);

    React.useEffect(() => {
        cb.current = fn;
    }, [fn]);

    // TODO: block routes
    React.useEffect(() => {
        const onUnload = cb.current;
        window.addEventListener("beforeunload", onUnload);
        return (() => {
            window.removeEventListener("beforeunload", onUnload);
        });
    }, []);
}