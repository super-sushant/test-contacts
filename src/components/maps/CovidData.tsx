import { useQuery } from "@tanstack/react-query";
import React from "react";

interface CovidDataInterface {
  updated: number;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
  affectedCountries: number;
}

const CovidData = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["allCovidData"],
    queryFn: () =>
      fetch("https://disease.sh/v3/covid-19/all").then((res) => res.json()),
  });
  if (isLoading) return <>Loading...</>;

  if (error) return <>An error has occurred: {error || ""}</>;
  const newData: CovidDataInterface = data;
  return (
    <div>
      <p className="text-4xl m-8">Covid Statistics</p>
      <p>Total Cases: {newData.cases} </p>
      <p>Total Cases Active: {newData.active} </p>
      <p>Total Death: {newData.deaths} </p>
      <p>Total Recovered: {newData.recovered} </p>
      <p>Total Tests: {newData.tests} </p>
      <p>Countries Affected: {newData.affectedCountries} </p>
    </div>
  );
};

export default CovidData;
