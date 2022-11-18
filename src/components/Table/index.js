import { Spin } from "antd";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import TableView from "./TableNode";

const Table = ({ tabledetail, filter, handleRowClick, loading }) => {
  const params = useParams();
  const history = useHistory();

  return (
    <>
      {loading ? (
        <Spin size="large" />
      ) : (
        <>
          {tabledetail?.view?.tables.map((item) => {
            return (
              <TableView
                filter={filter}
                tableDetail={item.table}
                handleRowClick={handleRowClick}
              />
            );
          })}
        </>
      )}
    </>
  );
};

export default Table;
