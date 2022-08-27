function getMinJump(obstacles) {
  const pathLength = Math.max(...obstacles) + 1;
  let minJump = -1;

  // Empezar con salto mínimo de 2
  for (let jump = 2; jump < pathLength; jump++) {
    let rightJump = true;

    // Comprobar camino
    let i = jump;
    while (rightJump && i < pathLength) {
      if (obstacles.includes(i)) rightJump = false;

      i += jump;
    }

    // Si el camino ha funcionado, guardar número y salir del bucle
    if (rightJump) {
      minJump = jump;
      break;
    }
  }

  return minJump;
}
