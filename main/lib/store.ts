import Store from "electron-store";

const store = new Store({
  defaults: {
    collections: [],
    gradients: [],
    palettes: [],
    uploads: [],
  },
  schema: {
    collections: {
      type: "array",
    },

    gradients: {
      type: "array",
    },

    palettes: {
      type: "array",
    },

    uploads: {
      type: "array",
    },
  },
});

export default store;
