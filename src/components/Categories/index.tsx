import React, {useContext} from "react";

import UserContext from "../../Context/userContext";
import {Product} from "~/types/typeProduct";

import styles from "./Categories.module.scss";
import styleItemCat from "./ItemCategory/ItemCategory.module.scss";

interface Props {
  render: (value: string) => React.ReactNode;
}
const Categories: React.FC<Props> = ({render}) => {
  const {
    state: {originalProducts},
    actions: {setProducts},
  } = useContext(UserContext);
  const uniqueCategories: Set<string> = new Set();

  originalProducts.forEach((product: Product) => {
    if (product.category !== "PC Accesories") {
      uniqueCategories.add(product.category);
    }
  });

  const onAllProducts = () => {
    setProducts(originalProducts);
  };

  return (
    <div className={styles.categories}>
      <ul className={styles.categoriesContainer}>
        <li className={styleItemCat.itemCategoryContainer}>
          <button onClick={onAllProducts}>All</button>
        </li>
        {Array.from(uniqueCategories).map(render)}
      </ul>
    </div>
  );
};

export default Categories;
