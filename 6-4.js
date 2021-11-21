const isIsogram = str => {
  const newArr = str.toLowerCase().split(``);
  let letterArray = [];
  let obj = {};

  newArr.forEach((letter) => {
    if (obj[letter]) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  });

  for (let prop in obj) {
    if (obj[prop] > 1) {
      return false
    }
  }

  return true;
}

console.log(isIsogram(`Idan`))
console.log(isIsogram(`Iddan`))