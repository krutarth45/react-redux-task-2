import { useEffect, useState } from "react";
import { Card, List } from "antd";
import { getListDetails } from "../../../../services/api";
import { useDispatch } from "react-redux";
import { fetchComponentData } from "../../../../actions/tableActions";

const ListView = ({ listDetail }) => {
  const dispatch = useDispatch();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchTableData = async () => {
      if (!listDetail) return;
      const res = await getListDetails();
      if (res) {
        dispatch(fetchComponentData({ slug: listDetail.slug, data: res }));
        setResults(res);
      }
    };
    fetchTableData();
  }, [listDetail]);

  return (
    <>
      <Card className="full-height" title={listDetail.name}>
        <List
          style={{ textAlign: "left" }}
          itemLayout="horizontal"
          dataSource={results}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </Card>
    </>
  );
};

export default ListView;
