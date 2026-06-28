function filtrar() {
  const camp = document.getElementById('filtroCampeonato').value;
  const status = document.getElementById('filtroStatus').value;
  let visiveis = 0;

  document.querySelectorAll('.card').forEach((card) => {
    const okCamp = !camp || card.dataset.campeonato === camp;
    const okStatus = !status || card.dataset.status === status;
    const deveMostrar = okCamp && okStatus;

    card.style.display = deveMostrar ? 'block' : 'none';
    if (deveMostrar) {
      visiveis += 1;
    }
  });

  atualizarEstadoCatalogo(visiveis);
}

function assistir(titulo) {
  alert('Reproduzindo: ' + titulo + '\nPlayer simulado para o projeto KickStream.');
}

function atualizarEstadoCatalogo(totalVisivel) {
  const catalogo = document.getElementById('catalogo');
  if (!catalogo) {
    return;
  }

  let estadoVazio = catalogo.querySelector('.empty-state');
  if (!estadoVazio) {
    estadoVazio = document.createElement('section');
    estadoVazio.className = 'empty-state';
    estadoVazio.innerHTML = '<h2>Nenhum jogo encontrado</h2><p>Altere os filtros para visualizar outras partidas.</p>';
    catalogo.appendChild(estadoVazio);
  }

  estadoVazio.style.display = totalVisivel === 0 ? 'block' : 'none';
}

function prepararCards() {
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    const status = (card.dataset.status || '').toLowerCase();

    if (status.includes('ao vivo') || status.includes('disponivel') || status.includes('disponível')) {
      card.classList.add('live');
    }

    if (status.includes('breve')) {
      card.classList.add('upcoming');
    }
  });

  atualizarEstadoCatalogo(cards.length);
}

document.addEventListener('DOMContentLoaded', prepararCards);
