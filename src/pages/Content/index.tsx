import React, { useState } from "react";
import styles from "./style.module.scss";
import BaseInput from "../BaseInput";
import globalStore from "../../stores/global";
import loading from "../../assets/loading.png";

const Content: React.FC = () => {
  const [text, setText] = useState("Switch to Core");
  const { isLoading } = globalStore();
  return (
    <div className={styles.redemptionCotent}>
      <section className={styles.inputs}>
        <div className={styles.input}>
          <span className={styles.title}>Unstake</span>
          <BaseInput />
        </div>
        {/* button */}
        <section
          className={styles.buttonSec}
          onClick={() => {
            if (isLoading) return;
            globalStore.setState({ isLoading: true });
            setTimeout(() => {
              setText(text === "Switch to Core" ? "Redeem" : "Switch to Core");
              globalStore.setState({ isLoading: false });
            }, 3000);
          }}
        >
          <div className={styles.button}>
            {isLoading ? (
              <img alt="loading" src={loading} className={styles.loading} />
            ) : (
              text
            )}
          </div>
          <div className={styles.back} />
        </section>
      </section>
      <section className={styles.total}>
        <div className={styles.totalContent}>
          <span className={styles.totalContentText}>TOTAL STAKED</span>
          <span className={styles.totalContentVal}>130,012.12 CORE</span>
        </div>
      </section>
    </div>
  );
};

export default Content;
