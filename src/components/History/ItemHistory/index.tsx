import React from "react";

import {History} from "~/types/typeHistory";
import coin from "~/assets/icons/coin.svg";

import styles from "./ItemHistory.module.scss";
interface Props {
  name: History["name"];
  image: History["img"];
  price: History["cost"];
  category: History["category"];
  count: History["count"];
  cost: History["cost"];
}
const ItemHistory: React.FC<Props> = ({name, image, price, category, count, cost}) => {
  return (
    <>
      <li className={styles.itemContainer}>
        <div className={styles.imgContainer}>
          <img alt={name} src={image.url} />
        </div>
        <div className={styles.infoContainer}>
          <span className={styles.category}>{category}</span>
          <span>{name}</span>
          <span>${cost}</span>
        </div>
        <div className={styles.countContainer}>
          <span>x{count}</span>
        </div>
        <div className={styles.priceContainer}>
          <span className={styles.price}>{price * count}</span>
          <div className={styles.coinImgContainer}>
            <img alt="coin" src={coin} />
          </div>
        </div>
      </li>
      <hr />
    </>
  );
};

export default ItemHistory;
