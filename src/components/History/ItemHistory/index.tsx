import React from "react";

import {History} from "~/types/typeHistory";
import coin from "~/assets/icons/coin.svg";

import styles from "./ItemHistory.module.scss";
interface Props {
  name: History["name"];
  image: History["img"];
  price: History["cost"];
}
const ItemHistory: React.FC<Props> = ({name, image, price}) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.imgContainer}>
        <img alt={name} src={image.url} />
      </div>
      <div className={styles.nameContainer}>
        <span>{name}</span>
      </div>
      <div className={styles.priceContainer}>
        <span className={styles.price}>{price}</span>
        <img alt="coin" src={coin} />
      </div>
    </div>
  );
};

export default ItemHistory;
