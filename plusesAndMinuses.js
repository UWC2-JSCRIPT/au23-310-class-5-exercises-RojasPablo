// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.

let counter = 0;

const plusEl = document.getElementById("plus");
const minusEl = document.getElementById("minus");
const countEl = document.getElementById("count");

function incrementDecrement(inc) {
    if (inc) {
        counter++;
    } else {
        counter--;
    }
    countEl.innerText = `Count: ${counter}`;
}

plusEl.addEventListener("click", () => incrementDecrement(true))
minusEl.addEventListener("click", () => incrementDecrement(false))

// plusEl.addEventListener("click", ()=> {
//     counter++;
//     document.getElementById("count").innerHTML = counter;
//     console.log(`count is ${counter}`)
// })
// plusEl.addEventListener("click", ()=> {
//     counter--;
//     document.getElementById("count").innerHTML = counter;
//     console.log(`count is ${counter}`)
// })

// plusEl.removeEventListener("click", incrementDecrement(true));