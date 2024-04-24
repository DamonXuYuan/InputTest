import React from "react";
import styles from "./style.module.scss";

import Info from "../Info";
import Redemption from "../Redemption";

const Home: React.FC = () => {
  return (
    <div className={styles.bg}>
      <Info />
      <Redemption />
    </div>
  );
};

export default Home;
