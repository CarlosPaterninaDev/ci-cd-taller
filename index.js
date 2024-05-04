const division = (a, b) => {
  if (b === 0) {
    return 'Division by zero'; 
  }
  return a / b;
};

console.log(division(4, 2));

module.exports = { division };
