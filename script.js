/* ==========================================
   PrintedMagic 3D — script.js
   ========================================== */

'use strict';

// ===== PRODUCTS DATA =====
const PRODUCTS = [
  {
    id: 1,
    name: 'Dragon Articulat',
    price: 89,
    description: 'Figurină dragon articulat, imprimată 3D cu precizie maximă.',
    fullDescription: 'Dragonul nostru articulat este o capodoperă a tehnologiei 3D. Fiecare segment al corpului este printat individual și asamblat cu grijă pentru a permite mișcări fluide și naturale. Ideal pentru colecționari sau ca obiect decorativ unic. Materiale premium PLA, vopsit manual la cerere.',
    image: 'images/Macheta.jpeg',
    images: ['images/Macheta.png', 'images/Rame.png', 'images/Cutie_Banca1.jpeg'],
    imageBase: 'dragon',
    imageCount: 3,
    dimensions: '28 × 8 × 6 cm',
    material: 'PLA Premium',
    category: 'figurine',
    badge: 'Bestseller',
  },
  {
    id: 2,
    name: 'Vază Geometrică',
    price: 75,
    description: 'Vază modernistă cu design geometric, perfectă pentru orice ambient.',
    fullDescription: 'Inspirată din arhitectura brutalismului modern, vaza noastră geometrică aduce un accent vizual puternic în orice încăpere. Structura hexagonală permite flori sau ramuri uscate să fie expuse într-un mod dramatic și memorabil. Disponibilă în 6 culori.',
    images: ['images/Cutie_CopaculVietii1.jpeg', 'images/Cutie_CopaculVietii2.jpeg', 'images/Cutie_PNL1.jpeg'],
    imageBase: 'vaza',
    imageCount: 3,
    dimensions: '15 × 15 × 24 cm',
    material: 'PETG Mat',
    category: 'decoratii',
    badge: 'New',
  },
  {
    id: 3,
    name: 'Organizator Craniu',
    price: 65,
    description: 'Organizator de birou în formă de craniu, stilul gothic modern.',
    fullDescription: 'Un organizator de birou care spune ceva despre personalitatea ta. Craniul stilizat ascunde în interior compartimente pentru pixuri, creioane, foarfece și mici accesorii. Design gotic modern, finisaj mat premium. Conversieul perfectă între funcționalitate și estetică.',
    images: ['images/Cutie_Justitie1.png', 'images/Cutie_Justitie2.jpeg', 'images/CutiePorr1.jpeg'],
    imageBase: 'organizator-craniu',
    imageCount: 3,
    dimensions: '14 × 11 × 16 cm',
    material: 'PLA Mat',
    category: 'organizare',
    badge: null,
  },
  {
    id: 4,
    name: 'Șarpe Articulat',
    price: 45,
    description: 'Jucărie articulată în formă de șarpe, fascinantă la orice vârstă.',
    fullDescription: 'Șarpele nostru articulat este o jucărie antistres și un obiect decorativ totodată. Cu 24 de segmente imprimate individual și asamblate cu pini speciali, permite mișcări extrem de fluide și realiste. Perfect cadou pentru copii sau adulți în egală măsură.',
    images: ['images/CutiePorr2.jpeg', 'images/CutieBanca4.jpeg', 'images/CutieBanca5.jpeg'],
    imageBase: 'sarpe',
    imageCount: 3,
    dimensions: '45 × 4 × 4 cm',
    material: 'PLA Flexibil',
    category: 'jucarii',
    badge: null,
  },
  {
    id: 5,
    name: 'Mandală Decorativă',
    price: 95,
    description: 'Mandală pentru perete cu detalii intricate imprimate în 3D.',
    fullDescription: 'O operă de artă geometrică pentru pereții tăi. Mandala noastră 3D este imprimată în mai multe straturi care se asamblează creând un efect de adâncime vizuală impresionant. Designul simetric produce umbre fascinante în lumina naturală. Se montează simplu cu cuie sau lipici special.',
    images: ['images/Cutie_Banca1.jpeg', 'images/Cutie_Banca2.jpeg', 'images/Cutie_Banca3.jpeg'],
    imageBase: 'mandala',
    imageCount: 3,
    dimensions: '40 × 40 × 3 cm',
    material: 'PLA Alb/Crem',
    category: 'decoratii',
    badge: 'Popular',
  },
  {
    id: 6,
    name: 'Stand Telefon Minimalist',
    price: 35,
    description: 'Suport ergonomic pentru telefon, design minimalist scandinav.',
    fullDescription: 'Un suport de telefon care se pliază frumos în orice birou modern. Unghiul de 70° este optim pentru vizionarea conținutului sau apeluri video. Suprafața inferioară are inserții de silicon anti-alunecare incluse. Compatibil cu toate telefoanele de până la 7 inch.',
    images: ['images/Rame.png', 'images/Macheta.jpeg', 'images/CutiePorr1.jpeg'],
    imageBase: 'stand-telefon',
    imageCount: 3,
    dimensions: '9 × 7 × 10 cm',
    material: 'PLA + Silicon',
    category: 'accesorii',
    badge: null,
  },
  {
    id: 7,
    name: 'Păianjen Mecanic',
    price: 120,
    description: 'Sculptură mecanică de păianjen cu picioare articulate, obiect de colecție.',
    fullDescription: 'Inspirat din steampunk, păianjenul nostru mecanic este o sculptură complexă cu 8 picioare complet articulate, corp segmentat și detalii fine gravate manual digital. Fiecare exemplar este unic — vopsite manual cu efecte de metal oxidat auriu-bronz. Piesă exclusivă de colecție.',
    images: ['images/Cutie_CopaculVietii1.jpeg', 'images/Cutie_CopaculVietii2.jpeg', 'images/Cutie_PNL2.jpeg'],
    imageBase: 'paianjen',
    imageCount: 3,
    dimensions: '22 × 18 × 12 cm',
    material: 'PLA + Rășină',
    category: 'figurine',
    badge: 'Exclusiv',
  },
  {
    id: 8,
    name: 'Ghiveci Suculente',
    price: 55,
    description: 'Ghiveci geometric pentru succulente, set de 3 bucăți.',
    fullDescription: 'Un set de 3 ghivece geometrice cu fețe poligonale pentru succulente sau cactuși. Fiecare ghiveci are un orificiu de drenaj integrat și vine cu o farfurioară. Disponibil în variante individuale sau seturi coordonate ca accent de culoare. Design geometric premium.',
    images: ['images/Cutie_Banca2.jpeg', 'images/Cutie_Banca3.jpeg', 'images/CutieBanca4.jpeg'],
    imageBase: 'ghiveci-suculente',
    imageCount: 3,
    dimensions: '10 × 10 × 12 cm (fiecare)',
    material: 'PLA Ecologic',
    category: 'decoratii',
    badge: 'Set',
  },
  {
    id: 9,
    name: 'Set Șah Artizanal',
    price: 145,
    description: 'Set complet de șah cu piese imprimate 3D, ediție limitată.',
    fullDescription: 'Un set de șah complet, cu 32 de piese imprimate individual în design neo-modern. Regele măsoară 8 cm, celelalte piese proporțional. Tabla este din lemn de fag și se comandă separat sau în pachet. Piesele albe sunt în PLA alb lapte, cele negre în PLA antracit mat. Ediție limitată 50 de seturi.',
    images: ['images/Cutie_Justitie1.png', 'images/Cutie_Justitie2.jpeg', 'images/CutiePorr2.jpeg'],
    imageBase: 'set-sah',
    imageCount: 3,
    dimensions: '32 piese, Rege: 8cm',
    material: 'PLA Bicolor',
    category: 'jucarii',
    badge: 'Limitat',
  },
];

