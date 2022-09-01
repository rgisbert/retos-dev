// Devuelve la posición del ratón
const getMousePosition = (matrix) => {
  // Posiciones
  let row = 0;
  let column;

  for (const arrPos of matrix) {
    // ¿Encuentra la posición del ratón en este sub-array?
    column = arrPos.findIndex((p) => p === 'm');

    // Sino lo ha encontrado, pasamos a la siguiente fila
    if (column === -1) {
      row++;
    } else {
      // Si lo ha encontrado, fin iteración
      break;
    }
  }

  return [row, column];
};

const newPossibleMove = (room, mouse, direction = 'up') => {
  // Cambio en habitación, según el valor de dirección
  const valueDirection = {
    up: [-1, 0],
    right: [0, 1],
    down: [1, 0],
    left: [0, -1],
  };

  // Máximas dimensiones para no salirse de la habitación
  const maxColumn = room[0].length - 1;
  const maxRow = room.length - 1;

  // Nueva posición según la dirección elegida
  const getChangePosition = () => {
    let [a, b] = mouse;

    // Sino exista la clave de dirección, devuelvo posición errónea
    if (!valueDirection[direction]) return [-1, -1];

    a += valueDirection[direction][0];
    b += valueDirection[direction][1];

    return [a, b];
  };

  const [newRow, newColumn] = getChangePosition();

  // Controlo que siga dentro de la habitación
  if (newRow < 0 || newRow > maxRow || newColumn < 0 || newColumn > maxColumn)
    return {ok: false, newPosition: [-1, -1]};

  return {
    ok: true,
    newPosition: [newRow, newColumn],
  };
};

function canMouseEat(direction, game) {
  // Saber posición del ratón
  const mousePosition = getMousePosition(game);

  // Nueva posición en la habitación
  const {ok, newPosition: pos} = newPossibleMove(
    game,
    mousePosition,
    direction
  );
  // Sino está dentro del rango válido (la habitación), se acaba
  if (!ok) return false;

  return game[pos[0]][pos[1]] === '*';
}

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*'],
];

// console.log(canMouseEat('up', room)); // false
// console.log(canMouseEat('down', room)); // true
// console.log(canMouseEat('right', room)); // false
// console.log(canMouseEat('left', room)); // false

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*'],
];

// console.log(canMouseEat('up', room2)); // false
// console.log(canMouseEat('down', room2)); // false
// console.log(canMouseEat('right', room2)); // true
// console.log(canMouseEat('left', room2)); // false
