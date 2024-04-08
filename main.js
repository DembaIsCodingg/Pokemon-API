document.querySelector('button').addEventListener('click',get)

async function get(){
    let value = document.querySelector('input').value
    const res = await fetch(`https://localhost:8000/pokemon/${value}`)
    const data = await res.json()
    console.log(data)
}