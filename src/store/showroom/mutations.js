import Vue from 'vue';

export function SAVE_CATALOGUE(store, catalogue) {
  store.catalogue = catalogue;
}

export function ADD_TO_CART(store, item) {
  store.cart.push(item);
}

export function REPLACE_CART_ITEM(store, { item, index }) {
  const { cart } = store;
  cart[index] = item;
  Vue.set(store.cart, index, item);
}

export function REMOVE_FROM_CART(store, id) {
  store.cart = store.cart.filter((i) => i.id === id);
}
