import { load } from "./load.js";

export function sortCards(bool, s, d) {
    console.log(
        `sorting by: duelist-${bool.duelist}, initiator-${bool.initiator}, controller-${bool.controller}, sentinel-${bool.sentinel}`
      );
    s.container.innerHTML = ''
    if(bool.duelist === true){
      for(let i=0; i<d.length; i++){
        
      }
    }
}