import React from "react";

import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import {Product} from "~/types/typeProduct";

import style from "./NavProducts.module.scss";

interface Props {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  productsPerPage: number;
  products: Product[];
}
const NavProducts: React.FC<Props> = ({
  children,
  currentPage,
  setCurrentPage,
  productsPerPage,
  products,
}) => {
  const onNextPage = () => {
    if (productsPerPage * currentPage < products.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const onPrevPage = () => {
    if (productsPerPage * currentPage > 16) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={style.navContainer}>
      <span className={style.countProducts}>{productsPerPage * currentPage} of 32 products</span>
      {children}
      <div className={style.buttonContainer}>
        <button onClick={onPrevPage}>
          <img alt="arrow left" src={arrowLeft} />
        </button>
        <button onClick={onNextPage}>
          <img alt="arrow right" src={arrowRight} />
        </button>
      </div>
    </div>
  );
};

export default NavProducts;
