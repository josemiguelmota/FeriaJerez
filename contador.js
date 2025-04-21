function actualizarContador() {
  const destino = new Date('2025-05-17T22:00:00');
  const ahora = new Date();
  const diferencia = destino - ahora;

  if (diferencia <= 0) {
    document.getElementById('contador').textContent = "¡Ya es la feria!";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  document.getElementById('contador').textContent =
    `${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}

actualizarContador();
setInterval(actualizarContador, 1000);
