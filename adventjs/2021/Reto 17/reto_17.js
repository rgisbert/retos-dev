const getCarriersNames = (arrCarriers, id) => {
  // Añadir el nombre que está buscando ahora
  const result = [id];
  // Registro deseado
  const record = arrCarriers.find(([carrierName]) => carrierName === id);
  // Obtener sus subordinados
  const [, , subordinates] = record;

  // Si los tiene, volver a llamar a la función para rellena array y volve a seguir los subordinados
  if (subordinates.length > 0) {
    for (const nombre of subordinates) {
      result.push(...getCarriersNames(arrCarriers, nombre));
    }
  }

  return result;
};

const sumQuantity = (arrCarriers, arrNames) => {
  let quantity = 0;

  // Recorrer los nommbres ya obtenidos para sumar sus cantidades
  arrNames.forEach((name) => {
    const [, qty] = arrCarriers.find(([id]) => id === name);
    quantity += qty;
  });

  return quantity;
};

function countPackages(carriers, carrierID) {
  // Devuelve el array de nombres completo
  const names = getCarriersNames(carriers, carrierID);
  // Suma las cantidades de todos los transportistas
  const quantity = sumQuantity(carriers, names);

  return quantity;
}
