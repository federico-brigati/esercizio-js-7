let totalGatti = 23;
let gattiPerFila = 5;

let fileTotali = Math.floor(totalGatti / gattiPerFila);
let avanzo     = totalGatti % gattiPerFila;
let mancanti   = gattiPerFila - avanzo;

console.log(
  "Ci sono " + fileTotali + " file di gatti e ne mancano " +
  mancanti + " per una nuova fila, con un avanzo di " + avanzo
);
