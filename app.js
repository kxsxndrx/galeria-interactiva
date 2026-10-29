const destinations = [
  {
    id: 1,
    title: "Cañón del Colca",
    category: "aventura",
    location: "Arequipa, Perú",
    rating: "4.9",
    description: "Uno de los cañones más profundos del planeta, mirador natural del vuelo del cóndor andino.",
    altitude: "3,635 m.s.n.m.",
    duration: "2 a 3 Días",
    difficulty: "Moderada",
    image: "https://denomades.imgix.net/destinos/arequipa/366/mirador-canon-del-colca.jpg",
    details: "El Cañón del Colca ofrece una experiencia inigualable con sus terrazas agrícolas preincas, aguas termales medicinales y el avistamiento del cóndor en la Cruz del Cóndor."
  },
  {
    id: 2,
    title: "Santuario de Machu Picchu",
    category: "cultural",
    location: "Cusco, Perú",
    rating: "5.0",
    description: "Obra maestra de ingeniería y arquitectura inca enclavada entre picos selváticos.",
    altitude: "2,430 m.s.n.m.",
    duration: "Full Day / 2 Días",
    difficulty: "Accesible",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSBIDZw1fKAkcegUSfhgPxE52W_FgLwGy9h7QF9iBMNw&s=10",
    details: "Reconocido mundialmente como una de las 7 Maravillas del Mundo Moderno. Combina senderos históricos, templos ceremoniales y vistas panorámicas únicas."
  },
  {
    id: 3,
    title: "Laguna Humantay",
    category: "naturaleza",
    location: "Cusco, Perú",
    rating: "4.8",
    description: "Espejo de agua color turquesa custodiado por el imponente nevado Salkantay.",
    altitude: "4,200 m.s.n.m.",
    duration: "1 Día",
    difficulty: "Exigente",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQTVJCcELDDlydmB6Ikq-J-okVOEWqsG3Zf6Mrx6Ii7yVnCVBqWF8ACipf&s=10",
    details: "Una caminata de montaña que premia al viajero con uno de los paisajes más fotogénicos de la cordillera andina."
  },
  {
    id: 4,
    title: "Valle de las Cataratas (Gocta)",
    category: "naturaleza",
    location: "Amazonas, Perú",
    rating: "4.9",
    description: "Una de las caídas de agua más altas del mundo oculta en el bosque de neblina.",
    altitude: "1,800 m.s.n.m.",
    duration: "Full Day",
    difficulty: "Moderada",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDldTvfJ0QVHAJjA4CivhfCncOpFmhO90Kq4hWGfnQNP9pEB5hOJUFC7f1&s=10",
    details: "Con 771 metros de caída libre en dos saltos, el sendero hacia Gocta alberga especies emblemáticas como el gallito de las rocas y monos choro."
  },
  {
    id: 5,
    title: "Oasis de Huacachina",
    category: "aventura",
    location: "Ica, Perú",
    rating: "4.7",
    description: "Laguna natural rodeada de palmeras en medio de las dunas más altas de Sudamérica.",
    altitude: "406 m.s.n.m.",
    duration: "1 a 2 Días",
    difficulty: "Fácil",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0Y42Ca3_MPhQhAyf6fc3myh_PGUm31XoOJcArIHLft18lLvvhpVTjRNf&s=10",
    details: "El paraíso del sandboarding y los paseos en tubulares 4x4 a toda velocidad con puestas de sol memorables."
  },
  {
    id: 6,
    title: "Complejo Arqueológico Kuélap",
    category: "cultural",
    location: "Luya, Amazonas",
    rating: "4.8",
    description: "Fortaleza monumental de piedra erigida en la cumbre por la civilización Chachapoyas.",
    altitude: "3,000 m.s.n.m.",
    duration: "Full Day",
    difficulty: "Fácil (Teleférico)",
    image: "https://denomades.imgix.net/destinos/chachapoyas/839/complejo-arqueologico-kuelap.jpg",
    details: "Con murallas de hasta 20 metros de altura, alberga cientos de estructuras circulares con tallados geométricos misteriosos."
  }
];

const galleryGrid = document.getElementById('galleryGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const modalOverlay = document.getElementById('modalOverlay');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

function renderGallery(items) {
  galleryGrid.innerHTML = items.map(dest => `
    <article class="destination-card" data-category="${dest.category}" onclick="openDetails(${dest.id})">
      <div class="card-banner">
        <div class="card-badges">
          <span class="category-tag">${dest.category}</span>
          <div class="rating-badge">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            ${dest.rating}
          </div>
        </div>
        <img src="${dest.image}" alt="${dest.title}" loading="lazy">
        <div class="card-overlay"></div>
      </div>

      <div class="card-content">
        <div class="location-meta">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          ${dest.location}
        </div>
        
        <h3 class="card-title">${dest.title}</h3>
        <p class="card-description">${dest.description}</p>

        <div class="card-reveal-box">
          <div class="reveal-item">
            <span>Altitud</span>
            <strong>${dest.altitude}</strong>
          </div>
          <div class="reveal-item">
            <span>Dificultad</span>
            <strong>${dest.difficulty}</strong>
          </div>
        </div>

        <button class="card-btn" aria-label="Explorar detalles">
          <span>Explorar destino</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </article>
  `).join('');
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const category = btn.dataset.filter;
    if (category === 'all') {
      renderGallery(destinations);
    } else {
      const filtered = destinations.filter(d => d.category === category);
      renderGallery(filtered);
    }
  });
});

function openDetails(id) {
  const dest = destinations.find(d => d.id === id);
  if (!dest) return;

  modalBody.innerHTML = `
    <div style="position: relative; height: 260px; overflow: hidden;">
      <img src="${dest.image}" style="width: 100%; height: 100%; object-fit: cover;">
      <div style="position: absolute; inset: 0; background: linear-gradient(180deg, transparent 40%, rgba(17, 24, 39, 0.95) 100%);"></div>
    </div>
    <div style="padding: 1.8rem;">
      <div style="color: var(--cyan); font-size: 0.85rem; font-weight: 600; margin-bottom: 0.4rem;">${dest.location}</div>
      <h2 style="font-size: 1.7rem; font-weight: 800; margin-bottom: 0.8rem; color: #fff;">${dest.title}</h2>
      <p style="color: var(--text-muted); line-height: 1.6; margin-bottom: 1.5rem;">${dest.details}</p>
      
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; background: rgba(255,255,255,0.03); padding: 1rem; border-radius: 12px; border: 1px solid var(--border-card);">
        <div>
          <span style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase;">Duración</span>
          <div style="font-weight: 700; color: #fff; font-size: 0.9rem;">${dest.duration}</div>
        </div>
        <div>
          <span style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase;">Altitud</span>
          <div style="font-weight: 700; color: #fff; font-size: 0.9rem;">${dest.altitude}</div>
        </div>
        <div>
          <span style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase;">Dificultad</span>
          <div style="font-weight: 700; color: #fff; font-size: 0.9rem;">${dest.difficulty}</div>
        </div>
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
}

closeModal.addEventListener('click', () => modalOverlay.classList.remove('active'));

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) modalOverlay.classList.remove('active');
});

document.addEventListener('DOMContentLoaded', () => {
  renderGallery(destinations);
});