function isImagePath(src) {
  return typeof src === 'string' && /^(?:\.\.|\.|\/|https?:\/\/|images\/)/i.test(src);
}

function normalizeImagePath(src) {
  if (typeof src !== 'string') return src;
  const cleaned = src.trim().replace(/^\//, '');
  return cleaned;
}

function normalizeProductImages() {
  PRODUCTS.forEach(product => {
    if (Array.isArray(product.images) && product.images.length && isImagePath(product.images[0])) {
      product.images = product.images.map(normalizeImagePath);
      return;
    }

    const base = (product.imageBase || product.name)
      .toString()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '') || 'product';

    const count = Number(product.imageCount) || 4;
    product.images = Array.from({ length: count }, (_, i) => `images/${base}${i + 1}.jpg`);
  });
}

function getProductImages(product) {
  if (!product) return [];
  normalizeProductImages();
  return Array.isArray(product.images) ? product.images : [];
}

function formatImageTag(src, alt = '') {
  if (isImagePath(src)) {
    const normalizedSrc = normalizeImagePath(src);
    const fallbackSrc = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22 viewBox=%220 0 120 120%22%3E%3Crect width=%22120%22 height=%22120%22 fill=%22%23eee%22/%3E%3Ctext x=%2260%22 y=%2268%22 font-size=%2212%22 text-anchor=%22middle%22 fill=%22%23999%22%3EImagine%20lipse%C8%99te%3C/text%3E%3C/svg%3E';
    return `<img src="${normalizedSrc}" alt="${alt}" loading="lazy" onerror="this.onerror=null;this.src='${fallbackSrc}';">`;
  }
  return `<span class="emoji-fallback" aria-hidden="true">${src}</span>`;
}

