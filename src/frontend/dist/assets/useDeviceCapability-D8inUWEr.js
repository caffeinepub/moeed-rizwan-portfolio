import { r as reactExports } from "./index-tCVNa7Va.js";
function useDeviceCapability() {
  return reactExports.useMemo(() => {
    const cores = navigator.hardwareConcurrency ?? 4;
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const isLowEnd = cores < 4 || isMobile;
    return {
      isLowEnd,
      particleCount: isLowEnd ? 200 : 1800,
      enable3D: !isLowEnd
    };
  }, []);
}
export {
  useDeviceCapability as u
};
