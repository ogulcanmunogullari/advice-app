import { useState } from "react";
import { createContext } from "react";
export const General = createContext();

export function GeneralProvider({ children }) {
  const [search, setSearch] = useState("");
  const values = {
    search,
    setSearch,
  };

  return <General.Provider value={values}>{children}</General.Provider>;
}