// ===== CART =====
const CART_KEY = 'printedmagic_cart';

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const cart = getCart();
  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: getProductImages(product)[0],
      quantity,
    });
  }

  saveCart(cart);
  showToast(`✓ "${product.name}" adăugat în coș`);

  // Pulse animation on cart badge
  const badge = document.querySelector('.cart-count');
  if (badge) {
    badge.classList.remove('pulse');
    void badge.offsetWidth; // reflow
    badge.classList.add('pulse');
  }
}

function removeFromCart(productId) {
  const cart = getCart().filter(i => i.id !== productId);
  saveCart(cart);
  renderCartItems();
}

function updateCartQty(productId, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.quantity = Math.max(1, item.quantity + delta);
  saveCart(cart);
  renderCartItems();
}

function getCartTotal() {
  return getCart().reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

function updateCartBadge() {
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = getCartCount();
  });
}

// ===== TOAST =====
function showToast(message, duration = 3200) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('exit');
    toast.addEventListener('animationend', () => toast.remove(), { once: true });
  }, duration);
}

// ===== MODALS =====
function createOverlay(id) {
  let overlay = document.getElementById(id);
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = id;
    overlay.className = 'modal-overlay';
    document.body.appendChild(overlay);
  }
  return overlay;
}

function openOverlay(overlay) {
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeOverlay(overlay) {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ===== NAVBAR =====
function initNavbar() {
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// ===== SLIDER =====
let sliderIndex = 0;
let sliderTimer = null;

function initSlider() {
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.querySelector('.slider-dots');
  if (!slides.length || !dotsContainer) return;

  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  // Arrows
  document.querySelector('.slider-prev')?.addEventListener('click', () => {
    goToSlide((sliderIndex - 1 + slides.length) % slides.length);
  });
  document.querySelector('.slider-next')?.addEventListener('click', () => {
    goToSlide((sliderIndex + 1) % slides.length);
  });

  // Touch support
  let touchStartX = 0;
  const heroEl = document.querySelector('.hero');
  if (heroEl) {
    heroEl.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    heroEl.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 50) {
        goToSlide(dx < 0
          ? (sliderIndex + 1) % slides.length
          : (sliderIndex - 1 + slides.length) % slides.length);
      }
    });
  }

  startSliderAuto();
}

function goToSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.slider-dot');

  slides[sliderIndex].classList.remove('active');
  dots[sliderIndex]?.classList.remove('active');

  sliderIndex = index;

  slides[sliderIndex].classList.add('active');
  dots[sliderIndex]?.classList.add('active');

  resetSliderAuto();
}

function startSliderAuto() {
  sliderTimer = setInterval(() => {
    const slides = document.querySelectorAll('.slide');
    goToSlide((sliderIndex + 1) % slides.length);
  }, 6000);
}

function resetSliderAuto() {
  clearInterval(sliderTimer);
  startSliderAuto();
}

// ===== SEARCH =====
function initSearch() {
  const input = document.getElementById('searchInput');
  const dropdown = document.getElementById('searchDropdown');
  if (!input || !dropdown) return;

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { dropdown.classList.remove('open'); return; }

    const results = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    ).slice(0, 5);

    if (!results.length) { dropdown.classList.remove('open'); return; }

    dropdown.innerHTML = results.map(p => `
      <div class="search-result-item" data-id="${p.id}">
        <div class="search-result-thumb">${formatImageTag(getProductImages(p)[0], p.name)}</div>
        <div>
          <div class="search-result-name">${p.name}</div>
          <div class="search-result-price">${p.price} RON</div>
        </div>
      </div>
    `).join('');

    dropdown.querySelectorAll('.search-result-item').forEach(el => {
      el.addEventListener('click', () => {
        openProductModal(+el.dataset.id);
        dropdown.classList.remove('open');
        input.value = '';
      });
    });

    dropdown.classList.add('open');
  });

  document.addEventListener('click', e => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });
}

