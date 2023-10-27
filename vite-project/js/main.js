import { getData } from './data.js'

const data = []
getData().then((datas) => {data.push(datas)});

console.log(data)

document.getElementById('#app').innerHTML = data