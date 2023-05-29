import React, {useContext} from "react";

import UserContext from "../../../Context/userContext";
import {Product} from "~/types/typeProduct";

import styles from "./ItemCategory.module.scss";

interface Props {
  category: Product["category"];
}
const ItemCategory: React.FC<Props> = ({category}) => {
  return (
    <li className={styles.itemCategoryContainer}>
      <button>{category}</button>
    </li>
  );
};

export default ItemCategory;
