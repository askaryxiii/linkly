import React from "react";
import TableHead from "../reusable/tableReuse/TableHead";

const Shortentable = () => {
  return (
    <div className="w-full flex justify-center">
      <table className="w-3/4">
        <thead className=" bg-mainGrey">
          <tr>
            <TableHead text={"Shorten Link"} />
            <TableHead text={"Original Link"} />
            <TableHead text={"Status"} />
            <TableHead text={"Date"} />
          </tr>
        </thead>
        <tbody className="items-center">
          <tr className="text-center">
            <td className="">https://react-icons.github.io</td>
            <td className="">
              https://react-icons.github.io/react-icons/search/#q=link
            </td>
            <td className="">Active</td>
            <td className="">Oct - 10 -2023</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Shortentable;
