import React from "react";

const TableHead = ({ text }) => {
  return (
    <th scope="col" className="font-bold text-sm text-paragraphGrey py-3">
      {text}
    </th>
  );
};

export default TableHead;
