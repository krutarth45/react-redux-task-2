import {
  SET_ERROR,
  SET_LOADING,
  SET_SELECTED_ROW,
  SET_COMPONENT_DATA,
  SET_VIEW,
  GET_VIEW,
} from "../../actions/types";

const initialState = {
  componentData: [],
  views: [],
  selectedRow: null,
  loading: false,
  error: false,
  orders: [],
};

export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMPONENT_DATA:
      let tables = state.componentData;
      if (tables.find((table) => table.slug === action.payload.slug)) {
        tables = tables.map((table) => {
          if (table.slug === action.payload.slug) {
            return action.payload;
          } else {
            return table;
          }
        });
      } else {
        tables = [...tables, action.payload];
      }
      state = {
        ...state,
        componentData: tables,
        loading: false,
        error: false,
      };
      return state;

    case SET_SELECTED_ROW:
      state = { ...state, selectedRow: action.payload };
      return state;
    case SET_LOADING:
      state = { ...state, loading: action.payload };
      return state;
    case SET_ERROR:
      state = { ...state, error: action.payload };
      return state;
    case SET_VIEW:
      let views = state.views;

      const index = views.indexOf(action.payload);
      if (index === -1) {
        views = [...views, action.payload];
      } else {
        views = views.slice(0, index);
      }
      state = { ...state, views: views };

    default:
      return state;
  }
};
