/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, June, 2024
|-----------------------------------------
*/
"use client";
import { useState } from "react";
import btc_jan_2022 from "./btc-data/btc-jan-2022.json";
import {
  btc2010,
  btc2011,
  btc2012,
  btc2013,
  btc2014,
  btc2015,
  btc2016,
  btc2017,
  btc2018,
  btc2019,
  btc2020,
  btc2021,
  btc2022,
  btc2023,
} from "./btc-data/json-all-field";
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const bullYears = [
  "2012",
  "2013",

  "2016",
  "2017",

  "2020",
  "2021",

  "2024",
  "2025",

  "2028",
  "2029",
];
const years = Array.from({ length: 21 }, (_, i) => 2010 + i + "");

const exampleData = [
  { id: 1, title: "Today Dump From Previous Day High", name: "TDFPDH" },
  { id: 2, title: "Today Pump From Previous Day Low", name: "TPFPDL" },
  { id: 3, title: "Future Dump From Today Day High", name: "FDFPDH" },
  { id: 4, title: "Future Pump From Today Day Low", name: "FPFPDL" },
];

const returnNumber = (arr) => {
  let result = arr || 0;
  if (typeof arr === "string") {
    result = parseFloat(arr);
  }
  return result;
};

const Page = () => {
  const [currYear, setCurrYear] = useState(years[0]);
  const [currMonth, setCurrMonth] = useState(months[0]);
  const [currData, setCurrData] = useState([
    ...btc2010,
    ...btc2011,
    ...btc2012,
    ...btc2013,
    ...btc2014,
    ...btc2015,
    ...btc2016,
    ...btc2017,
    ...btc2018,
    ...btc2019,
    ...btc2020,
    ...btc2021,
    ...btc2022,
    ...btc2023,
  ]);

  console.log("all data : ", {
    btc2010,
    btc2011,
    btc2012,
    btc2013,
    btc2014,
    btc2015,
    btc2016,
    btc2017,
    btc2018,
    btc2019,
    btc2020,
    btc2021,
    btc2022,
    btc2023,
  });

  const getAverageData = (name, arr) => {
    if (name === "TDFPDH") {
      return (
        arr.reduce((acc, curr) => {
          return acc + (curr.today_dump_from_previous_day_high || 0);
        }, 0) / arr.length
      ).toFixed(2);
    }
    if (name === "TPFPDL") {
      return (
        arr.reduce((acc, curr) => {
          return acc + (curr.today_pump_from_previous_day_low || 0);
        }, 0) / arr.length
      ).toFixed(2);
    }
    if (name === "FDFPDH") {
      return (
        arr.reduce((acc, curr) => {
          return acc + (curr.future_dump_from_today_day_high || 0);
        }, 0) / arr.length
      ).toFixed(2);
    }
    if (name === "FPFPDL") {
      return (
        arr.reduce((acc, curr) => {
          return acc + (curr.future_pump_from_today_day_low || 0);
        }, 0) / arr.length
      ).toFixed(2);
    }
  };
  const getHitCount = (name, arr, averageNum) => {
    if (name === "TDFPDH") {
      return arr.filter(
        (curr) => curr.today_dump_from_previous_day_high >= averageNum
      ).length;
    }
    if (name === "TPFPDL") {
      return arr.filter(
        (curr) => curr.today_pump_from_previous_day_low >= averageNum
      ).length;
    }
    if (name === "FDFPDH") {
      return arr.filter(
        (curr) => curr.future_dump_from_today_day_high >= averageNum
      ).length;
    }
    if (name === "FPFPDL") {
      return arr.filter(
        (curr) => curr.future_pump_from_today_day_low >= averageNum
      ).length;
    }
  };

  const handleCurrMonthYear = (year, month) => {
    setCurrYear(year);
    setCurrMonth(month);
    console.log(" fn handleCurrMonthYear : ", year, month);
  };
  return (
    <main className="border-t border-white bg-slate-800 text-white flex items-center flex-col justify-center w-full gap-4 min-h-screen p-4">
      <div className="w-full flex items-center justify-between border border-white p-4">
        {years.map((year) => (
          <p
            key={year}
            onClick={() => handleCurrMonthYear(year, currMonth)}
            className={`${year === currYear && " underline "} 
            ${
              bullYears.includes(year + "")
                ? " text-green-600 "
                : " text-rose-600 "
            }
              hover:underline cursor-pointer font-bold`}
          >
            {year}
          </p>
        ))}
      </div>
      <div className="w-full flex items-center justify-between border border-white p-4">
        {months.map((month, idx) => (
          <p key={month} onClick={() => handleCurrMonthYear(currYear, month)}>
            <strong
              className={`${
                month === currMonth && " underline "
              } hover:underline cursor-pointer`}
            >
              {month}
            </strong>
            <small className="pl-2">({idx + 1})</small>
          </p>
        ))}
      </div>
      <div className="w-full flex justify-between">
        <div className="max-w-[300px] flex flex-col border-0">
          {exampleData.map((curr) => (
            <div
              key={curr.id}
              className="border p-4 text-white min-w-[300px] flex flex-col"
            >
              <strong>{curr.name} </strong>
              <small>{curr.title}</small>
            </div>
          ))}
        </div>
        <div className="border p-4 text-white w-full flex-col flex gap-4">
          <div className="text-xl w-full">
            <p className="border-b">
              {currMonth}{" "}
              <small className="text-xs">
                (
                {
                  currData
                    .filter((curr) => curr.Date.includes(currYear))
                    .filter((curr) => curr.Date.includes(currMonth)).length
                }
                )
              </small>
              , {currYear}
            </p>
          </div>
          <div className="w-full flex gap-4">
            {/* All Data */}
            <div className="p-4 w-full border rounded-lg">
              <p className="w-full flex items-center justify-start gap-2">
                <span className="border-b">
                  Average
                  <small className="text-xs">({currData.length} day)</small>
                </span>
              </p>
              {["TDFPDH", "TPFPDL", "FDFPDH", "FPFPDL"].map((curr) => (
                <div
                  key={curr}
                  className={`mt-2 w-full items-center gap-2 flex  ${
                    ["TDFPDH", "FDFPDH"].includes(curr)
                      ? " text-rose-400 "
                      : " text-green-400 "
                  }`}
                >
                  <div
                    className={`w-[100px] flex items-center justify-between`}
                  >
                    <span>{curr}</span>
                    <span> : </span>
                  </div>
                  {getAverageData(curr, currData)}
                  <small className="text-xs pl-1">
                    (
                    {getHitCount(
                      curr,
                      currData,
                      getAverageData(curr, currData)
                    )}
                    )
                  </small>
                </div>
              ))}
            </div>
            {/* Year */}
            <div className="p-4 w-full border rounded-lg">
              <p className="w-full flex items-center justify-start gap-2">
                <span className="border-b">
                  Average
                  <small className="text-xs">
                    (
                    {
                      currData.filter((curr) => curr.Date.includes(currYear))
                        .length
                    }{" "}
                    day)
                  </small>
                </span>
              </p>
              {["TDFPDH", "TPFPDL", "FDFPDH", "FPFPDL"].map((curr) => (
                <div
                  key={curr}
                  className={`mt-2 w-full items-center gap-2 flex  ${
                    ["TDFPDH", "FDFPDH"].includes(curr)
                      ? " text-rose-400 "
                      : " text-green-400 "
                  }`}
                >
                  <div className="w-[100px] flex items-center justify-between">
                    <span>{curr}</span>
                    <span> : </span>
                  </div>
                  {getAverageData(
                    curr,
                    currData.filter((curr) => curr.Date.includes(currYear))
                  )}
                  <small className="text-xs pl-1">
                    (
                    {getHitCount(
                      curr,
                      currData.filter((curr) => curr.Date.includes(currYear)),
                      getAverageData(
                        curr,
                        currData.filter((curr) => curr.Date.includes(currYear))
                      )
                    )}
                    )
                  </small>
                </div>
              ))}
            </div>
            {/* Month */}
            <div className="p-4 w-full border rounded-lg">
              <p className="w-full flex items-center justify-start gap-2">
                <span className="border-b">
                  Average
                  <small className="text-xs">
                    (
                    {
                      currData
                        .filter((curr) => curr.Date.includes(currYear))
                        .filter((curr) => curr.Date.includes(currMonth)).length
                    }{" "}
                    day)
                  </small>
                </span>
              </p>
              {["TDFPDH", "TPFPDL", "FDFPDH", "FPFPDL"].map((curr) => (
                <div
                  key={curr}
                  className={`mt-2 w-full items-center gap-2 flex  ${
                    ["TDFPDH", "FDFPDH"].includes(curr)
                      ? " text-rose-400 "
                      : " text-green-400 "
                  }`}
                >
                  <div className="w-[100px] flex items-center justify-between">
                    <span>{curr}</span>
                    <span> : </span>
                  </div>
                  {getAverageData(
                    curr,
                    currData
                      .filter((curr) => curr.Date.includes(currYear))
                      .filter((curr) => curr.Date.includes(currMonth))
                  )}
                  <small className="text-xs pl-1">
                    (
                    {getHitCount(
                      curr,
                      currData
                        .filter((curr) => curr.Date.includes(currYear))
                        .filter((curr) => curr.Date.includes(currMonth)),
                      getAverageData(
                        curr,
                        currData
                          .filter((curr) => curr.Date.includes(currYear))
                          .filter((curr) => curr.Date.includes(currMonth))
                      )
                    )}
                    )
                  </small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col">
        <div className="flex w-full gap-2 items-center justify-between border p-4 hover:bg-slate-900">
          <div className="w-full font-bold">Date</div>
          <div className="w-full font-bold">Price</div>
          <div className="w-full font-bold">Open</div>
          <div className="w-full font-bold">High</div>
          <div className="w-full font-bold">Low</div>
          <div className="w-full font-bold">Vol</div>
          <div className="w-full font-bold">Change</div>
          <div className="w-full font-bold">TDFPDH</div>
          <div className="w-full font-bold">TPFPDL</div>
          <div className="w-full font-bold">FDFPDH</div>
          <div className="w-full font-bold">FPFPDL</div>
        </div>
        {currData
          .sort((a, b) => {
            const dateA = new Date(a.Date);
            const dateB = new Date(b.Date);
            return dateA - dateB;
          })
          .filter((curr) => curr.Date.includes(currYear))
          .filter((curr) => curr.Date.includes(currMonth))
          .map((curr) => (
            <div
              key={curr.Date}
              className="flex w-full gap-2 items-center justify-between border p-4 hover:bg-slate-900"
            >
              <div className="w-full">
                {curr?.Date.split(",")[0].replaceAll("Jan", "")}
              </div>
              <div className="w-full">{curr?.Price}</div>
              <div className="w-full">{curr?.Open}</div>
              <div className="w-full">{curr?.High}</div>
              <div className="w-full">{curr?.Low}</div>
              <div className="w-full">{curr?.["Vol."]}</div>
              <div className="w-full">{curr?.["Change %"]}</div>
              <div className="w-full">
                {curr?.today_dump_from_previous_day_high}
              </div>
              <div className="w-full">
                {curr?.today_pump_from_previous_day_low}
              </div>
              <div className="w-full">
                {curr?.future_dump_from_today_day_high}
              </div>
              <div className="w-full">
                {curr?.future_pump_from_today_day_low}
              </div>
              {/* <div className="w-full">{curr?.futurePump_H_from_today_low}</div>
              <div className="w-full">
                {curr?.todayPump_H__from_previousD_Low}
              </div>  */}
            </div>
          ))}
      </div>
    </main>
  );
};
export default Page;
