import React from "react";
import styles from "./style.module.scss";
import { ColorType, createChart } from "lightweight-charts";
import { useEffectOnce } from "react-use";

const Home: React.FC = () => {
  const getRandom = () => {
    const simulatedData = [];
    let lastClose = 1000;
    // 使用当前日期作为起点
    let currentDate = new Date("2020-01-01");
    for (let i = 0; i < 1000; i++) {
      const fluctuation = (Math.random() - 0.5) * 0.1;
      const open = lastClose;
      const close = open * (1 + fluctuation);
      const high = Math.max(open, close) * (1 + Math.random() * 0.05);
      const low = Math.min(open, close) * (1 - Math.random() * 0.05);

      // 将日期转换为YYYY-MM-DD格式
      const time = currentDate.toISOString().split("T")[0];

      simulatedData.push({ time, open, high, low, close });

      // 更新lastClose为当前的收盘价
      lastClose = close;

      // 将当前日期加1天
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return simulatedData;
  };
  useEffectOnce(() => {
    if (!document.getElementById("view")) return;
    const chartOptions = {
      layout: {
        textColor: "black",
        background: { type: ColorType.Solid, color: "white" },
      },
      grid: {
        vertLines: {
          color: "rgba(0, 0, 0, 0)", // 设置垂直网格线为透明
        },
        horzLines: {
          color: "rgba(0, 0, 0, 0)", // 设置水平网格线为透明
        },
      },
      timeScale: {
        borderColor: "rgba(0, 0, 0, 0)", // 设置边框颜色为透明
      },
      rightPriceScale: {
        borderColor: "rgba(255, 255, 255, 0)", // 假设背景是白色
      },
      padding: {
        right: 20,
        bottom: 20, // 增加底部内边距，为时间轴标签留出空间
      },
    };
    const chart = createChart(
      document.getElementById("view") as any,
      chartOptions
    );
    const candlestickSeries = chart.addCandlestickSeries({
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderVisible: false,
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
      priceFormat: {
        type: "custom",
        formatter: (price: number) => Math.round(price).toString(),
      },
    });
    candlestickSeries.setData(getRandom());

    chart.timeScale().fitContent();
  });
  return (
    <div className={styles.tradingView}>
      TrandingView
      <div id="view" className={styles.view} />
    </div>
  );
};

export default Home;
