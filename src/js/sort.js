import { load } from "./load.js";

export function sortCards(bool, s, d) {
  const duelists = d.filter((agent) => agent.role.displayName === "Duelist");
  const initiators = d.filter(
    (agent) => agent.role.displayName === "Initiator"
  );
  const controller = d.filter(
    (agent) => agent.role.displayName === "Controller"
  );
  const sentinel = d.filter((agent) => agent.role.displayName === "Sentinel");
  console.log(
    `sorting by: duelist-${bool.duelist}, initiator-${bool.initiator}, controller-${bool.controller}, sentinel-${bool.sentinel}`
  );
  s.container.innerHTML = "";
  if (bool.duelist === true) {
    console.log("loading duelists");
    load(duelists, s);
  }
  if (bool.initiator === true) {
    console.log("loading initiators");
    load(initiators, s);
  }
  if (bool.controller === true) {
    console.log("loading controllers");
    load(controller, s);
  }
  if (bool.sentinel === true) {
    console.log("loading sentinels");
    load(sentinel, s);
  }
  if (
    bool.duelist === false &&
    bool.initiator === false &&
    bool.controller === false &&
    bool.sentinel === false
  ) {
    console.log("loading all");
    load(d, s);
  }
}
