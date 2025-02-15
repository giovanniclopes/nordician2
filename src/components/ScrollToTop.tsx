import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import classNames from "classnames";

type ScrollToTopProps = {
  children?: React.ReactNode;
};

export const ScrollToTop = ({ children }: ScrollToTopProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const toggleVisibility = () => {
    if (window.pageYOffset > 250) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {children}
      <div className="z-50 fixed bottom-2 right-2">
        <button
          type="button"
          onClick={scrollToTop}
          className={classNames(
            isVisible ? "opacity-100" : "opacity-0",
            "z-50 bg-black bg-opacity-30 border-2 border-red-400 focus:ring-red-500 inline-flex items-center rounded-full p-3 shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2"
          )}
        >
          <ChevronUpIcon className="h-8 w-8 text-red-400" aria-hidden="true" />
        </button>
      </div>
    </>
  );
};

export default ScrollToTop;
