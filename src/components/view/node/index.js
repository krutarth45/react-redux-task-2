import { Col, Row, Spin } from "antd";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import ListView from "./ListNode";
import TableView from "./TableNode";
import StatisticView from "./StatisticNode";
import ChartView from "./ChartNode";

const Node = ({ tabledetail, filter, handleRowClick, loading }) => {
  const params = useParams();
  const history = useHistory();

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
          </Row>
        </>
      )}
    </>
  );
};

export default Node;
