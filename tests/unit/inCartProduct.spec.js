import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import InCartProduct from "../../src/components/InCartProduct.vue";

describe("Cart.vue elements render with no cartItems", () => {
  let store;

  beforeEach(() => {
    store = createStore({
      state: {
        inCart: {},
        productsMulti: [{}],
      },
      actions: {
        getMultiProducts: jest.fn(),
      },
      getters: {
        cartItems: () => {
          return {};
        },
        multiProducts: () => {
          return [{}];
        },
      },
    });
  });

  it("renders h1 title", async () => {
    const wrapper = mount(Cart, {
      global: {
        plugins: [store],
        props: {
          productDets: {
            brand: "Apple",
            category: "Electronics",
            countInStock: 7,
            createdAt: "2021-06-14T17:55:34.417Z",
            description:
              "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
            image: "/images/phone.jpg",
            name: "iPhone 11 Pro 256GB Memory",
            numReviews: 8,
            price: 599.99,
            rating: 4,
            reviews: [],
            updatedAt: "2021-06-14T17:55:34.417Z",
            user: "60c79816bf562c195c74c4af",
            __v: 0,
            _id: "60c79816bf562c195c74c4b3",
          },
          productQty: 3,
        },
        stubs: {
          "router-link": {
            template: '<p data-test="stub-router">router placeholder</p>',
          },
        },
      },
    });

    const imageEl = wrapper.get('[data-test="image"]');
    expect();
  });
});
