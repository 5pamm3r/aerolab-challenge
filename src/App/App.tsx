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
  const {
    state: {user, products, originalProducts},
    actions: {setProducts},
  } = useContext(UserContext);

  const enoughtFunds = (cost: number) => {
    if (user) {
      return user.points >= cost;
    }

    return false;
  };

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
          <FilterPrice
            originalProducts={originalProducts}
            products={products}
            setProducts={setProducts}
          />
          <Search />
          <NavProducts />
        </div>
        <hr className={styles.line} />
        <Products
          products={products}
          render={(product: Product) => (
            <ProductItem
              key={product._id}
              enoughtFunds={enoughtFunds(product.cost)}
              product={product}
            >
              <ModalProduct enoughtFunds={enoughtFunds(product.cost)} product={product} />
            </ProductItem>
          )}
        />
        <NavProducts />
      </SearchProvider>
    </div>
  );
};

export default App;
