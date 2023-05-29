import React, {useContext} from "react";

import {Product} from "~/types/typeProduct";
import UserContext from "~/Context/userContext";
import coin from "~/assets/icons/coin.svg";
// import {fetchRedeem} from "~/Api/ApiRedeem";

import style from "./ModalProduct.module.scss";

interface Props {
  product: Product;
  enoughtFunds: boolean;
}
const ModalProduct: React.FC<Props> = ({product, enoughtFunds}) => {
  const {
    state: {user},
  } = useContext(UserContext);

  const onBuy = async () => {
    // await fetchRedeem(product._id);
    alert("comprado");
  };

  return (
    <div className={style.modalProduct}>
      <div className={style.costContainer}>
        <h2 className={style.cost}>{product.cost}</h2>
        <div className={style.imgContainer}>
          <img alt="coin" src={coin} />
        </div>
      </div>
      {enoughtFunds ? (
        <button className={style.buyBtn} onClick={onBuy}>
          <span>Redeem Now</span>
        </button>
      ) : (
        <span className={style.buyBtn}>No funds, you need {product.cost - user.points}</span>
      )}
    </div>
  );
};

export default ModalProduct;
