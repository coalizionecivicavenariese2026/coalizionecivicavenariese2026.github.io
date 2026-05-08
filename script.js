// Gestione Animazioni al caricamento (Intersection Observer)
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.classList.add('reveal-active');
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
  el.style.opacity = "0";
  observer.observe(el);
});

// Dati dei Candidati
const candidateData = {
  'tua-lista': {
    title: 'La Tua Lista Civica',
    names: ['DELLISANTI Mimmo', 'D\'APICE Sara', 'RIVA Roberto', 'CALLEGARI Paolo', 'BISANZIO Massimo', 'CARPANESE Gemma', 'PICATTI Dario', 'GRIMALDI Maria Silvana', 'ACUNZO Pasquale']
  },
  'pensionati': {
    title: 'Noi Pensionati per Venaria',
    names: ['PISTILLO Michele', 'BALBO Giancarlo', 'DEPALMA Maria', 'CONDEMI Giuseppe', 'ALDERUCCI Sebastiana', 'BRAGATEL Adriana', 'CHITO Angela', 'CIRELLI Franco', 'GALLOCCHIO Manuela', 'CAVO Rodolfo']
  },
  'centro': {
    title: 'Venaria Al Centro',
    names: ['BELLUZZO Elena', 'DEI Andrea', 'ACCORSI Elisa', 'PAVAN Federico', 'BERTAIOLA Ilenia', 'FUSETTI Monia', 'DEDAMIANI Gaetano', 'BOGO Tiziana', 'VENERA Mathis', 'CANNELLA Gaetana']
  },
  'amica': {
    title: 'Venaria Amica e Solidale',
    names: ['PAPPALARDO Federica', 'ORLANDO Girolama', 'TOMIO Ingrid', 'FAVARON Loris', 'ALONGI Dorotea Maria', 'DALL\'ARMELLINA Massimo', 'LAMANNA Graziella', 'VISCUSO Vincenzo']
  },
  'futura': {
    title: 'Venaria Futura',
    names: ['Consultabile nel programma integrale']
  }
};

// Funzioni per il Modal delle liste
function openModal(listKey) {
  const data = candidateData[listKey];
  const modal = document.getElementById('candidateModal');
  document.getElementById('modalTitle').innerText = data.title;
  const body = document.getElementById('modalBody');
  body.innerHTML = data.names.map(name => `<div class="candidate-name">${name}</div>`).join('');
  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('candidateModal').style.display = 'none';
}

// Funzione Hamburger Menu Mobile
function toggleMenu() {
  const nav = document.getElementById('nav-menu');
  const hamburger = document.querySelector('.hamburger');

  nav.classList.toggle('active');
  hamburger.classList.toggle('active');

  if (nav.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}

// Event Listeners globali (chiusura con click esterno)
window.addEventListener('click', function (event) {
  const modal = document.getElementById('candidateModal');
  const nav = document.getElementById('nav-menu');
  const hamburger = document.querySelector('.hamburger');

  // Chiude il modal se clicchi fuori dal contenuto bianco
  if (event.target == modal) {
    closeModal();
  }

  // Chiude il menu mobile se clicchi altrove (opzionale ma consigliato)
  if (nav.classList.contains('active') && !nav.contains(event.target) && !hamburger.contains(event.target)) {
    toggleMenu();
  }
});
