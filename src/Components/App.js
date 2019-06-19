import React from "react";
import { observer } from "mobx-react";

const App = ({ store }) => {
  return (
    <div style={{ width: 520, display: "flex", flexWrap: "wrap" }}>
      {store.pixels.map((space, index) => {
        return (
          <div
            key={index}
            style={{ width: 50, height: 50, border: "1px solid black" }}
          />
        );
      })}
    </div>
  );
};

export default observer(App);
