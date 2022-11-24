import { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import {
  Menu,
  Dropdown,
  Space,
  Card,
  Table,
  Input,
  Select,
  Button,
  Checkbox,
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
  const [filteredColumnsList, setFilteredColumnsList] = useState([]);
  const [apiFilters, setApiFilters] = useState(tableDetail.availableFilters.map(item => {
    return {
      key: item.name,
      value: ''
    }
  }))
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

  function handleMainFilterButton(checkedValues) {
    setFilteredColumnsList(checkedValues)
  }

  async function handleSelectFilter(e, name) {
    let array1 = apiFilters
    array1 = array1.map(item => {
      if (item.key === name) {
        return {
          key: item.key,
          value: e
        }
      }
      return item;
    })
    await setApiFilters(array1);
  }

  async function handleInputFilter(e, name) {
    let array1 = apiFilters
    array1 = array1.map(item => {
      if (item.key === name) {
        return {
          key: item.key,
          value: e.target.value
        }
      }
      return item;
    })
    await setApiFilters(array1);
  }
  
  async function handleSubmit() {
    let array2 = apiFilters.filter(item => {
      let index = filteredColumnsList.indexOf(item.key)
      if (index === -1) return false;
      return true;
    })
    console.log("array2", array2);
    await setApiFilters(array2);
    // Call the API here and send the filters to backend.
    await refreshFiltersAfterSubmit();
  }
  async function refreshFiltersAfterSubmit() {
    await setApiFilters(tableDetail.availableFilters.map(item => {
      return {
        key: item.name,
        value: ''
      }
    }))
  }
  console.log("API: ",apiFilters);
  console.log("filter", filteredColumnsList);

  return (
    <>
      <Card className="table-card" title={tableDetail.name}>
      <Dropdown
                      overlay={
                        <Checkbox.Group onChange={handleMainFilterButton} options={tableDetail.availableFilters.map((item) => {
                          return item.name
                        })} />
                      }
                    >
        <Button>Add Filters</Button>
      </Dropdown>
      
        {tableDetail?.availableFilters.map((item) => {
          if(item.type === "checkbox" && filteredColumnsList.includes(item.name)) {
            return (
              <>
                <Select
                  key={item.name} 
                  options={item.value}
                  style= {{
                    width: 120
                  }}
                  onChange={(e) => handleSelectFilter(e, item.name)}
                />
              </>
            )
          } else if (item.type === "textBox" && filteredColumnsList.includes(item.name)) {
            return (

            <>
            <Input defaultValue={item.value} onChange={(e) => handleInputFilter(e, item.name)}/>
            </>
            )
          }
        })}
        <Button onClick={handleSubmit}>Submit</Button>
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
