let p0 = 1000;
let inhabitants = 50;

let yearly = p0 * 2 + 50;

function nb_year(p0, percentage, inhabitants, Limit) {
  let countAges = 0;
  percentage /= 100; 
  while (p0 < Limit) {
    p0 += Math.floor(percentage * p0) + inhabitants;
    countAges++;
    console.log(
      `at the end of the ${countAges} year there will be: ${p0} inhabitants`
    );
  }
  console.log(`it will need ${countAges} entire years`);
}

nb_year(1000, 2, 50, 1200);
nb_year(1500, 5, 100, 5000);
nb_year(1500000, 2.5, 10000, 2000000);
