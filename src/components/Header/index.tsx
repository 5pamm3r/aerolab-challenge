import React from "react";

import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <span className={styles.headerTitle}>Electronics</span>
    </header>
  );
};

export default Header;
