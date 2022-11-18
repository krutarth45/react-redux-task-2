import { useEffect, useState } from "react";
import { Card, List } from "antd";
import { getChartDetails } from "../../../../services/api";
import { useDispatch } from "react-redux";
import { fetchComponentData } from "../../../../actions/tableActions";
import { Column } from "@ant-design/plots";

const ChartView = ({ chartDetail }) => {
  const dispatch = useDispatch();
  const [results, setResults] = useState();

  useEffect(() => {
    const fetchTableData = async () => {
      if (!chartDetail) return;
      const res = await getChartDetails();
      console.log(res);
      if (res) {
        dispatch(fetchComponentData({ slug: chartDetail.slug, data: res }));
        setResults({ ...res.config, data: res.data });
      }
    };
    fetchTableData();
  }, [chartDetail]);

  return (
    <>
      <Card title={chartDetail.name}>{results && <Column {...results} />}</Card>
    </>
  );
};

export default ChartView;
