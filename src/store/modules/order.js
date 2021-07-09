const moduleOrder = {
  state: () => ({
    recipientDets: {},
  }),
  mutations: {
    setDetail: (state, { key, val }) => {
      state.recipientDets[key] = val;
    },
    setDetails: (state, obj) => {
      console.log(obj);
      state.recipientDets = obj;
    },
  },
  getters: {
    getRecipientDets: (state) => state.recipientDets,
  },
};

export default moduleOrder;
