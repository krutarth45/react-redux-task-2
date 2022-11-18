import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification, Spin } from "antd";
import { getViewData } from "../../services/api";
import { fetchSelectedRecord, setLoading } from "../../actions/tableActions";
import Table from "../Table";
import { View2Slug } from "../../data";
import BasicTable from "../Table/BasicTable";
import BreadCrumbMenu from "../BreadCrumb";
import { useParams } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const componentData = useSelector((state) => state.componentData);
  const loading = useSelector((state) => state.loading);
  const selectedRow = useSelector((state) => state.selectedRow);
  const [viewDetail, setViewDetail] = useState({});
  const [componentTables, setcomponentTables] = useState([]);
  const [componentTableRow, setcomponentTableRow] = useState();

  useEffect(() => {
    setcomponentTables(componentData);
    setcomponentTableRow(selectedRow);
    const fetchTable = async () => {
      dispatch(setLoading(true));
      const res = await getViewData(View2Slug);
      if (res) {
        setViewDetail(res);
        dispatch(setLoading(false));
      } else {
        notification.error({ message: "Something went wrong!" });
        dispatch(setError(true));
      }
    };
    fetchTable();
  }, []);

  const handleRowClick = (record) => {
    dispatch(fetchSelectedRecord(record));
  };

  return (
    <div className="container">
      <BreadCrumbMenu
        list={[
          {
            title: "View1",
            link: "/",
          },
          {
            title: "View2",
            link: "/details/" + params.id,
          },
        ]}
      />
      {loading ? (
        <Spin size="large" />
      ) : (
        <Table
          loading={loading}
          tabledetail={viewDetail}
          handleRowClick={handleRowClick}
          filter={selectedRow?.id}
        />
      )}
      {componentTables?.length &&
        componentTables
          .filter(
            (table) =>
              !viewDetail?.view?.tables
                .map((tb) => tb.table.slug)
                ?.includes(table.slug)
          )
          .map((table) => (
            <BasicTable tableDetail={table?.data} title={table.slug} />
          ))}
      {componentTableRow && (
        <BasicTable
          tableDetail={{
            result: [componentTableRow],
            columns: Object.keys(componentTableRow).map((key, i) => ({
              dataIndex: key,
              id: i,
              key: key,
              label: key,
              name: key,
              order: 10,
              title: key,
              type: "text",
            })),
          }}
          title={"Selected Row"}
        />
      )}
    </div>
  );
};

export default Products;
