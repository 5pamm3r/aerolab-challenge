import React, {useContext} from "react";

import UserContext from "../../Context";
import {History} from "~/types/typeHistory";

import ItemHistory from "./ItemHistory";

const History = () => {
  const {
    state: {history},
  } = useContext(UserContext);

  return (
    <div>
      {history.map((product: History) => (
        <ItemHistory
          key={product.createDate}
          image={product.img}
          name={product.name}
          price={product.cost}
        />
      ))}
    </div>
  );
};

export default History;
