// let hoje = new Date()
// console.log(hoje.getMonth()+1)
// console.log(hoje.getDay()+1)
var d = new Date();
var time = d.getHours();
console.log("Hoje \u00E9 dia\n".concat(d.getDate(), "/").concat(d.getMonth(), "/").concat(d.getFullYear()));
if (time < 12) {
    console.log("Bom dia!");
}
else if (time >= 12 && time < 18) {
    console.log("Boa tarde!");
}
else {
    console.log("Boa noite!");
}
