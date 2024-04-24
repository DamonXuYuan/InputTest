import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import BigNumber from "bignumber.js";
import cs from "classnames";

import usdt from "../../assets/usdt.png";
import down from "../../assets/down.png";
import loading from "../../assets/loading.png";
import globalStore from "../../stores/global";

const BaseInput: React.FC = () => {
  const [balance, setBalance] = useState<any>("");
  const [inputVal, setInputVal] = useState("");
  const [isErr, setIsErr] = useState(false);
  const { isLoading } = globalStore();

  const Select = () => {
    return (
      <div
        className={styles.select}
        onClick={() => setBalance(balance === "33333" ? "" : "33333")}
      >
        <img alt="token" src={usdt} className={styles.token} />
        <span className={styles.tokenName}>USDT</span>
        <img alt="down" src={down} className={styles.token} />
      </div>
    );
  };

  const onInputBlur = () => {
    if (inputVal === "") return;
    setInputVal(new BigNumber(inputVal).toFormat());
  };

  const onInputFocus = () => {
    if (inputVal === "") return;
    setInputVal(inputVal.replace(/,/gi, ""));
  };

  useEffect(() => {
    if (balance === "" && inputVal !== "") {
      setIsErr(true);
    } else if (balance === "" && inputVal === "") {
      setIsErr(false);
    } else if (balance !== "" && inputVal === "") {
      setIsErr(false);
    } else {
      if (
        new BigNumber(balance).lt(new BigNumber(inputVal.replace(/,/gi, "")))
      ) {
        setIsErr(true);
      } else {
        setIsErr(false);
      }
    }
  }, [balance, inputVal]);

  return (
    <div className={cs(isErr && styles.err, styles.baseInput)}>
      <section className={styles.baseInputSection}>
        <Select />
        <div className={styles.inputSec}>
          {!isLoading ? (
            <input
              placeholder="0"
              value={inputVal}
              className={cs(styles.input, isErr && styles.errText)}
              onChange={(e) => {
                const end = e.target.value.substring(
                  e.target.value.length - 1,
                  e.target.value.length
                );
                // 最后输入的值不能是非数字
                if (end !== ".") {
                  if (isNaN(end as any)) return;
                } else {
                  if (
                    e.target.value.length > inputVal.length &&
                    inputVal.includes(".")
                  )
                    return;
                }
                setInputVal(e.target.value);
                // 错误判断
                if (balance !== "") {
                  if (
                    new BigNumber(e.target.value.replace(/,/gi, "")).gt(
                      new BigNumber(balance)
                    )
                  ) {
                    setIsErr(true);
                  } else {
                    setIsErr(false);
                  }
                } else {
                  if (e.target.value === "") return;
                  setIsErr(true);
                }
              }}
              onBlur={() => onInputBlur()}
              onFocus={() => onInputFocus()}
            />
          ) : (
            <img alt="loading" src={loading} className={styles.loading} />
          )}
        </div>
      </section>
      {/* balance */}
      <section className={styles.balanceSection}>
        <div className={styles.balance}>
          <span className={styles.text}>
            Balance: {balance !== "" ? new BigNumber(balance).toFormat() : "-"}
          </span>
          {((balance !== "" &&
            new BigNumber(balance).gt(
              new BigNumber(inputVal.replace(/,/gi, ""))
            )) ||
            (balance !== "" && inputVal === "")) && (
            <span className={styles.max} onClick={() => setInputVal(balance)}>
              MAX
            </span>
          )}
        </div>
        <div className={styles.result}>
          {inputVal &&
            `~$${new BigNumber(inputVal.replace(/,/gi, ""))
              .times(1.1)
              .toFormat(2)}`}
        </div>
      </section>
    </div>
  );
};

export default BaseInput;
