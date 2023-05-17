import React from "react";

import {Product} from "~/types/typeProduct";

import style from "./Product.module.scss";

interface Props {
  products: Product[];
  render: (value: Product) => React.ReactNode;
  currentPage: number;
  productsPerPage: number;
}

const Products: React.FC<Props> = ({products, render, currentPage, productsPerPage}) => {
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  return (
    <ul className={style.listContainer}>{products.slice(startIndex, endIndex).map(render)}</ul>
  );
};

export default Products;
