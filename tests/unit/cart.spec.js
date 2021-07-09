import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import Cart from "../../src/views/Cart.vue";

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
        stubs: {
          "router-link": {
            template: '<p data-test="stub-router">router placeholder</p>',
          },
        },
      },
    });
    await nextTick();
    expect(wrapper.findAll('[data-test="view-title"]')).toHaveLength(1);
    expect(wrapper.findAll('[data-test="no-cart"]')).toHaveLength(1);
    expect(wrapper.findAll('[data-test="cart-title"]')).toHaveLength(0);
  });
});

describe("Cart.vue elements render with some cartItems", () => {
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
          return {
            "60c79816bf562c195c74c4b2": 9,
            "60c79816bf562c195c74c4b3": 5,
            "60c79816bf562c195c74c4b5": 1,
            "60c79816bf562c195c74c4b6": 4,
          };
        },
        multiProducts: () => {
          return [
            {
              brand: "Apple",
              category: "Electronics",
              countInStock: 0,
              createdAt: "2021-06-14T17:55:34.417Z",
              description:
                "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
              image: "/images/airpods.jpg",
              name: "Airpods Wireless Bluetooth Headphones",
              numReviews: 12,
              price: 89.99,
              rating: 4.5,
              reviews: [],
              updatedAt: "2021-06-14T17:55:34.417Z",
              user: "60c79816bf562c195c74c4af",
              __v: 0,
              _id: "60c79816bf562c195c74c4b2",
            },
            {
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
            {
              brand: "Sony",
              category: "Electronics",
              countInStock: 11,
              createdAt: "2021-06-14T17:55:34.418Z",
              description:
                "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
              image: "/images/playstation.jpg",
              name: "Sony Playstation 4 Pro White Version",
              numReviews: 12,
              price: 399.99,
              rating: 5,
              reviews: [],
              updatedAt: "2021-06-14T17:55:34.418Z",
              user: "60c79816bf562c195c74c4af",
              __v: 0,
              _id: "60c79816bf562c195c74c4b5",
            },
            {
              brand: "Logitech",
              category: "Electronics",
              countInStock: 7,
              createdAt: "2021-06-14T17:55:34.418Z",
              description:
                "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
              image: "/images/mouse.jpg",
              name: "Logitech G-Series Gaming Mouse",
              numReviews: 10,
              price: 49.99,
              rating: 3.5,
              reviews: [],
              updatedAt: "2021-06-14T17:55:34.418Z",
              user: "60c79816bf562c195c74c4af",
              __v: 0,
              _id: "60c79816bf562c195c74c4b6",
            },
          ];
        },
      },
    });
  });

  it("renders correct elements", async () => {
    const wrapper = mount(Cart, {
      global: {
        plugins: [store],
        stubs: {
          "router-link": {
            template: '<p data-test="stub-router">router placeholder</p>',
          },
        },
      },
    });
    await nextTick();
    expect(wrapper.findAll('[data-test="stub-router"]')).toHaveLength(4);
    expect(wrapper.findAll('[data-test="in-cart-product"]')).toHaveLength(3);
    expect(wrapper.findAll('[data-test="out-of-stock-product"]')).toHaveLength(
      1
    );
  });
});
