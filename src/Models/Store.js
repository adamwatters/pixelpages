import { types } from "mobx-state-tree";
import Pixel from "./Pixel";

const Store = types
  .model({
    pixels: types.array(Pixel)
  })
  .actions(self => ({
    addPixel(color, x, y) {
      self.pixels.push(Pixel.create({ color, x, y }));
    }
  }));

export default Store;
