import React, { createContext, useContext, useState } from "react";

type SearchContextType = {
  type: string;
  search: string;
  setSearch: (search: string) => void;
  setType: (type: string) => void;
};

const Search = createContext<SearchContextType | null>(null);

export const SearchContext: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [type, setType] = useState("users");
  const [search, setSearch] = useState("");
  return (
    <Search.Provider value={{ type, setType, search, setSearch }}>
      {children}
    </Search.Provider>
  );
};

export default SearchContext;

export const useSearchState = (): SearchContextType => {
  const context = useContext(Search);
  if (!context) {
    throw new Error(
      "useSearchState must be used within a SearchContextProvider"
    );
  }
  return context;
};
