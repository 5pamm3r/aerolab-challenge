import React, {useContext} from "react";

import {SearchContext} from "~/Context/searchContext";

import styles from "./Search.module.scss";

const Search: React.FC = () => {
  const {
    actions: {onChangeSearchValue},
  } = useContext(SearchContext);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeSearchValue(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <input className={styles.search} placeholder="Search..." type="text" onChange={onChange} />
    </div>
  );
};

export default Search;