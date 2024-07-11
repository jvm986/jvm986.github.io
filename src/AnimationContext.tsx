import React, { createContext, useState, ReactNode } from "react";

export type AnimationContextProps = {
  animateSignature: boolean;
  setAnimateSignature: (animate: boolean) => void;
};

export const AnimationContext = createContext<
  AnimationContextProps | undefined
>(undefined);

export const AnimationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [animateSignature, setAnimateSignature] = useState<boolean>(true);

  return (
    <AnimationContext.Provider
      value={{ animateSignature, setAnimateSignature }}
    >
      {children}
    </AnimationContext.Provider>
  );
};
