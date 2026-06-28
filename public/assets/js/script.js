function filtrar() {
  const camp = document.getElementById('filtroCampeonato').value;
  const status = document.getElementById('filtroStatus').value;

  document.querySelectorAll('.card').forEach((card) => {
    const okCamp = !camp || card.dataset.campeonato === camp;
    const okStatus = !status || card.dataset.status === status;
    card.style.display = okCamp && okStatus ? 'block' : 'none';
  });
}

function assistir(titulo) {
  alert('Reproduzindo: ' + titulo + '\nPlayer simulado para o projeto KickStream.');
}
