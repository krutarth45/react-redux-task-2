import { DownOutlined } from "@ant-design/icons";
import {
  Menu,
  Dropdown,
  Space,
  Card,
  Table,
} from "antd";

const TableView2 = ({ actions, columns, results, handleRowClick }) => {
  function getActions(actionType, actions) {
    return actions.filter((action) => {
      if (action.location === actionType) {
        return action;
      }
      return null;
    });
  }

  function onClickAction(record) {
    if (handleRowClick) {
      handleRowClick(record);
    }
  }

  return (
    <>
      <Card className="table-card" title="Test View1">
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
                              onClick={() => onClickAction(record)}
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

export default TableView2;
