const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`Atualmente está ${toFahrenheit(getMarsTemperature())}ºF em Marte`);

const greet = (temperature) =>
  console.log(`Olá! Curiosity aqui. Nesse momento está ${getMarsTemperature()}ºC em Marte`);

// Definição da função sendMarsTemperature...
const sendMarsTemperature = (callback) => {
return callback();
}

setTimeout(() => sendMarsTemperature(temperatureInFahrenheit), messageDelay()); // Imprime "Atualmente está 46.4ºF em Marte", por exemplo

setTimeout(() => sendMarsTemperature(greet), messageDelay()); // Imprime "Olá! Curiosity aqui. Nesse momento são 36ºC em Marte", por exemplo