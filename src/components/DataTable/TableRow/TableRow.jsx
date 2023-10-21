import React from "react";

import "./TableRow.scss";
import { useTranslation } from "react-i18next";

export default function TableRow({ tableRow, tableColumns }) {
  const { t } = useTranslation();
  let columns = tableColumns;

  let rowClick = tableRow.rowClick ? tableRow.rowClick : () => {};
  return (
    <tr
      className="table-row"
      onClick={(e) => {
        rowClick(e);
      }}
    >
      {tableRow &&
        columns.map((dataCell, i) => {
          let cellKey = columns[i];
          return (
            <td
              onClick={(e) => {
                if (cellKey === t(`tableOptions`)) {
                  e.stopPropagation();
                }
              }}
              className="table-data-cell"
              data-tablecell={`${cellKey}`}
              key={`${cellKey}-${i}`}
            >
              <span>{tableRow[dataCell]}</span>
            </td>
          );
        })}
    </tr>
  );
}
