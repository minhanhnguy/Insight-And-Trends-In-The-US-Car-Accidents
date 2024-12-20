"use client";
import Head from "next/head";
import { useState, useEffect } from "react";
import BarChart from "./chartsTemplate/BarChart";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/data/AccidentsByStatesFrom2016To2023.json");
      const jsonData = await res.json();
      setData(jsonData);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Head>
        <title>Insight And Trends In The US Car Accidents</title>
      </Head>
      <p>Hello!!!</p>
      <div id="data-container">{data && <BarChart data={data} />}</div>
    </div>
  );
}
