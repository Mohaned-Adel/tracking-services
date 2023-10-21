import React from "react";
import TableHead from "./TableHead/TableHead";
import TableRow from "./TableRow/TableRow";
import "./DataTable.scss";

export default function DataTable({
  tableRows = [],
  tableColumns = [],
  mapKey,
}) {
  return (
    <div className="data-table-container">
      <div className="table-responsive">
        <table className="card-table records-table" cellSpacing="0">
          <TableHead tableColumns={tableColumns} />
          <tbody>
            {tableRows &&
              tableRows.map((tableRow) => {
                return (
                  <TableRow
                    key={tableRow[mapKey]}
                    tableRow={tableRow}
                    tableColumns={tableColumns}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
