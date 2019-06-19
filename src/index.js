import _ from "lodash";
import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import Store from "./Models/Store";

// const createGrid = (width, height) => {
//   return _.times(width * height, index => {
//     return { x: 0, y: 0 };
//   });
// };

const store = Store.create({
  pixels: []
});

store.addPixel("blue", 0, 0);
store.addPixel("red", 0, 0);
store.addPixel("orange", 0, 0);
store.addPixel("pink", 0, 0);

ReactDOM.render(<App store={store} />, document.getElementById("root"));
