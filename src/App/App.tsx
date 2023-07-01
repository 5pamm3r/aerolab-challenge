import React, {useContext} from "react";

import Products from "~/components/Products";
import FilterPrice from "~/components/FilterPrice";
import {Product} from "~/types/typeProduct";
import ProductItem from "~/components/Products/ProductItem";
import NavProducts from "~/components/NavProducts";
import ModalProduct from "~/components/Products/ModalProduct";
import UserContext from "../Context/userContext";
import Search from "~/components/Search";
import {SearchProvider} from "~/Context/searchContext";
import Categories from "~/components/Categories";
import ItemCategory from "~/components/Categories/ItemCategory";
import Header from "~/components/Header";

import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <SearchProvider>
        <Categories
          render={(category: Product["category"]) => (
            <ItemCategory key={category} category={category} />
          )}
        />
        <div className={styles.desk}>
          <FilterPrice />
          <Search />
          <NavProducts />
        </div>
        <hr className={styles.line} />
        <Products
          render={(product: Product) => (
            <ProductItem key={product._id} cost={product.cost} product={product}>
              <ModalProduct cost={product.cost} product={product} />
            </ProductItem>
          )}
        />
        <NavProducts />
      </SearchProvider>
    </div>
  );
};

export default App;
