const container = document.querySelector("table");
const tables = document.querySelectorAll("td");
// console.log(tables);

// tables.forEach(td => {
//   td.onclick = e => {
//     // e.stopPropagation();s
//     console.log("клик на td");
//     // if (!e.target.style.background) e.target.style.background = "red";
//     // else e.target.style.background = null;
//   };
// });

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const randColor = () => {
    let r = getRandomInt(0, 255);
    let g = getRandomInt(0, 255);
    let b = getRandomInt(0, 255);
    
    let res = `rgb(${r} ${g} ${b})`;
    return res;
}



// document.body.onclick = () => {
//   console.log("клик на body");
// };
// document.documentElement.onclick = () => {
//   console.log("клик на html");
// };

container.onclick = e => {
  console.log("клик на table");
  console.log(e.target.tagName);
  if (e.target.tagName !== "TD") return;
  if (!e.target.style.background)
    e.target.style.background = randColor();
  else e.target.style.background = null;
};

container.addEventListener('click', () => {
    console.log("клик на таблице");
}, true);
document.body.addEventListener('click', () => {
    console.log("клик на body");
}, true);
document.documentElement.addEventListener('click', () => {
    console.log("клик на html");
}, true);

