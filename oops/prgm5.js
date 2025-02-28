//object - inheritance
const baleno = {
    model : "Hatch Back",
    Varient : ["automatic", "Manual"],
    Manufacture : "Maruthi"
}
glanza = {
    manufacture : "Toyoto"
}
glanza__proto__ = baleno
console.log(glanza.manufacture);
console.log(glanza.model);



