function learn(time, courses) {
  let result = [-1, -1]; // Calcula la suma
  let indexResult = [-1, -1]; // Guarda las posiciones correctas
  // Función de apoyo
  const sumPair = ([a, b]) => a + b;

  for (let i = 0; i < courses.length - 1; i++) {
    // El curso debe ser siempre menor al tiempo máximo disponible
    if (time <= courses[i]) continue;

    // Pimer elemento del array desde la posición correspondiente (no repasa lo ya visto)
    const optFirstCourse = courses[i];
    // Sólo con las posiciones que hay más adelante, las anteriores ya están comprobadas
    const nextCourses = courses.slice(i + 1, courses.length);
    // Me quedo con al mejor opción que no supere el tiempo
    const possibleOptions = nextCourses
      .filter((course) => course + optFirstCourse <= time)
      .sort((a, b) => a - b)
      .reverse()
      .slice(0, 1);

    // Total de la opción previa y de la actual
    const prevOption = sumPair(result);
    const thisOption = sumPair([optFirstCourse, possibleOptions[0]]);

    // Comparación
    if (thisOption > prevOption) {
      result = [optFirstCourse, possibleOptions[0]];

      // Guardar índices
      const higherIndex =
        courses
          .slice(i + 1, courses.length)
          .findIndex((next) => next === result[1]) +
        i +
        1;
      indexResult = [i, higherIndex];
    }

    // Si es tiempo exacto, salir del bucle
    if (thisOption === time) break;
  }

  return sumPair(indexResult) < 0 ? null : indexResult;
}
