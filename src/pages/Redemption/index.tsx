import React from "react";
import styles from "./style.module.scss";

import RedemptionContent from "../Content";
import box from "../../assets/box.png";

const Redemption: React.FC = () => {
  return (
    <div className={styles.redemption}>
      {/* header */}
      <section className={styles.title}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.text}>REDEMPTION</div>
      </section>
      <section className={styles.content}>
        <RedemptionContent />
        <div className={styles.rightDiv} />
        <div className={styles.bottomDiv}>
          <img alt="box" src={box} className={styles.box} />
        </div>
      </section>
    </div>
  );
};

export default Redemption;
