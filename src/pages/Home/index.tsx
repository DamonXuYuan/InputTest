import React from "react";
import styles from "./style.module.scss";

import Info from "../Info";
import Redemption from "../Redemption";
import { useEffectOnce } from "react-use";

const Home: React.FC = () => {
  useEffectOnce(() => {
    console.log("Running effect once on mount");

    return () => {
      console.log("Running clean-up of effect on unmount");
    };
  });
  return (
    <div className={styles.bg}>
      <Info />
      <Redemption />
    </div>
  );
};

export default Home;
