import { useEffect, useState } from "react";
import { Card, List, Statistic } from "antd";
import { getStatisticDetails } from "../../../../services/api";
import { useDispatch } from "react-redux";
import { fetchComponentData } from "../../../../actions/tableActions";

const StatisticView = ({ statisticDetail }) => {
  const dispatch = useDispatch();
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchTableData = async () => {
      if (!statisticDetail) return;
      const res = await getStatisticDetails(statisticDetail.slug);
      console.log(res);
      if (res) {
        dispatch(fetchComponentData({ slug: statisticDetail.slug, data: res }));
        setResult(res);
      }
    };
    fetchTableData();
  }, [statisticDetail]);

  return (
    <>
      <Card className="statistic-card">
        <Statistic
          title={result.title}
          value={result.value}
          precision={2}
          className="statistical-node"
          valueStyle={{
            color: "#3f8600",
          }}
        />
      </Card>
    </>
  );
};

export default StatisticView;
