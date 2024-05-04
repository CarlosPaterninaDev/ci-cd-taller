const division = (a, b) => {

  // const hola = 'hola';

  if (b === 0) {
    return 'Division by zero!'; 
  }
  console.log("object");
  return a / b;
};

console.log(division(4, 2));

module.exports = { division };
