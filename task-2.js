const x = document.getElementById("red")
x.onclick =function(){
    var y = document.body.style.backgroundColor="red"
}
const y = document.getElementById("green")
y.onclick =function(){
    var y = document.body.style.backgroundColor="green"
}
const z = document.getElementById("yellow")
z.onclick =function(){
    var y = document.body.style.backgroundColor="yellow"
}

const a = document.getElementById("date")
a.onclick = function(){
    const b = new Date
    const c = b.getDate()
    console.log(c);
}

// const b = document.getElementById("date")
// b.onclick = function(){
//     const b = new Date
//     const c = b.getTime()
//     console.log(c);
// }