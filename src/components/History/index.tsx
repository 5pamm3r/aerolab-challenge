import React, {useContext} from "react";

import UserContext from "../../Context/userContext";
import {History} from "~/types/typeHistory";

import ItemHistory from "./ItemHistory";
import styles from "./History.module.scss";

const History = () => {
  const {
    state: {history},
  } = useContext(UserContext);

  return (
    <ul className={styles.history}>
      {history.map((product: History) => (
        <ItemHistory
          key={product.createDate}
          category={product.category}
          cost={product.cost}
          count={product.count}
          image={product.img}
          name={product.name}
          price={product.cost}
        />
      ))}
    </ul>
  );
};

export default History;
