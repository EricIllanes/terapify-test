const functionPrueba = () => {
  let hours = ["08:00", "14:00"];
  let start = parseInt(hours[0].slice(0, 2));
  let end = parseInt(hours[hours.length - 1].slice(0, 2));
  let minInit= hours[0].slice(3,5)
  let minEnd=hours[0].slice(3,5)
  let n = start;
  let intervalos = [];
  while (n < end) {
        intervalos.push({
          intHOur: `${n.toString()}:${minInit} - ${(n + 1).toString()}:${minEnd}`,
            available: true ,
       });
         n++;
  }

  console.log(intervalos);
};

functionPrueba();
