const isWorkableDay = (year: number, data: string): boolean => {
  try {
    const [month, day] = data.split('/');
    const date = new Date(year, Number(month) - 1, Number(day));

    return [1, 2, 3, 4, 5].includes(date.getDay());
  } catch (e) {
    return false;
  }
};

function countHours(year: number, holidays: string[]): number {
  try {
    const workableDays: string[] = holidays.filter((day) =>
      isWorkableDay(year, day)
    );

    // Dos horas extras a "devolver" por cada día festivo entre semana
    return workableDays.length * 2;
  } catch(e) {
    return 0;
  }
}

const year = 2022;
const holidays = ['01/06', '04/01', '12/25']; // formato MM/DD

countHours(year, holidays);