// ===== RENDER PRODUCTS =====
function renderProducts(list = PRODUCTS) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  grid.innerHTML = list.map((p, i) => `
    <div class="product-card scroll-reveal delay-${(i % 3) + 1}" data-id="${p.id}" role="article" aria-label="${p.name}">
      <div class="product-card-image">
        <div class="product-card-image-inner">${formatImageTag(getProductImages(p)[0], p.name)}</div>
        ${p.badge ? `<span class="product-badge ${p.badge === 'New' ? 'new' : ''}">${p.badge}</span>` : ''}
      </div>
      <div class="product-card-body">
        <h3 class="product-card-name">${p.name}</h3>
        <p class="product-card-desc">${p.description}</p>
        <div class="product-card-footer">
          <div class="product-card-price">${p.price}<span>RON</span></div>
          <button class="btn-add-cart" data-id="${p.id}" aria-label="Adaugă ${p.name} în coș">
            + Coș
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Click handlers
  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', e => {
      if (!e.target.closest('.btn-add-cart')) {
        openProductModal(+card.dataset.id);
      }
    });
  });

  grid.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      addToCart(+btn.dataset.id, 1);
    });
  });

  // Trigger scroll animations after a small delay
  setTimeout(initScrollReveal, 100);
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
  const els = document.querySelectorAll('.scroll-reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}

// ===== PRODUCT MODAL =====
let currentProductId = null;
let currentImageIndex = 0;

function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  currentProductId = productId;
  currentImageIndex = 0;

  let overlay = document.getElementById('productModalOverlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'productModalOverlay';
    overlay.className = 'modal-overlay';
    overlay.innerHTML = buildProductModalHTML();
    document.body.appendChild(overlay);

    // Close on backdrop
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeProductModal();
    });

    overlay.querySelector('#pmClose').addEventListener('click', closeProductModal);
    overlay.querySelector('#pmPrev').addEventListener('click', () => changeProductImage(-1));
    overlay.querySelector('#pmNext').addEventListener('click', () => changeProductImage(1));
    overlay.querySelector('#pmDecrement').addEventListener('click', () => changeQty(-1));
    overlay.querySelector('#pmIncrement').addEventListener('click', () => changeQty(1));
    overlay.querySelector('#pmQty').addEventListener('change', e => {
      e.target.value = Math.max(1, parseInt(e.target.value) || 1);
    });
    overlay.querySelector('#pmAddToCart').addEventListener('click', () => {
      const qty = parseInt(overlay.querySelector('#pmQty').value) || 1;
      addToCart(currentProductId, qty);
    });
  }

  populateProductModal(product);
  renderRecommended(productId);
  openOverlay(overlay);
}

function buildProductModalHTML() {
  return `
    <div class="modal modal-lg">
      <button class="modal-close" id="pmClose">✕</button>
      <div class="product-modal-body">
        <div class="product-modal-gallery">
          <button class="gallery-nav gallery-prev" id="pmPrev" aria-label="Imagine anterioară">❮</button>
          <div class="product-modal-main-img" id="pmMainImg"></div>
          <button class="gallery-nav gallery-next" id="pmNext" aria-label="Imagine următoare">❯</button>
          <div class="product-modal-thumbs" id="pmThumbs"></div>
        </div>
        <div class="product-modal-info">
          <h2 class="product-modal-name" id="pmName"></h2>
          <div class="product-modal-price" id="pmPrice"></div>
          <div class="product-specs" id="pmSpecs"></div>
          <p class="product-modal-desc" id="pmDesc"></p>
          <div class="quantity-row">
            <span class="qty-label">Cantitate</span>
            <div class="qty-control">
              <button class="qty-btn" id="pmDecrement">−</button>
              <input class="qty-input" type="number" id="pmQty" value="1" min="1">
              <button class="qty-btn" id="pmIncrement">+</button>
            </div>
          </div>
          <button class="btn btn-primary btn-lg" id="pmAddToCart">+ Adaugă în Coș</button>
        </div>
      </div>
      <div class="recommended-section">
        <h3 class="recommended-title">S-ar putea să îți placă și…</h3>
        <div class="recommended-grid" id="pmRecommended"></div>
      </div>
    </div>
  `;
}

function populateProductModal(product) {
  const overlay = document.getElementById('productModalOverlay');
  if (!overlay) return;

  overlay.querySelector('#pmName').textContent = product.name;
  overlay.querySelector('#pmPrice').innerHTML = `${product.price} <small>RON</small>`;
  overlay.querySelector('#pmDesc').textContent = product.fullDescription;
  overlay.querySelector('#pmQty').value = 1;

  overlay.querySelector('#pmSpecs').innerHTML = `
    <div class="spec-row"><span class="spec-label">Dimensiuni</span><span class="spec-val">${product.dimensions}</span></div>
    <div class="spec-row"><span class="spec-label">Material</span><span class="spec-val">${product.material}</span></div>
    <div class="spec-row"><span class="spec-label">Categorie</span><span class="spec-val" style="text-transform:capitalize">${product.category}</span></div>
  `;

  const productImages = getProductImages(product);

  // Main image
  const mainImg = overlay.querySelector('#pmMainImg');
  mainImg.innerHTML = `<div class="pm-image-frame">${formatImageTag(productImages[currentImageIndex] || productImages[0], product.name)}</div>`;

  // Thumbnails
  const thumbsContainer = overlay.querySelector('#pmThumbs');
  thumbsContainer.innerHTML = productImages.map((img, i) => `
    <div class="product-modal-thumb ${i === currentImageIndex ? 'active' : ''}" data-index="${i}">${formatImageTag(img, `${product.name} miniatura ${i + 1}`)}</div>
  `).join('');

  thumbsContainer.querySelectorAll('.product-modal-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const idx = +thumb.dataset.index;
      currentImageIndex = idx;
      updateProductModalImage(product);
    });
  });
}

function updateProductModalImage(product) {
  const overlay = document.getElementById('productModalOverlay');
  if (!overlay) return;
  const mainImg = overlay.querySelector('#pmMainImg');
  const thumbnails = overlay.querySelectorAll('.product-modal-thumb');
  const productImages = getProductImages(product);

  const imageSrc = productImages[currentImageIndex] || productImages[0];
  if (mainImg) {
    mainImg.innerHTML = `<div class="pm-image-frame">${formatImageTag(imageSrc, product.name)}</div>`;
  }

  thumbnails.forEach((thumb, idx) => {
    thumb.classList.toggle('active', idx === currentImageIndex);
  });
}

function changeProductImage(delta) {
  const product = PRODUCTS.find(p => p.id === currentProductId);
  if (!product) return;
  const images = getProductImages(product);
  currentImageIndex = (currentImageIndex + delta + images.length) % images.length;
  updateProductModalImage(product);
}

function renderRecommended(currentId) {
  const container = document.getElementById('pmRecommended');
  if (!container) return;

  const recommended = PRODUCTS
    .filter(p => p.id !== currentId)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  container.innerHTML = recommended.map(p => `
    <div class="recommended-card" data-id="${p.id}">
      <div class="recommended-thumb">${formatImageTag(getProductImages(p)[0], p.name)}</div>
      <div class="recommended-info">
        <div class="recommended-name">${p.name}</div>
        <div class="recommended-price">${p.price} RON</div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.recommended-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = +card.dataset.id;
      const product = PRODUCTS.find(p => p.id === id);
      if (!product) return;
      currentProductId = id;
      currentImageIndex = 0;
      populateProductModal(product);
      renderRecommended(id);
    });
  });
}

