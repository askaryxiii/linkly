import React from "react";

const TableHead = ({ text, width }) => {
  return (
    <th
      scope="col"
      className={`${width} font-bold text-sm text-paragraphGrey py-3`}>
      {text}
    </th>
  );
};

export default TableHead;
