import { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import {
  Input,
  Menu,
  Dropdown,
  Space,
  Form,
  Button,
  message,
  Divider,
  Card,
  Table,
} from "antd";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTableDetails } from "../../../services/api";
import {
  fetchComponentData,
  setError,
  setLoading,
} from "../../../actions/tableActions";

const BasicTable = ({ tableDetail, title }) => {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [results, setResults] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (tableDetail) {
      setColumns(tableDetail?.columns);
      setResults(tableDetail?.result);
    }
  }, [tableDetail]);

  return (
    <>
      <Card title={title}>
        <Table columns={columns} dataSource={results} />
      </Card>
    </>
  );
};

export default BasicTable;
