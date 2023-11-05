export function load(data, s) {
    for(let i=0; i<data.length; i++) {
        const cardLayout = `<div class="card">
        <h3 class="display-name">${data[i].displayName}</h3>
        <img src="${data[i].displayIconSmall}" class='img'>
        <h3 class="agent-type">${data[i].role.displayName}</h3>
        <p class="description">${data[i].description}</p>
        </div>`;
        console.log(`loading ${data[i].displayName}`)
        s.container.insertAdjacentHTML("beforeend", cardLayout);
    }

  data.forEach((d) => console.log(d));
}
