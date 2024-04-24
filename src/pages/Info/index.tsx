import React from "react";
import styles from "./style.module.scss";

import tokenIcon from "../../assets/tokenIcon.gif";
import bird from "../../assets/bird.png";

const Info: React.FC = () => {
  return (
    <div className={styles.info}>
      <div className={styles.content}>
        {/* left */}
        <section className={styles.left}>
          {/* tokenIcon */}
          <img alt="gif" className={styles.tokenIcon} src={tokenIcon} />
          {/* name */}
          <div className={styles.nameSection}>
            <span className={styles.name}>$G-DROP STAKING</span>
            <span className={styles.detail}>{`Details >`}</span>
          </div>
        </section>
        {/* right */}
        <section className={styles.right}>
          <span className={styles.text}>INVITED BY</span>
          <div className={styles.link}>
            <img src={bird} className={styles.icon} alt="link" />
            <span className={styles.linkText}>@elonmusk</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Info;
