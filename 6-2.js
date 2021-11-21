const Duplicates = str => {
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
    if (obj[prop] >= 2) {
      letterArray.push(prop)
    }
  }

  return letterArray.length;
}

console.log(Duplicates(`aAbB2233`))