import { getData } from "./data.js";
import { load } from "./load.js";
import { dom } from "./dom.js";
import { sortCards } from "./sort.js";
import "../styles/style.css";

const data = getData();
const jdata = JSON.stringify(getData());
const selectors = dom();
console.log(data);
console.log(selectors);
load(data, selectors);

selectors.form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputs = {
    duelist: selectors.duelist.checked,
    initiator: selectors.initiator.checked,
    controller: selectors.controller.checked,
    sentinel: selectors.sentinel.checked,
  };
  sortCards(inputs, selectors, data);
});

selectors.toggle.addEventListener("click", () => {
  const btn = selectors.toggle;
  if (btn.value === "notGold") {
    btn.value = "Gold";
    console.log("toggling to gold");
    console.log(selectors.toggle.value);
    let cost = data.map((obj) => obj.cost * 2)
  } else {
    btn.value = "notGold";
    console.log("toggling off gold");
    console.log(selectors.toggle.value);
  }
});
