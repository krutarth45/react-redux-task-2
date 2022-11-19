import React, { useEffect } from "react";
import { Breadcrumb } from "antd";
import { setView } from "../../actions/tableActions";
import { useDispatch, useSelector } from "react-redux";

const BreadCrumbMenu = (props) => {
  const dispatch = useDispatch();
  const views = useSelector((state) => state.views);

  const handleNavigation = (breadcrumb) => {
    if(breadcrumb === views[views.length - 1]) return;
    dispatch(setView(breadcrumb));
  };

  return (
    <Breadcrumb style={{ margin: "10px 0px" }}>
      {views?.map((listItem, i) => (
        <Breadcrumb.Item onClick={() => 
            handleNavigation(listItem)
          } key={i}>
          <a href={"#"}>{listItem}</a>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default BreadCrumbMenu;
