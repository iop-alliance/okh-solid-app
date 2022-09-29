import React, {
  createContext,
  FunctionComponent,
  useContext,
  Context,
  PropsWithChildren
} from "react";

export function createGlobalHook<ReturnValues>(useHook: () => ReturnValues): {
  Provider: FunctionComponent<PropsWithChildren>;
  useGlobal: () => ReturnValues;
  Context: Context<ReturnValues>;
} {
  // @ts-ignore
  const CreatedContext = createContext<ReturnValues>(undefined);

  const Provider: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const returnValues = useHook();
    return (
      <CreatedContext.Provider value={returnValues}>
        {children}
      </CreatedContext.Provider>
    );
  };

  const useGlobal = () => {
    return useContext(CreatedContext);
  };

  return { Provider, useGlobal, Context: CreatedContext };
}