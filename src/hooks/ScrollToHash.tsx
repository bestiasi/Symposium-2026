/* components/Universal/ScrollToHash.tsx */
import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

export const ScrollToHash = () => {
  const { hash, pathname, search } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");

    const scrollAndCleanURL = () => {
      const element = document.getElementById(id);
      if (element) {
        // 1. Scroll to the element
        element.scrollIntoView({ behavior: "smooth", block: "start" });

        // 2. Remove the hash from the URL cleanly
        window.history.replaceState(
          null,
          "",
          pathname + search, // Rebuilds URL with just path and query params (if any)
        );
      }
    };

    // Navigated from a different page — wait for render
    if (prevPathname.current !== pathname) {
      setTimeout(scrollAndCleanURL, 100);
    } else {
      scrollAndCleanURL();
    }

    prevPathname.current = pathname;
  }, [hash, pathname, search]);

  return null;
};
