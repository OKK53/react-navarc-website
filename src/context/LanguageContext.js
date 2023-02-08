import { createContext, useReducer, useContext } from "react";
import langReducer from "reducers/langReducer";

const Context = createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(langReducer, {
    language: localStorage.getItem("language") || "tr",
  });

  const data = {
    ...state,
    dispatch,
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useLanguage = () => useContext(Context);

export default Provider;
