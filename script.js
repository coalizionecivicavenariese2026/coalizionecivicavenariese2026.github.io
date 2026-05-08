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
    names: ['DELLISANTI Mimmo', 'D\'APICE Sara', 'RIVA Roberto', 'CALLEGARI Paolo', 'BISANZIO Massimo', 'CARPANESE Gemma', 'PICATTI Dario', 'GRIMALDI Maria Silvana', 'ACUNZO Pasquale', 'Adriani Anna Pia', 'Barna Giorgio', 'Martini Loredana', 'Verde Gioacchino', 'Bagetto Giovanni', 'Chichi Maria Rosaria', 'Alaimo Giuseppe', 'Corbo Maria Daniela', 'Acquafredda Maria Francesco', 'Boietto Gianluigi', 'Di Già Andrea', 'Tiozzo Marilena', 'Grieco Gianluca', 'Micheletto Simona', 'Sorich Angela']
  },
  'pensionati': {
    title: 'Noi Pensionati per Venaria',
    names: [
      'PISTILLO Michele',
      'BALBO Giancarlo',
      'DEPALMA Maria',
      'CONDEMI Giuseppe',
      'ALDERUCCI Sebastiana',
      'BRAGATEL Adriana',
      'CHITO Angela',
      'CIRELLI Franco',
      'GALLOCCHIO Manuela',
      'CAVO Rodolfo',
      'FERIOLO Francesca',
      'ALDERUCCI Rita',
      'CIRELLI Nino',
      'D’ANGELO Antonina',
      'CRUDO Francesco',
      'MENEGHETTI Ivo',
      'VIGLIATURO Loredana',
      'CIRIGLIANO Giorgio',
      'CIRRI Antonino'
    ]
  },
  'centro': {
    title: 'Venaria Al Centro',
    names: [
      'BELLUZZO Elena',
      'DEI Andrea',
      'ACCORSI Elisa',
      'PAVAN Federico',
      'BERTAIOLA Ilenia',
      'FUSETTI Monia',
      'DEDAMIANI Gaetano',
      'BOGO Tiziana',
      'VENERA Mathis',
      'CANNELLA Gaetana',
      'RACCIOPPI Francesco',
      'SALUTE Emanuela',
      'SCARDINO Paolo',
      'MASTRI Alessandra Nicole',
      'MENEGALDO Silvio',
      'TORASSA Nicole',
      'BONOMINI Elena',
      'GRIGORUTA Bianca Alexandra',
      'CALO’ Roberta',
      'DINU Vasile Silviu',
      'CANGOGNI Alfredo Giuseppe'
    ]
  },
  'amica': {
    title: 'Venaria Amica e Solidale',
    names: [
      'PAPPALARDO Federica',
      'ORLANDO Girolama',
      'TOMIO Ingrid',
      'FAVARON Loris',
      'ALONGI Dorotea Maria Ninfa',
      'DALL’ARMELLINA Massimo Gianni',
      'LAMANNA Graziella Maria',
      'VISCUSO Vincenzo',
      'FRANCHI Giuseppe',
      'FALCONI Daniela',
      'GIAI Enrica',
      'LO GIUDICE Marco',
      'LUCIANI Pier Franco',
      'PISANO Claudio',
      'SOAVE Alessandro',
      'RABELLINO Marco',
      'PRONZATO Maria Luciana'
    ]
  },
  'futura': {
    title: 'Venaria Futura',
    names: [
      'IORIO Giovanni Pio',
      'CUSANNO Carlotta',
      'CALÒ Maurizio',
      'MANTOVANI Elisabetta',
      'PISTILLO Giuseppina',
      'LACIVITA Nicola',
      'PUGLIESE Iris',
      'BONANNO Stefania',
      'PARRACINO Giovanna',
      'LANZILLOTTA Margherita',
      'BERNARDINELLO Margherita',
      'ALFONSO Francesco',
      'SALVEMINI Sabina',
      'SALVAGUARDIA Pietro'
    ]
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
