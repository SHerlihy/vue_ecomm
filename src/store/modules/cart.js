const moduleCart = {
  state: () => ({
    inCart: {},
  }),
  mutations: {
    addToCart: (state, { id, amount }) => {
      state.inCart[id] = (state.inCart[id] || 0) + amount;
    },
    subFromCart: (state, { id, amount }) => (state.inCart[id] || 0) - amount,
    removeProductFromCart: (state, id) => delete state.inCart[id],
    emptyCart: (state) => (state.inCart = {}),
    // emptyCart: (state) =>
    //   Object.keys(state.inCart).forEach((key) => delete state.inCart[key]),
  },
  getters: {
    cartItems: (state) => state.inCart,
  },
};

export default moduleCart;
