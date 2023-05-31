import React, {useContext} from "react";

import UserContext from "../../../Context/userContext";
import {Product} from "~/types/typeProduct";

import styles from "./ItemCategory.module.scss";

interface Props {
  category: Product["category"];
}
const ItemCategory: React.FC<Props> = ({category}) => {
  const {
    state: {originalProducts},
    actions: {filterProducts},
  } = useContext(UserContext);
  const onClick = () => {
    const productsFiltered = originalProducts.filter((e) => e.category === category);

    filterProducts(productsFiltered);
    console.log(productsFiltered);
  };

  return (
    <li className={styles.itemCategoryContainer}>
      <button onClick={onClick}>{category}</button>
    </li>
  );
};

export default ItemCategory;
