import { useQuery } from "@tanstack/react-query";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { count } from "console";

interface CountryInterface {
  updated: number;
  country: string;
  countryInfo: {
    _id: number;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    flag: string;
  };
  cases: 218262;
  todayCases: 0;
  deaths: 7905;
  todayDeaths: 0;
  recovered: 194819;
  todayRecovered: 0;
  active: 15538;
  critical: 45;
  casesPerOneMillion: 5356;
  deathsPerOneMillion: 194;
  tests: 1245531;
  testsPerOneMillion: 30562;
  population: 40754388;
  continent: "Asia";
  oneCasePerPeople: 187;
  oneDeathPerPeople: 5156;
  oneTestPerPeople: 33;
  activePerOneMillion: 381.26;
  recoveredPerOneMillion: 4780.32;
  criticalPerOneMillion: 1.1;
}

const LeafLet = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["covidData"],
    queryFn: () =>
      fetch("https://disease.sh/v3/covid-19/countries").then((res) =>
        res.json()
      ),
  });
  if (isLoading) return <>Loading...</>;
  console.log(data);
  if (error) return <>An error has occurred: {error || ""}</>;

  return (
    <div>
      <MapContainer center={[1, 1]} minZoom={2} zoom={2} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map((country: CountryInterface) => (
          <Marker
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            <Popup>
              <img src={country.countryInfo.flag} alt="flag" className="w-9" />{" "}
              <span className="text-xl">
                {country.country} <br />
              </span>
              active cases: {country.active} <br />
              total cases: {country.cases} <br />
              deaths: {country.deaths} <br />
              recovered: {country.recovered} <br />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default LeafLet;
