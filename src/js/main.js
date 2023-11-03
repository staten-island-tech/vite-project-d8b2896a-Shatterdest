import { getData } from './data.js'
import { load } from './load.js'

const data = getData()
const jdata = JSON.stringify(getData())
console.log(data)

const selectors = {
    form: document.getElementById('form'),
    submit: document.getElementById('submit'),
    container: document.getElementById('container')
}
console.log(selectors)

selectors.form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('runnin!')

})

load(getData(), selectors);