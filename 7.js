// filter all the digits
const filterDigits = str => {
  const newArr = str.split(``);
  const digitStr = newArr.filter(char => isFinite(char))
  return digitStr.join(``);
}
console.log(filterDigits(`f7js3hf1o02`));

// sum all the numbers in a given string
const sum = str => {
const newArr = filterDigits(str).split(``);
let sum = 0;
newArr.forEach(digit => sum += parseInt(digit));
return sum;
}

console.log(sum(`fs1hg9ahdy4`));

// makes all elements hidden with a character of your choose
const hidden = (str, char) =>  {
  let newArr = str.split(``);
  const hiddenArr = newArr.map(k => k = char);
  return hiddenArr;
}

console.log(hidden(`384hfs`, `#`));
