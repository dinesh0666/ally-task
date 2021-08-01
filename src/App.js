import React from "react";
import Store from "./Store";
import OkrContainer from "./containers/OkrContainer";
import './styles/app.css'
function App() {
  return (
    <Store>
      <OkrContainer />
    </Store>
  );
}

export default App;
