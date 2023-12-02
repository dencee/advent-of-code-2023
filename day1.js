// const inputUrl = "https://adventofcode.com/2023/day/1/input";
// let source = "";

// async function getInput() {
//   const response = await fetch(inputUrl);
//   source = await response.text();
//   sum(source);
// }

let source = document.body.innerText;

function sum(lines) {
  let sum = 0;
  const arr = lines.split("\n");

  for (const line of arr) {
    if (line) {
      const str = line.replace(/\D/g, "");

      if (str.length === 1) {
        sum += parseInt(str + str);
      } else {
        sum += parseInt(str[0] + str[str.length - 1]);
      }
    }
  }

  console.log(`The sum is: ${sum}`);
  return sum;
}

sum(source);
