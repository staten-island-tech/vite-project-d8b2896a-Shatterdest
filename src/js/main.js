import { getData } from "./data.js";
import { load } from "./load.js";
import { dom } from "./dom.js";
import { sortCards } from "./sort.js";
import "../styles/style.css";

const data = getData();
const jdata = JSON.stringify(getData());
console.log(data);

const selectors = dom();
console.log(selectors);
load(getData(), selectors);

selectors.form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputs = {
    duelist: selectors.duelist.checked,
    initiator: selectors.initiator.checked,
    controller: selectors.controller.checked,
    sentinel: selectors.sentinel.checked,
  };
  sortCards(inputs, selectors, getData());
});

console.log(selectors.toggle.value)
selectors.toggle.addEventListener('click', toggle())


function toggle() {
  const btn = document.getElementById('toggle');
  if (btn.value === "notGold") {
    btn.value = "Gold";
    console.log("toggling to gold");
  } else {
    btn.value = "notGold";
    console.log("toggling off gold");
  }
}
