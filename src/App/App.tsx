import React, {useContext} from "react";

import Products from "~/components/Products";
import FilterPrice from "~/components/FilterPrice";
import {Product} from "~/types/typeProduct";
import ProductItem from "~/components/Products/ProductItem";
import NavProducts from "~/components/NavProducts";
import ModalProduct from "~/components/Products/ModalProduct";
import UserContext from "../Context";

import styles from "./App.module.scss";

const App: React.FC = () => {
  const {
    state: {user, products, originalProducts},
    actions: {setProducts},
  } = useContext(UserContext);

  const [currentPage, setCurrentPage] = React.useState(1);
  const productsPerPage = 9;

  const enoughtFunds = (cost: number) => {
    if (user) {
      return user.points >= cost;
    }

    return false;
  };

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <span className={styles.headerTitle}>Electronics</span>
      </header>
      <NavProducts
        currentPage={currentPage}
        products={products}
        productsPerPage={productsPerPage}
        setCurrentPage={setCurrentPage}
      >
        <FilterPrice
          originalProducts={originalProducts}
          products={products}
          setProducts={setProducts}
        />
      </NavProducts>
      <hr className={styles.hr} />
      <Products
        currentPage={currentPage}
        products={products}
        productsPerPage={productsPerPage}
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
      <NavProducts
        currentPage={currentPage}
        products={products}
        productsPerPage={productsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
};

export default App;
