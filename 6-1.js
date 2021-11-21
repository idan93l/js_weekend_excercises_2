const mumbling = str => {
  arr = str.split(``);
  const newArr = arr.map((letter, idx) => {
    letter = letter.toUpperCase();
    letter += letter.repeat(idx).toLowerCase();
    return letter;
  });
  return newArr.join(`-`);
}

console.log(mumbling(`RqaEzty`));