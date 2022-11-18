import {
  table1Data,
  table2Data,
  table3Data,
  TableSlug1,
  TableSlug2,
  TableSlug3,
  View1Slug,
  view1Data,
  View2Slug,
  view2Data,
  View3Slug,
  view3Data,
  View4Slug,
  view4Data,
  listdata,
  StatisticSlug1,
  statistic1Data,
  StatisticSlug2,
  statistic2Data,
  StatisticSlug3,
  statistic3Data,
  StatisticSlug4,
  statistic4Data,
  groupcolumnData,
} from "../data";
import http from "../http-common";

export const getViewData = (viewType) => {
  if (viewType === View1Slug) {
    return view1Data;
  } else if (viewType === View2Slug) {
    return view2Data;
  } else if (viewType === View3Slug) {
    return view3Data;
  } else if (viewType === View4Slug) {
    return view4Data;
  }
};

export const getTableDetails = (slugType, filter) => {
  if (slugType === TableSlug1) return table1Data;
  if (slugType === TableSlug2) return table2Data;
  if (slugType === TableSlug3) {
    if (filter) {
      return {
        ...table3Data,
        result: table3Data.result.filter((row) => row.id === filter),
      };
    } else {
      return table3Data;
    }
  }
};
export const getListDetails = () => {
  return listdata;
};

export const getChartDetails = () => {
  return groupcolumnData;
};

export const getStatisticDetails = (slug) => {
  if (slug === StatisticSlug1) {
    return statistic1Data;
  } else if (slug === StatisticSlug2) {
    return statistic2Data;
  } else if (slug === StatisticSlug3) {
    return statistic3Data;
  } else if (slug === StatisticSlug4) {
    return statistic4Data;
  }
};
