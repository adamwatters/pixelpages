import { types } from "mobx-state-tree";

const Pixel = types
  .model({
    color: types.string,
    x: types.number,
    y: types.number
  })
  .actions(self => ({
    setColor(newColor) {
      self.name = newColor;
    }
  }));

export default Pixel;
