import { getData } from "./data.js";
import { load } from "./load.js";
import { dom } from "./dom.js";
import { sortCards } from "./sort.js"

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
    sentinel: selectors.sentinel.checked
  }
  sortCards(inputs, selectors, getData());
  selectors.form.reset();
});
