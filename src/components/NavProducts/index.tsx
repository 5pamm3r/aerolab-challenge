import React, {useContext} from "react";

import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import {SearchContext} from "~/Context/searchContext";

import style from "./NavProducts.module.scss";

const NavProducts: React.FC = () => {
  const {
    state: {startIndex, totalProducts, endIndex, itemsPerPage},
    actions: {setStartIndex},
  } = useContext(SearchContext);

  return (
    <div className={style.navProducts}>
      <div className={style.navProductsContainer}>
        <span className={style.countProducts}>
          {endIndex} of {totalProducts} products
        </span>
        <div className={style.buttonContainer}>
          <button
            disabled={startIndex === 0}
            onClick={() => setStartIndex(Math.max(startIndex - itemsPerPage, 0))}
          >
            <img alt="left arrow" src={arrowLeft} />
          </button>
          <button
            disabled={endIndex >= totalProducts}
            onClick={() =>
              setStartIndex(Math.min(startIndex + itemsPerPage, totalProducts - itemsPerPage))
            }
          >
            <img alt="right arrow" src={arrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavProducts;
