import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification, Space, Spin, Tooltip } from "antd";
import { getViewData } from "../../services/api";
import {
  fetchSelectedRecord,
  setError,
  setLoading,
  setView,
} from "../../actions/tableActions";
import { useHistory } from "react-router-dom";
import { View1Slug, View2Slug } from "../../data";
import Table from "../Table";
import BreadCrumbMenu from "../BreadCrumb";
import Node from "./node";

const View = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const selectedRow = useSelector((state) => state.selectedRow);
  const views = useSelector((state) => state.views);
  const loading = useSelector((state) => state.loading);
  const [viewDetail, setViewDetail] = useState({});
  const currentView = views?.length ? views[views.length - 1] : null;

  useEffect(() => {
    const fetchTableList = async () => {
      if (currentView === viewDetail?.slug) return;
      dispatch(setLoading(true));

      const res = await getViewData(currentView || View1Slug);
      if (res) {
        setViewDetail(res);
        dispatch(setLoading(false));
      } else {
        notification.error({ message: "Something went wrong!" });
        dispatch(setError(true));
      }
    };
    fetchTableList();
  }, [currentView]);

  useEffect(() => {
    if (viewDetail?.slug && viewDetail.slug !== currentView) {
      dispatch(setView(viewDetail.slug));
    }
  }, [viewDetail]);

  const handleRowClick = (record) => {
    dispatch(fetchSelectedRecord(record));
  };

  return (
    <div className="container">
      {viewDetail && <BreadCrumbMenu />}
      {loading ? (
        <Spin size="large" />
      ) : (
        <Node
          loading={loading}
          tabledetail={viewDetail}
          handleRowClick={handleRowClick}
        />
      )}
    </div>
  );
};

export default View;
