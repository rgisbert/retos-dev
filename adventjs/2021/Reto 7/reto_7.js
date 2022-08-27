/**
 * Función que recibe un objeto para acabar devolviendo todos los valores del mismo, incluso de los objetos ahijados
 * tengan los niveles que tenga.
 * @param {Object} obj Objeto completo con todas los niveles declarados
 * @returns [String[]] Con todos los valores del objeto obtenido
 */
const getValues = (obj) => {
  let valores = [];

  for (const index in Object.values(obj)) {
    if (typeof Object.values(obj)[index] === 'object') {
      // Recursividad para ir obteniendo los distintos sub niveles
      valores.push(...getValues(Object.values(obj)[index]));
    } else {
      valores.push(Object.values(obj)[index]);
    }
  }

  return valores;
};

function contains(store, product) {
  const palabras = getValues(store);

  return palabras.includes(product);
}
