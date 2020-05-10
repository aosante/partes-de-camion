import React, { useEffect, useMemo } from "react";
import { throttle } from "throttle-debounce";

const useWindowOnScroll = (handleWindowScroll, loadOnceOnMount = true) => {
  const internalHandleScroll = useMemo(() => {
    // 166 -> 60HZ
    return handleWindowScroll ? throttle(166, handleWindowScroll) : handleWindowScroll;
  }, [handleWindowScroll]);

  useEffect(() => {
    if (internalHandleScroll == null) {
      return undefined;
    }

    window.addEventListener("scroll", internalHandleScroll);
    return () => {
      window.removeEventListener("scroll", internalHandleScroll);
      internalHandleScroll.cancel();
    };
  }, [internalHandleScroll]);

  useEffect(() => {
    if (loadOnceOnMount) {
      handleWindowScroll();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useWindowOnScroll;
