import React, { useState, useContext } from "react";
import "../styles/filterStyles.css";
import { Context } from "../Store";
import { filterOkrData } from "../utils/util";
import PropTypes from "prop-types";

function FilterComponent({ categoryList }) {
  //appending all in category list
  let categories = [...["All"], ...categoryList];
  const [selectCategory, setCategory] = useState(categories[0]);
  const [state, dispatch] = useContext(Context);

  const onChangeFilter = (item) => {
    setCategory(item);
    if (item === "All") {
      dispatch({ type: "UPDATE_OKRS", payload: state.okrsClone });
    } else {
      dispatch({
        type: "UPDATE_OKRS",
        payload: filterOkrData(state.okrsClone, item),
      });
    }
  };
  return (
    <div className={"filter-container"}>
      <div className={"filter-box"}>
        <div className={"label"}>{"Filter By Category"}</div>
        <ul>
          {categories.map((item) => (
            <li
              onClick={() => onChangeFilter(item)}
              className={item === selectCategory ? "active" : ""}
              key={item}
            >
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
FilterComponent.propTypes = {
  categoryList: PropTypes.array.isRequired,
};
export default FilterComponent;