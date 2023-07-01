import React, {useContext, useEffect} from "react";

import UserContext from "../../Context/userContext";

import style from "./FilterPrice.module.scss";

const FilterPrice: React.FC = () => {
  const {
    state: {products, originalProducts},
    actions: {setProducts},
  } = useContext(UserContext);

  const [selectedBtn, setSelectedBtn] = React.useState<
    "most-recent" | "lowest-price" | "highest-price"
  >("most-recent");

  const onMostRecentBtn = () => {
    setProducts(originalProducts);
    setSelectedBtn("most-recent");
  };
  const onMinBtn = () => {
    const minProducts = [...products].sort((a, b) => a.cost - b.cost);

    setProducts(minProducts);
    setSelectedBtn("lowest-price");
  };
  const onMaxBtn = () => {
    const maxProducts = [...products].sort((a, b) => b.cost - a.cost);

    setProducts(maxProducts);
    setSelectedBtn("highest-price");
  };

  return (
    <div className={style.filterPriceContainer}>
      <div className={style.filterPrice}>
        <span className={style.sortBy}>Sort By:</span>
        <div className={style.buttonContainer}>
          <button
            className={`${style.button} ${selectedBtn === "most-recent" && style.selected}`}
            onClick={onMostRecentBtn}
          >
            Most recent
          </button>
          <button
            className={`${style.button} ${selectedBtn === "lowest-price" && style.selected}`}
            onClick={onMinBtn}
          >
            Lowest price
          </button>
          <button
            className={`${style.button} ${selectedBtn === "highest-price" && style.selected}`}
            onClick={onMaxBtn}
          >
            Highest price
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPrice;
