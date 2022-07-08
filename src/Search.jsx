import React, { useContext } from "react";
import { General } from "./ContextGeneral";

function Search() {
  const { setSearch, search } = useContext(General);
  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default Search;
