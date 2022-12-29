const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () => {
  return `A temperatura de Marte é: ${getMarsTemperature()} graus celsius`
}

setTimeout(() => console.log(sendMarsTemperature(getMarsTemperature)), messageDelay()); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo