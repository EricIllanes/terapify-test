const functionPrueba = () => {
  let hours = ["08:00", "14:00"];
  let start = parseInt(hours[0].slice(0, 2));
  let end = parseInt(hours[hours.length - 1].slice(0, 2));
  let n = start;
  let intervalos = [];
  while (n < end) {
    if (n < 10) {
      intervalos.push([
        `0${n.toString()}:00 - 0${(n + 1).toString()}:00`,
        { available: true },
      ]);
    } else {
      intervalos.push([
        `${n.toString()}:00 - ${(n + 1).toString()}:00`,
        { available: true },
      ]);
    }
    n++;
  }

  console.log(intervalos);
};

functionPrueba();
