import React from "react";
import { useTranslation } from "react-i18next";

import "./TableHead.scss";
export default function TableHead({ tableColumns }) {
  const { t } = useTranslation();

  let tableHeaders = tableColumns;

  return (
    <thead className="table-header">
      <tr>
        {tableHeaders &&
          tableHeaders.map((tableHeader) => {
            return (
              <th key={tableHeader} className="table-header-data">
                {t(`${tableHeader}`)}
              </th>
            );
          })}
      </tr>
    </thead>
  );
}
