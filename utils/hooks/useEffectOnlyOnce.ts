import { EffectCallback, useEffect } from "react";

export function useEffectOnlyOnce(func: EffectCallback) {
  useEffect(func, []);
}
