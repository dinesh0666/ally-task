import React, { useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../Store";
import OkrListComponent from "../components/OkrListComponent";
import FilterComponent from "../components/FilterComponent";
import LoadingComponent from "../components/LoadingComponent";
import { getCategoryList, formatOkrData } from "../utils/util";
import "../styles/okrStyles.css";
const OkrContainer = () => {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    axios
      .get("https://okrcentral.github.io/sample-okrs/db.json")
      .then((response) => {
        const formatedData = formatOkrData(response.data.data);
        dispatch({ type: "SET_OKRS", payload: formatedData });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: "SET_ERROR", payload: error });
      });
  }, [dispatch]);

  let okrs = <LoadingComponent />;
  if (state.error) {
    okrs = (
      <div id="error-main">
        <div class="error-view">
          <h1>{state.error}</h1>
        </div>
      </div>
    );
  }

  if (!state.error && state.okrs && state.okrs.length !== 0) {
    return (
      <>
        <div className={"okr-container"}>
          <FilterComponent categoryList={getCategoryList(state.okrsClone)} />
          <OkrListComponent okrData={state.okrs} />
        </div>
      </>
    );
  }

  return okrs;
};

export default OkrContainer;