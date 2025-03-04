"use client";
import React, { useEffect, useState } from "react";
import TableHead from "../reusable/tableReuse/TableHead";
import TableRow from "../reusable/tableReuse/TableRow";

const Shortentable = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const loadUrls = () => {
      const storedUrls = localStorage.getItem("urls");
      if (storedUrls) {
        setUrls(JSON.parse(storedUrls));
      } else {
        setUrls([]);
      }
    };
    loadUrls();

    const handleStorageChange = (e) => {
      if (e.key === "urls") {
        loadUrls();
      }
    };

    const handleLocalStorageUpdate = () => {
      loadUrls();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("localStorageUpdated", handleLocalStorageUpdate);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener(
        "localStorageUpdated",
        handleLocalStorageUpdate
      );
    };
  }, []);

  return (
    <div className="w-full flex justify-center">
      <table className="w-3/4 border-separate border-spacing-y-1">
        <thead className="bg-mainGrey">
          <tr>
            <TableHead text={"Shorten Link"} width={"w-4/12"} />
            <TableHead text={"Original Link"} width={"w-4/12"} />
            <TableHead text={"Status"} width={"w-2/12"} />
            <TableHead text={"Date"} width={"w-2/12"} />
          </tr>
        </thead>
        <tbody className="items-center text-paragraphGrey font-light text-base">
          {urls?.map(({ originalUrl, active, date, shortUrl }, index) => (
            <TableRow
              key={index}
              originalUrl={originalUrl}
              status={active}
              creationDate={date}
              shortUrl={shortUrl}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Shortentable;
