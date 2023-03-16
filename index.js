import routing from './routing.svelte'

let p =  document.getElementById("app")

new routing ({
    target: document.getElementById("app"),
    props:{}
})