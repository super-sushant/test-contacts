import { useQuery } from "@tanstack/react-query";
import ReactApexChart from "react-apexcharts";
import React from "react";
import { ApexOptions } from "apexcharts";

const Maps = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all").then(
        (res) => res.json()
      ),
  });
  if (isLoading) return <>Loading...</>;

  if (error) return <>An error has occurred!!</>;
  const dataArr = data.cases
    ? Object.values(data.cases).map((i, ind) => Number(i))
    : [];

  const seriesData: (number | null)[] = data.cases
    ? dataArr.map((datItem, index) => datItem - (dataArr[index - 1] || 0))
    : [];
  const series: ApexAxisChartSeries = [
    {
      name: "Desktops",
      data: seriesData,
    },
  ];
  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      width: 2000,
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
      curve: "straight",
    },
    title: {
      text: "Covid Cases Trends by Dates",
      align: "left",
    },

    grid: {
      row: {
        colors: ["#b6b6b6", "#d4d4d4"], // takes an array which will be repeated on columns
        opacity: 1,
      },
    },
    xaxis: {
      //   max: 20,
      type: "datetime",
      //   range: 10,
      categories: Object.keys(data.cases),
      // .filter(
      // (item, index) => !(Number(index) % 100)
      //   ),
    },
  };

  return (
    <>
      <div style={{ width: "100%", background: "white" }}>
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={350}
        />
      </div>
    </>
  );
};

export default Maps;
