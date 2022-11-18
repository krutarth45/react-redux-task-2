import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification, Space, Spin, Tooltip } from "antd";
import { getViewData } from "../../services/api";
import {
  fetchSelectedRecord,
  setError,
  setLoading,
} from "../../actions/tableActions";
import { useHistory } from "react-router-dom";
import { View1Slug } from "../../data";
import Table from "../Table";
import BreadCrumbMenu from "../BreadCrumb";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const loading = useSelector((state) => state.loading);
  const [viewDetail, setViewDetail] = useState({});

  useEffect(() => {
    const fetchTableList = async () => {
      dispatch(setLoading(true));
      const res = await getViewData(View1Slug);
      if (res) {
        setViewDetail(res);
        dispatch(setLoading(false));
      } else {
        notification.error({ message: "Something went wrong!" });
        dispatch(setError(true));
      }
    };
    fetchTableList();
  }, []);

  const handleRowClick = (record) => {
    dispatch(fetchSelectedRecord(record));
    history.push(`/details/${record.id}`);
  };

  return (
    <div className="container">
      <BreadCrumbMenu
        list={[
          {
            title: "View1",
            link: "/",
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
        />
      )}
    </div>
  );
};

export default Home;
