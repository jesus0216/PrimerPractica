(() => {
    // Funciones
    function suma(numero1, numero2) {
        return numero1 + numero2;
    }

    const resta = function (numero1, numero2) {
        return numero1 - numero2;
    };

    /*const division = (numero1, numero2) => {
        return numero1 / numero2;
    };*/

    const division = (numero1, numero2) => numero1 / numero2;

})();

const chivas = {
    name: "Monarcas",
    points: 10,
    league: "Liga MX",
    country: "México",
    match: [
      { team: "Equipo1", poi: 15, date: "2024-01-18" },
      { team: "Equipo2", poi: 18, date: "2024-01-20" },
      // ... más partidos
    ],
  };
  
  
  const { name, points, league, country, match } = chivas;
  
  match.forEach(({ team, poi, date }, index) => {
    console.log('# Partidos: ', match.length);
    console.log(
      `${name} vs ${team} en el día ${new Date(date).getDay()} del mes ${
        new Date(date).getMonth()
      } ${points > poi ? `${name} tiene más puntos` : `${team} tiene más puntos`}`
    );
  
    console.log("poi", poi);
    console.log("points", points);
    console.log(new Date(date));
  });