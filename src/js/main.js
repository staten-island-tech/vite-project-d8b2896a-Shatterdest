import { getData } from './data.js'

const data = JSON.stringify(getData())
console.log(data)

const selectors = {
    form: document.getElementById('form'),
    submit: document.getElementById('submit')
}
console.log(selectors)

selectors.form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('runnin!')

})