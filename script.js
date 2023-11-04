const parameters = document.querySelectorAll(".parameters")
const btn = document.querySelector("button")
const output = document.querySelector("h4")

function calculate(a, b){
    let area = (a*b)/2
    return area
}

function findArea(){
    const values = calculate(Number(parameters[0].value), Number(parameters[1].value))
    output.innerHTML = `The area of the triangle is ${values}cm<sup>2</sup>`
}



btn.addEventListener("click", findArea)