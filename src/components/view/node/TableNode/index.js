import { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import {
  Menu,
  Dropdown,
  Space,
  Card,
  Table,
} from "antd";
import { useDispatch } from "react-redux";
import { getTableDetails } from "../../../../services/api";
import {
  fetchComponentData,
  setView,
} from "../../../../actions/tableActions";

const TableView = ({ tableDetail, filter, handleRowClick }) => {
  const dispatch = useDispatch();
  const [results, setResults] = useState([]);
  const [columns, setColumns] = useState([]);
  const [actions, setActions] = useState([]);

  useEffect(() => {
    const fetchTableData = async () => {
      if (!tableDetail) return;
      const res = await getTableDetails(tableDetail.slug, filter);
      if (res) {
        dispatch(fetchComponentData({ slug: tableDetail.slug, data: res }));
        setColumns(res.columns);
        setResults(res.result);
        setActions(res.actions);
      }
    };
    fetchTableData();
  }, [tableDetail]);

  function getActions(actionType, actions) {
    return actions.filter((action) => {
      if (action.location === actionType) {
        return action;
      }
      return null;
    });
  }

  function onClickAction(action, record) {
    if (action?.view?.slug) {
      dispatch(setView(action.view.slug));
    }
    if (handleRowClick) {
      handleRowClick(record);
    }
  }

  return (
    <>
      <Card className="table-card" title={tableDetail.name}>
        <Table
          columns={[
            ...columns
              .filter((item) => item.type !== "hidden")
              .map((item) => {
                return {
                  ...item,
                };
              }),
            getActions("per_row", actions).length
              ? {
                  key: "action",
                  title: "Action",
                  fixed: "right",
                  width: 75,
                  render: (record) => (
                    <Dropdown
                      overlay={
                        <Menu>
                          {getActions("per_row", actions).map((item) => (
                            <Menu.Item
                              key={item.id}
                              onClick={() => onClickAction(item, record)}
                            >
                              {item.name}
                            </Menu.Item>
                          ))}
                        </Menu>
                      }
                    >
                      <Space>
                        Actions
                        <DownOutlined />
                      </Space>
                    </Dropdown>
                  ),
                }
              : {},
          ]}
          dataSource={results}
        />
      </Card>
    </>
  );
};

export default TableView;
