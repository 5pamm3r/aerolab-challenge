import React, {useContext} from "react";

import UserContext from "../Context/userContext";

interface Context {
  state: {
    searchValue: string;
    startIndex: number;
    itemsPerPage: number;
    totalProducts: number;
    endIndex: number;
  };
  actions: {
    onChangeSearchValue: (value: string) => void;
    setStartIndex: (value: number) => void;
  };
}
export const SearchContext = React.createContext({} as Context);

export const SearchProvider: React.FC = ({children}) => {
  const {
    state: {products},
  } = useContext(UserContext);

  const [searchValue, setSearchValue] = React.useState<string>("");
  const [startIndex, setStartIndex] = React.useState<number>(0);
  const [itemsPerPage] = React.useState(12);
  const totalProducts = products.length;
  const endIndex = Math.min(startIndex + itemsPerPage, totalProducts);

  const onChangeSearchValue = (value: string) => {
    setSearchValue(value);
  };

  const state: Context["state"] = {
    searchValue,
    startIndex,
    itemsPerPage,
    totalProducts,
    endIndex,
  };
  const actions: Context["actions"] = {
    setStartIndex,
    onChangeSearchValue,
  };

  return <SearchContext.Provider value={{state, actions}}>{children}</SearchContext.Provider>;
};
