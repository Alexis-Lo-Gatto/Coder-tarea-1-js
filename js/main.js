const reservas = [];

function reservar() {
  let nombre = prompt("¿Cuál es su nombre?");
  let edad = parseInt(prompt("¿Cuántos años tienes?"));

  if (edad >= 18) {
    let horaReservada = prompt("¿A qué hora quieres reservar?");
    const reserva = {
      nombre: nombre,
      edad: edad,
      horario: horaReservada,
    };
    reservas.push(reserva);
    alert("Reserva confirmada para " + nombre + " a las " + horaReservada + ".");
  } else {
    alert("Eres menor de edad, no puedes reservar.");
  }
}

let decisionDeReserva = prompt("Hola !! ¿Desea reservar? si/no");

while (decisionDeReserva === "si") {
  reservar();
  decisionDeReserva = prompt("¿Quiere hacer otra reserva? si/no");
}

console.log(reservas);
