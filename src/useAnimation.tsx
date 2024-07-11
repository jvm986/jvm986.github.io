import { useContext } from "react";
import { AnimationContext, AnimationContextProps } from "./AnimationContext";

export const useAnimation = (): AnimationContextProps => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  return context;
};
