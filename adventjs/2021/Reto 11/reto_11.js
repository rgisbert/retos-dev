function shouldBuyFidelity(times) {
  // Precio entrada normal
  const ticketPrice = 12;
  const fidelityCard = 250;
  const percDiscount = 0.75;

  // Precio entrada individual
  const oneUseTicket = ticketPrice * times;
  // Precio con descuentos + tarjeta
  const priceDiscount = () => {
    let resultado = fidelityCard;

    for (let i = 1; i <= times; i++) {
      resultado += ticketPrice * percDiscount ** i;
    }

    return resultado;
  };

  return priceDiscount() < oneUseTicket;
}
