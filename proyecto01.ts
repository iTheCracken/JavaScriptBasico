
enum Sexo {
  M='Masculino',
  F='Femenino'
}

interface Persona{
  nombre: string;
  apellidos: string;
  edad: number;
  sexo: Sexo;
}

function nombreCompleto(datos: Persona){
  return `Tu nombre es: ${datos.nombre} ${datos.apellidos}`;
}

let Cracken = {
  nombre: "José Antonio",
  apellidos: "Covarrubias Peralta",
  edad: 24,
  sexo: Sexo.M
};

console.log(nombreCompleto(Cracken));
