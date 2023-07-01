import React, {useContext} from "react";

import {Product} from "~/types/typeProduct";
import coin from "~/assets/icons/coin.svg";
import UserContext from "../../../Context/userContext";
import buyBlue from "~/assets/icons/buy-blue.svg";
import {fetchRedeem} from "~/Api/ApiRedeem";

import style from "./ProductItem.module.scss";

interface Props {
  product: Product;
  cost: Product["cost"];
}
const ProductItem: React.FC<Props> = ({product, cost, children}) => {
  const {
    state: {user},
    actions: {enoughtFunds},
  } = useContext(UserContext);

  const [active, setActive] = React.useState<boolean>(false);
  const onDetails = () => {
    setActive((prevState) => !prevState);
  };
  const onBuyBtn = async () => {
    await fetchRedeem(product._id);
  };

  return (
    <li className={style.product} onClick={onDetails}>
      <div className={style.productImgContainer}>
        <img alt={product.name} src={product.img.url} />
      </div>
      <hr />
      <div className={style.productDescription}>
        <span className={style.category}>{product.category}</span>
        <span className={style.name}>{product.name}</span>
      </div>
      {enoughtFunds(cost) ? (
        <button className={style.enoughtFunds} onClick={onBuyBtn}>
          <img alt="buy" src={buyBlue} />
        </button>
      ) : (
        <div className={style.needCoinContainer}>
          <span>You need {product.cost - user.points}</span>
          <div className={style.coinContainer}>
            <img alt="coin" src={coin} />
          </div>
        </div>
      )}
      {!!active && children}
    </li>
  );
};

export default ProductItem;
