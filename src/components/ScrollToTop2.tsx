// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop2 = (props: any) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop2;
