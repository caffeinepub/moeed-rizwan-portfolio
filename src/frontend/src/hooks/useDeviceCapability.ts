import { useMemo } from "react";

export interface DeviceCapability {
  isLowEnd: boolean;
  particleCount: number;
  enable3D: boolean;
}

export function useDeviceCapability(): DeviceCapability {
  return useMemo(() => {
    const cores = navigator.hardwareConcurrency ?? 4;
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const isLowEnd = cores < 4 || isMobile;
    return {
      isLowEnd,
      particleCount: isLowEnd ? 200 : 1800,
      enable3D: !isLowEnd,
    };
  }, []);
}
