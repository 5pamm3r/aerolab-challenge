import React, {useContext} from "react";

import {Product} from "~/types/typeProduct";
import {SearchContext} from "~/Context/searchContext";
import UserContext from "../../Context/userContext";

import style from "./Product.module.scss";

interface Props {
  render: (value: Product) => React.ReactNode;
}

const Products: React.FC<Props> = ({render}) => {
  const {
    state: {searchValue, startIndex, endIndex},
  } = useContext(SearchContext);
  const {
    state: {products},
  } = useContext(UserContext);

  return (
    <ul className={style.listContainer}>
      {searchValue
        ? products
            .filter((e) => {
              return e.name.toLowerCase().includes(searchValue.toLowerCase());
            })
            .map(render)
        : products.slice(startIndex, endIndex).map(render)}
    </ul>
  );
};

export default Products;
