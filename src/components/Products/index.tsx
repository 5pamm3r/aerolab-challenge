import React, {useContext} from "react";

import {Product} from "~/types/typeProduct";
import {SearchContext} from "~/Context/searchContext";

import style from "./Product.module.scss";

interface Props {
  products: Product[];
  render: (value: Product) => React.ReactNode;
}

const Products: React.FC<Props> = ({products, render}) => {
  const {
    state: {searchValue, startIndex, endIndex},
  } = useContext(SearchContext);

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
