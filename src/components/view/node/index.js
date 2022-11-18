import { Card, Col, Row, Spin, Table, Dropdown, Menu, Space } from "antd";
import ListView from "./ListNode";
import TableView from "./TableNode";
import StatisticView from "./StatisticNode";
import ChartView from "./ChartNode";
import { useSelector } from "react-redux";
import TableView2 from "./TableNode/TableView2";

const Node = ({ tabledetail, filter, handleRowClick, loading }) => {
  const {componentData} = useSelector(state => ({...state}))
  const view1Table = componentData.find((item) => item.slug === "test-view2")
  return (
    <>
      {loading ? (
        <Spin size="large" />
      ) : (
        <>
          <Row>
            {tabledetail?.view?.nodes.map((item) => {
              if (item.node.node_type == "table")
                return (
                  <Col
                    className={item.height && "same-height"}
                    span={item.size || 24}
                  >
                    <TableView
                      filter={filter}
                      tableDetail={item.node}
                      handleRowClick={handleRowClick}
                    />
                  </Col>
                );
              if (item.node.node_type == "statistic")
                return (
                  <Col
                    className={item.height && "same-height"}
                    span={item.size || 24}
                  >
                    <StatisticView
                      filter={filter}
                      statisticDetail={item.node}
                      handleRowClick={handleRowClick}
                    />
                  </Col>
                );
              if (item.node.node_type == "chart")
                return (
                  <Col
                    className={item.height && "same-height"}
                    span={item.size || 24}
                  >
                    <ChartView
                      filter={filter}
                      chartDetail={item.node}
                      handleRowClick={handleRowClick}
                    />
                  </Col>
                );
              if (item.node.node_type == "list")
                return (
                  <Col
                    className={item.height && "same-height"}
                    span={item.size || 24}
                  >
                    <ListView
                      filter={filter}
                      listDetail={item.node}
                      handleRowClick={handleRowClick}
                    />
                  </Col>
                );
            })}
            {tabledetail?.slug === "test-view2" && componentData.length > 0 ? (
                <Col
                  span={24}
                >
                  <TableView2 actions={view1Table?.data.actions} columns={view1Table?.data.columns} results={view1Table?.data.result} handleRowClick={handleRowClick} />
                </Col>
              ) : (<></>)}
          </Row>
        </>
      )}
    </>
  );
};

export default Node;
