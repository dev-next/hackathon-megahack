export function totalInCart(state) {
  const baseTotal = {
    total: 0,
    qte: 0,
  };

  return state.cart.reduce((t, d) => ({
    total: t.total + d.value * d.qte,
    qte: t.qte + d.qte,
  }), { ...baseTotal });
}
