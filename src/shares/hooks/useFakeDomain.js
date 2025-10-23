import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useFakeDomain = (fakeDomain = "turismo.jkl") => {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname + location.search + location.hash;
    const fakeUrl = `${window.location.protocol}//${fakeDomain}${currentPath}`;
    window.history.replaceState(null, "", fakeUrl);
  }, [location, fakeDomain]);
};

export default useFakeDomain;
