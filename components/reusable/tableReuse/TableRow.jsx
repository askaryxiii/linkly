import React from "react";
import { FaCopy } from "react-icons/fa6";

const TableRow = ({ originalUrl, shortUrl, status, creationDate }) => {
  return (
    <tr className="text-center bg-transparent/10 backdrop-blur-lg">
      <td className="py-3 flex items-center gap-4 justify-center">
        {shortUrl}
        <button className="p-2 bg-[#1C283F] rounded-full">
          <FaCopy className="text-paragraphGrey" />
        </button>
      </td>
      <td className="py-3 max-w-xs whitespace-nowrap overflow-clip text-ellipsis">
        {originalUrl}
      </td>
      <td className={`py-3 font-medium ${status ? "text-green-600" : "text-red-600"}`}>
        {status ? "Active" : "Inactive"}
      </td>
      <td className="py-3">{creationDate}</td>
    </tr>
  );
};

export default TableRow;
