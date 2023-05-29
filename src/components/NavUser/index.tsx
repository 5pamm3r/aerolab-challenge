import React from "react";
import {Link} from "react-router-dom";

import logo from "../../assets/logo.svg";
import coin from "../../assets/icons/coin.svg";
import {fetchPoints} from "~/Api/ApiPoints";
import UserContext from "../../Context/userContext";

import styles from "./NavUser.module.scss";

const NavUser: React.FC = () => {
  const {
    state: {user},
  } = React.useContext(UserContext);

  const onClick = async () => {
    try {
      // await fetchPoints(10);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className={styles.nav}>
      <div>
        <img alt="logo" className={styles.logo} src={logo} />
      </div>
      <div className={styles.linksContainer}>
        <Link to="/">Products</Link>
        <Link to="/history">History</Link>
      </div>
      <div className={styles.userContainer}>
        <span className={styles.user}>{user?.name}</span>
        <div className={styles.coinContainer} onClick={onClick}>
          {user ? <span>{user.points}</span> : <span>0</span>}
          <div>
            <img alt="coin" src={coin} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavUser;
