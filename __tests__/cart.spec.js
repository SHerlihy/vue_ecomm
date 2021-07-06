import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Cart from "../src/views/Cart.vue";

const localVue = createLocalVue();

localVue.useContext(Vuex);

describe("Cart.vue", () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      getMultiProducts: jest.fn(),
      addToCart: jest.fn(),
      subFromCart: jest.fn(),
      setCartAmount: jest.fn(),
      removeProductFromCart: jest.fn(),
      emptyCart: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
    });
  });

  it('dispatches "getMultiProducts" on mount', () => {
    shallowMount(Cart, { store, localVue });
    expect(actions.getMultiProducts).toHaveBeenCalled();
  });
});
