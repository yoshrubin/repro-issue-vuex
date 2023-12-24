export const state = () => ({
  count: 0,
});

export const getters = {
  getCount: (state) => {
    console.log("getCount");
    return state.count;
  },
};
