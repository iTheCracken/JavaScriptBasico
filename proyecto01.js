var Sexo;
(function (Sexo) {
    Sexo["M"] = "Masculino";
    Sexo["F"] = "Femenino";
})(Sexo || (Sexo = {}));
function nombreCompleto(datos) {
    return "Tu nombre es: " + datos.nombre + " " + datos.apellidos;
}
var Cracken = {
    nombre: "José Antonio",
    apellidos: "Covarrubias Peralta",
    edad: 24,
    sexo: Sexo.M
};
console.log(nombreCompleto(Cracken));
