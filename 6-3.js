const s1 = `norspssvnnn`
const s2 = `zxzzzblbbbb`
const longest = (s1, s2) => {
  const str = s1 + s2;
  let st = str.split(``);
  st = st.sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    } else {
    return -1
  }
  });
  st = [...new Set(st)];
  return st;
}

console.log(longest(s1, s2));