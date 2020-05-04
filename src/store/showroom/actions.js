export function addToCart({ state, commit }, item) {
  const { cart } = state;
  const index = cart.findIndex((i) => i.id === item.id);

  if (index !== -1 && cart) {
    const tempItem = { ...cart[index] };
    tempItem.qte += item.qte;
    return commit('REPLACE_CART_ITEM', { item: tempItem, index });
  }

  return commit('ADD_TO_CART', item);
}

export function removeFromCart({ state, commit }, item) {
  const { cart } = state;
  const index = cart.findIndex((i) => i.id === item.id);

  if (index !== false) {
    const tempItem = { ...cart[index] };
    tempItem.qte -= item.qte;
    if (tempItem.qte > 0) {
      return commit('REPLACE_CART_ITEM', { item: tempItem, index });
    }
    return commit('REMOVE_FROM_CART', item);
  }
  return false;
}