function changeQty(delta) {
  const input = document.getElementById('pmQty');
  if (!input) return;
  input.value = Math.max(1, (parseInt(input.value) || 1) + delta);
}

function closeProductModal() {
  const overlay = document.getElementById('productModalOverlay');
  if (overlay) closeOverlay(overlay);
}

// ===== CART MODAL =====
function initCartModal() {
  const cartBtn = document.querySelector('.cart-btn');
  if (!cartBtn) return;

  let overlay = document.getElementById('cartModalOverlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'cartModalOverlay';
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
      <div class="modal modal-md">
        <div class="cart-modal-header">
          <h2>Coșul Tău</h2>
          <button class="modal-close" id="cartClose">✕</button>
        </div>
        <div class="cart-modal-body" id="cartBody"></div>
        <div class="cart-modal-footer" id="cartFooter"></div>
      </div>
    `;
    document.body.appendChild(overlay);

    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeOverlay(overlay);
    });
    overlay.querySelector('#cartClose').addEventListener('click', () => closeOverlay(overlay));
  }

  cartBtn.addEventListener('click', () => {
    renderCartItems();
    openOverlay(overlay);
  });
}

function renderCartItems() {
  const body = document.getElementById('cartBody');
  const footer = document.getElementById('cartFooter');
  if (!body || !footer) return;

  const cart = getCart();

  if (!cart.length) {
    body.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <p>Coșul tău este gol.</p>
        <p style="margin-top:0.4rem;font-size:0.8rem">Explorează produsele noastre!</p>
      </div>
    `;
    footer.innerHTML = '';
    return;
  }

  body.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <div class="cart-item-thumb">${formatImageTag(item.image, item.name)}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${item.price} RON / buc</div>
      </div>
      <div class="cart-item-controls">
        <button class="cart-qty-btn" data-action="minus" data-id="${item.id}">−</button>
        <span class="cart-qty-num">${item.quantity}</span>
        <button class="cart-qty-btn" data-action="plus" data-id="${item.id}">+</button>
        <button class="cart-remove" data-id="${item.id}" title="Șterge">✕</button>
      </div>
    </div>
  `).join('');

  body.querySelectorAll('.cart-qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      updateCartQty(+btn.dataset.id, btn.dataset.action === 'plus' ? 1 : -1);
    });
  });

  body.querySelectorAll('.cart-remove').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(+btn.dataset.id));
  });

  footer.innerHTML = `
    <div>
      <div class="cart-total-label">Total Comandă</div>
      <div class="cart-total-amount">${getCartTotal()} RON</div>
    </div>
    <a href="order.html" class="btn btn-primary btn-lg" id="checkoutBtn">Finalizează Comanda →</a>
  `;
}

// ===== FEEDBACK POPUP =====
function initFeedbackPopup() {
  const openBtn = document.getElementById('openFeedbackPopup');
  const popup = document.getElementById('feedbackPopup');
  const closeBtn = document.getElementById('closeFeedbackPopup');
  const callBtn = document.getElementById('feedbackCall');
  const emailBtn = document.getElementById('feedbackEmail');

  if (!openBtn || !popup) return;

  openBtn.addEventListener('click', () => popup.classList.add('open'));
  closeBtn?.addEventListener('click', () => popup.classList.remove('open'));

  popup.addEventListener('click', e => {
    if (e.target === popup) popup.classList.remove('open');
  });

  callBtn?.addEventListener('click', () => {
    popup.classList.remove('open');
    openChatbotModal();
  });

  emailBtn?.addEventListener('click', () => {
    window.location.href = 'mailto:info@printedmagic.ro?subject=Solicitare Produs Personalizat';
    popup.classList.remove('open');
  });
}

// ===== CHATBOT =====
function openChatbotModal() {
  const modal = document.getElementById('chatbotModal');
  if (!modal) return;

  modal.classList.add('open');
  initChatbot();
}

function closeChatbotModal() {
  const modal = document.getElementById('chatbotModal');
  if (modal) modal.classList.remove('open');
}

function initChatbot() {
  const messages = document.getElementById('chatbotMessages');
  const input = document.getElementById('chatbotInput');
  const sendBtn = document.getElementById('chatbotSend');
  const closeBtn = document.getElementById('closeChatbotModal');

  if (!messages || !input || !sendBtn) return;

  // Clear previous messages
  messages.innerHTML = '';

  // Welcome message
  addMessage('bot', 'Salut! Sunt asistentul AI al PrintedMagic 3D. Cum te pot ajuta astăzi? Poți întreba despre produse, comenzi sau personalizări.');

  // Event listeners
  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keypress', e => {
    if (e.key === 'Enter') sendMessage();
  });

  closeBtn?.addEventListener('click', closeChatbotModal);

  const modal = document.getElementById('chatbotModal');
  modal?.addEventListener('click', e => {
    if (e.target === modal) closeChatbotModal();
  });

  function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    addMessage('user', text);
    input.value = '';

    // Simulate typing
    setTimeout(() => {
      const response = getChatbotResponse(text);
      addMessage('bot', response);
    }, 500 + Math.random() * 1000);
  }

  function addMessage(sender, text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `chatbot-message ${sender}`;
    msgDiv.textContent = text;
    messages.appendChild(msgDiv);
    messages.scrollTop = messages.scrollHeight;
  }
}

function getChatbotResponse(message) {
  const msg = message.toLowerCase();

  if (msg.includes('salut') || msg.includes('bună') || msg.includes('hello')) {
    return 'Salut! Ce întrebare ai despre produsele noastre 3D?';
  }

  if (msg.includes('produs') || msg.includes('ce aveți') || msg.includes('colecție')) {
    return 'Avem o colecție variată: Dragon Articulat, Vază Geometrică, Organizator Craniu, Șarpe Articulat, Mandală Decorativă, Stand Telefon, Păianjen Mecanic, Ghiveci Suculente și Set Șah Artizanal. Care te interesează?';
  }

  if (msg.includes('comand') || msg.includes('cum comand') || msg.includes('cumpăr')) {
    return 'Pentru a comanda, adaugă produsele în coș și finalizează comanda pe pagina de comandă. Livrăm în 2-4 zile pe toată România!';
  }

  if (msg.includes('preț') || msg.includes('cost')) {
    return 'Prețurile variază: de la 35 RON pentru Stand Telefon până la 145 RON pentru Set Șah. Vezi detalii pe fiecare produs.';
  }

  if (msg.includes('personaliz') || msg.includes('custom')) {
    return 'Da, oferim personalizare completă! Culori, dimensiuni, forme - orice îți imaginezi. Contactează-ne pentru detalii.';
  }

  if (msg.includes('livrar') || msg.includes('transport')) {
    return 'Livrăm rapid în 2-4 zile cu ambalaj profesional pe toată România. Costul transportului este inclus în preț.';
  }

  if (msg.includes('coș') || msg.includes('cart')) {
    const cart = getCart();
    if (cart.length === 0) {
      return 'Coșul tău este gol. Adaugă produse pentru a începe comanda!';
    } else {
      const total = getCartTotal();
      return `Ai ${getCartCount()} produse în coș, total ${total} RON. Vrei să finalizezi comanda?`;
    }
  }

  if (msg.includes('adaug') && msg.includes('coș')) {
    // Simple add to cart simulation
    return 'Spune-mi numele produsului și cantitatea pentru a-l adăuga în coș. De exemplu: "Adaugă Dragon Articulat x2"';
  }

  if (msg.includes('dragon') || msg.includes('șarpe') || msg.includes('vază') || msg.includes('mandală')) {
    return 'Acesta este un produs popular! Poți vedea detalii și imagini pe pagina principală. Vrei să-l adaug în coș?';
  }

  if (msg.includes('mulțumesc') || msg.includes('thanks')) {
    return 'Cu plăcere! Dacă ai alte întrebări, sunt aici.';
  }

  if (msg.includes('la revedere') || msg.includes('bye')) {
    return 'La revedere! Sper să te văd curând cu o comandă.';
  }

  return 'Îmi pare rău, nu am înțeles. Poți reformula întrebarea? Sau întreabă despre produse, comenzi sau livrare.';
}

// ===== ORDER PAGE =====
function initOrderPage() {
  const summaryContainer = document.getElementById('summaryItems');
  const summaryTotal = document.getElementById('summaryTotal');
  const form = document.getElementById('orderForm');
  const formWrapper = document.getElementById('orderFormWrapper');
  const successEl = document.getElementById('orderSuccess');

  const cart = getCart();

  if (summaryContainer) {
    if (!cart.length) {
      summaryContainer.innerHTML = `<p style="font-size:0.85rem;color:var(--text-muted);padding:1rem 0">Coșul este gol. <a href="index.html" style="color:var(--accent)">Înapoi la produse →</a></p>`;
    } else {
      summaryContainer.innerHTML = cart.map(item => `
        <div class="summary-item">
          <div class="summary-thumb">${formatImageTag(item.image, item.name)}</div>
          <div class="summary-item-info">
            <div class="summary-item-name">${item.name}</div>
            <div class="summary-item-qty">× ${item.quantity}</div>
          </div>
          <div class="summary-item-price">${item.price * item.quantity} RON</div>
        </div>
      `).join('');
    }
  }

  if (summaryTotal) {
    summaryTotal.textContent = `${getCartTotal()} RON`;
  }

  form?.addEventListener('submit', e => {
    e.preventDefault();
    if (!getCart().length) {
      showToast('⚠️ Coșul tău este gol!');
      return;
    }

    // Simulate order
    saveCart([]);
    updateCartBadge();

    if (formWrapper && successEl) {
      formWrapper.style.display = 'none';
      successEl.classList.add('show');
    }
  });
}

// ===== ABOUT PAGE — REVIEWS =====
function initReviewForm() {
  const form = document.getElementById('reviewForm');
  const starContainer = document.querySelector('.star-rating');
  const reviewsList = document.getElementById('reviewsList');
  const imageInput = document.getElementById('reviewImages');
  const previewContainer = document.getElementById('imagePreview');
  let selectedRating = 0;
  let selectedImages = [];

  if (!form) return;

  // Stars
  if (starContainer) {
    const stars = starContainer.querySelectorAll('.star');
    stars.forEach(star => {
      star.addEventListener('mouseenter', () => {
        const val = +star.dataset.val;
        stars.forEach(s => s.classList.toggle('active', +s.dataset.val <= val));
      });
      star.addEventListener('mouseleave', () => {
        stars.forEach(s => s.classList.toggle('active', +s.dataset.val <= selectedRating));
      });
      star.addEventListener('click', () => {
        selectedRating = +star.dataset.val;
        stars.forEach(s => s.classList.toggle('active', +s.dataset.val <= selectedRating));
      });
    });
  }

  // Image upload
  if (imageInput && previewContainer) {
    imageInput.addEventListener('change', () => {
      const files = Array.from(imageInput.files).slice(0, 3);
      selectedImages = files;
      previewContainer.innerHTML = '';
      files.forEach(file => {
        const reader = new FileReader();
        reader.onload = e => {
          const img = document.createElement('img');
          img.src = e.target.result;
          img.className = 'review-preview-img';
          previewContainer.appendChild(img);
        };
        reader.readAsDataURL(file);
      });
    });
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!selectedRating) {
      showToast('⚠️ Selectează un rating (1-5 stele)');
      return;
    }

    const name = document.getElementById('reviewName').value.trim();
    const product = document.getElementById('reviewProduct').value.trim();
    const comment = document.getElementById('reviewComment').value.trim();

    const reviewCard = document.createElement('div');
    reviewCard.className = 'review-card';
    reviewCard.innerHTML = `
      <div class="review-card-header">
        <div class="review-avatar">${name.charAt(0).toUpperCase()}</div>
        <div class="review-meta">
          <div class="review-author">${name}</div>
          <div class="review-product">${product}</div>
        </div>
      </div>
      <div class="review-stars">${'⭐'.repeat(selectedRating)}${'☆'.repeat(5 - selectedRating)}</div>
      ${comment ? `<p class="review-text">${comment}</p>` : ''}
    `;

    if (selectedImages.length && previewContainer) {
      const imgs = previewContainer.querySelectorAll('.review-preview-img');
      if (imgs.length) {
        const imgRow = document.createElement('div');
        imgRow.className = 'review-imgs';
        imgs.forEach(img => {
          const clone = img.cloneNode();
          clone.className = 'review-img';
          imgRow.appendChild(clone);
        });
        reviewCard.appendChild(imgRow);
      }
    }

    if (reviewsList) {
      reviewsList.insertBefore(reviewCard, reviewsList.firstChild);
    }

    form.reset();
    selectedRating = 0;
    selectedImages = [];
    if (previewContainer) previewContainer.innerHTML = '';
    document.querySelectorAll('.star').forEach(s => s.classList.remove('active'));

    showToast('✓ Recenzia ta a fost adăugată!');
  });
}

// ===== KEYBOARD ACCESSIBILITY =====
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    ['productModalOverlay', 'cartModalOverlay', 'feedbackPopup'].forEach(id => {
      const el = document.getElementById(id);
      if (el?.classList.contains('open')) {
        el.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }
});

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  const isIndex = !!document.getElementById('productsGrid');
  const isOrder = !!document.getElementById('orderForm');
  const isAbout = !!document.getElementById('reviewForm');

  // Always
  initNavbar();
  updateCartBadge();

  // Index page
  if (isIndex) {
    renderProducts();
    initSlider();
    initSearch();
    initFeedbackPopup();
    initCartModal();
    initScrollReveal();
  }

  // Order page
  if (isOrder) {
    initOrderPage();
  }

  // About page
  if (isAbout) {
    initReviewForm();
    initScrollReveal();
  }

  // Scroll reveal for static elements
  setTimeout(initScrollReveal, 200);
});
