import { useMemo } from "react";
import { container, InjectionToken } from "tsyringe";

export default function useService<T>(service: InjectionToken<T>) {
  return useMemo(() => container.resolve(service), [service]);
}
