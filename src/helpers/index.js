const print1To100 = () => {
  let result = '';
  for (let i = 1; i <= 100; i ++) {
    result += (i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i
  }
  return result;
};

const isIsogram = str => {
  return str
    .split('')
    .every((c, i) => str.indexOf(c) === i);
};

// aeiou
const removeVowels = str => {
  return str.replace(/[aeiou]/gi, ''); 
};

export {
  print1To100,
  isIsogram,
  removeVowels,
};
