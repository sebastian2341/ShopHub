// Sample Products Database - 3D Printed Items
const products = [
    {
        id: 1,
        name: 'Machetă de interior 3D',
        price: 89.99,
        description: 'Machetă arhitecturală personalizată, finisaj detaliat. Ideală pentru prezentări și design de portfolio.',
        fullDescription: 'Această machetă 3D este imprimată cu precizie și se potrivește perfect în medii de expunere și design. Disponibilă în variante multiple și ușor de combinat cu alte produse.',
        image: 'images/Macheta.jpeg',
        images: ['images/Macheta.jpeg', 'images/Rame.png'],
        colors: [],
        dimensions: '15cm x 12cm x 10cm',
        material: 'PLA/PETG 3D Printed'
    },
    {
        id: 2,
        name: 'Ramă foto 3D personalizată',
        price: 45.99,
        description: 'Ramă foto imprimată 3D cu design modern, pentru cadouri și decor.',
        fullDescription: 'Această ramă 3D adaugă un accent profesional oricărui spațiu și este realizată din materiale durabile. Disponibilă în mai multe forme și finisaje.',
        image: 'images/Rame.png',
        images: ['images/Rame.png', 'images/Cutie_Banca1.jpeg'],
        colors: [],
        dimensions: '25cm x 15cm x 15cm',
        material: 'PLA 3D Printed'
    },
    {
        id: 3,
        name: 'Suport de birou multifuncțional',
        price: 24.99,
        description: 'Suport 3D pentru birou, perfect pentru organizare și dinamica stilului modern.',
        fullDescription: 'Design ergonomic, realizat din material rezistent; ideal pentru suport telefon sau accesorii mici.',
        image: 'images/CutiePorr1.jpeg',
        images: ['images/CutiePorr1.jpeg', 'images/CutiePorr2.jpeg'],
        colors: [],
        dimensions: '8cm x 10cm x 12cm',
        material: 'PLA 3D Printed'
    },
    {
        id: 4,
        name: 'Corp lumină 3D artizanal',
        price: 67.99,
        description: 'Lampă sculptată 3D, ambientă și elegantă, pentru birou sau living.',
        fullDescription: 'Cu design inspirat din natură, oferă iluminare și atmosferă plăcută. Ușor de instalat.',
        image: 'images/Cutie_CopaculVietii1.jpeg',
        images: ['images/Cutie_CopaculVietii1.jpeg', 'images/Cutie_CopaculVietii2.jpeg'],
        colors: [],
        dimensions: '15cm diametru bază x 30cm înălțime',
        material: 'PLA 3D + LED'
    },
    {
        id: 5,
        name: 'Organizator modular 3D',
        price: 34.99,
        description: 'Organizator de birou 3D cu compartimente pentru accesorii, ideal pentru un workspace curat.',
        fullDescription: 'Realizat din material rezistent, acest organizator oferă suport ergonomic pentru pixuri, note și accesorii.',
        image: 'images/CutieBanca4.jpeg',
        images: ['images/CutieBanca4.jpeg', 'images/CutieBanca5.jpeg'],
        colors: [],
        dimensions: '30cm x 20cm x 15cm',
        material: 'PLA 3D Printed'
    },
    {
        id: 6,
        name: 'Set decorativ de birou',
        price: 79.99,
        description: 'Set decorativ pentru birou, imitate obiecte artistice cu finisaj 3D premium.',
        fullDescription: 'Perfect pentru blocuri de note și accesorii, acest set combina utilitatea cu estetica.',
        image: 'images/Cutie_Justitie1.jpeg',
        images: ['images/Cutie_Justitie1.jpeg', 'images/Cutie_Justitie2.jpeg'],
        colors: [],
        dimensions: '25cm x 20cm x 30cm',
        material: 'PLA 3D Printed'
    },
    {
        id: 7,
        name: 'Raft modular de depozitare',
        price: 49.99,
        description: 'Raft modular 3D pentru birou sau raft, suport pentru cărți și accesorii.',
        fullDescription: 'Realizat din material durabil și design minimalist, potrivit pentru spații moderne.',
        image: 'images/Cutie_Banca2.jpeg',
        images: ['images/Cutie_Banca2.jpeg', 'images/Cutie_Banca3.jpeg'],
        colors: [],
        dimensions: '40cm x 20cm x 10cm',
        material: 'PLA 3D Printed'
    },
    {
        id: 8,
        name: 'Ghiveci decorativ 3D',
        price: 32.99,
        description: 'Ghiveci geometric imprimat 3D, rezistent și estetic pentru plante mici.',
        fullDescription: 'Perfect pentru a adăuga un accent modern locuinței, cu drenaj optim și design practic.',
        image: 'images/Cutie_PNL1.jpeg',
        images: ['images/Cutie_PNL1.jpeg', 'images/Cutie_PNL2.jpeg'],
        colors: [],
        dimensions: '15cm x 15cm x 15cm',
        material: 'PLA impermeabilizat'
    },
    {
        id: 9,
        name: 'Set de sculptură 3D',
        price: 28.99,
        description: 'Set decorativ compact pentru birou, format din piese 3D creative.',
        fullDescription: 'Acest set oferă o notă elegantă zonei de lucru și inspiră creativitate.',
        image: 'images/Cutie_Justitie2.jpeg',
        images: ['images/Cutie_Justitie2.jpeg', 'images/Macheta.jpeg'],
        colors: [],
        dimensions: '10cm x 8cm x 6cm',
        material: 'PLA/ABS 3D Printed'
    }
];

// Cart Management
let cart = [];
let displayedProducts = [];
let currentProductImages = [];
let currentProductImageIndex = 0;

const imageFallbackMap = {
    'Figurină Dragon 3D': ['images/Macheta.jpeg', 'images/Rame.png'],
    'Vază Decorativă Modernă': ['images/Rame.png', 'images/Cutie_Banca1.jpeg'],
    'Suport Telefon 3D': ['images/CutiePorr1.jpeg', 'images/CutiePorr2.jpeg'],
    'Lampa LED pentru Birou': ['images/Cutie_CopaculVietii1.jpeg', 'images/Cutie_CopaculVietii2.jpeg'],
    'Cutie de Organizare': ['images/CutieBanca4.jpeg', 'images/CutieBanca5.jpeg'],
    'Miniatură Castel': ['images/Cutie_Justitie1.jpeg', 'images/Cutie_Justitie2.jpeg'],
    'Raft de Perete Design': ['images/Cutie_Banca2.jpeg', 'images/Cutie_Banca3.jpeg'],
    'Plantă Decorativă Geo': ['images/Cutie_PNL1.jpeg', 'images/Cutie_PNL2.jpeg'],
    'Robot Fidget Toy': ['images/rp', 'images/Macheta.jpeg']
};

function getFallbackImages(productName) {
    const list = imageFallbackMap[productName];
    if (list && list.length > 0) {
        return list;
    }
    return ['images/Macheta.jpeg'];
}

function getSelectedImage(product) {
    if (product.image) return product.image;
    if (product.images && product.images.length > 0) return product.images[0];
    return getFallbackImages(product.name)[0];
}

function getImageGroupKey(imagePath) {
    const fileName = imagePath.split('/').pop() || '';
    const nameWithoutExt = fileName.split('.').slice(0, -1).join('.') || fileName;
    return nameWithoutExt.replace(/\d+$/, '').toLowerCase();
}

function mergeProductsByImageName(list) {
    const groups = {};

    list.forEach(product => {
        if (!product.images || product.images.length === 0) {
            return;
        }

        const key = getImageGroupKey(product.images[0]) || product.name.toLowerCase().replace(/\s+/g, '-');

        if (!groups[key]) {
            groups[key] = {
                ...product,
                id: product.id,
                images: Array.from(new Set(product.images)),
            };
        } else {
            const existing = groups[key];
            product.images.forEach(img => {
                if (!existing.images.includes(img)) {
                    existing.images.push(img);
                }
            });
        }
    });

    return Object.values(groups);
}

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('shoppingCart');
    cart = savedCart ? JSON.parse(savedCart) : [];
    updateCartCount();
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCartCount();
    showCartNotification('Produs adăugat în coș!');
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    displayCartItems();
}

// Update quantity
function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity = newQuantity;
        saveCart();
        displayCartItems();
    }
}

// Update cart count
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountEl = document.getElementById('cartCount');
    if (cartCountEl) {
        cartCountEl.textContent = count;
    }
}

// Display products on main page
function displayProducts() {
    displayedProducts = mergeProductsByImageName(products);
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    productsGrid.innerHTML = displayedProducts.map((product, index) => `
        <div class="product-card" style="animation-delay: ${index * 0.05}s" onclick="openProductModal(${product.id})">
            <div class="product-image">
                <img src="${getSelectedImage(product)}" alt="${product.name}" loading="lazy" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'280\' viewBox=\'0 0 400 280\'%3E%3Crect width=\'400\' height=\'280\' fill=\'%23f2f4f7\'/%3E%3Ctext x=\'50%\' y=\'50%\' fill=\'%23899dac\' font-size=\'14\' font-family=\'Arial, sans-serif\' text-anchor=\'middle\' dy=\'.35em\'%3EImagine indisponibilă%3C/text%3E%3C/svg%3E';">
            </div>
            <div class="product-content">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${product.price} RON</div>
                <button class="btn btn-primary btn-small" onclick="addToCart(${product.id}); event.stopPropagation();" style="box-shadow: 0 4px 6px rgba(15, 23, 42, 0.07);">
                    Adaugă în Coș
                </button>
            </div>
        </div>
    `).join('');
}

// Display cart items
function displayCartItems() {
    const cartItemsEl = document.getElementById('cartItems');
    if (!cartItemsEl) return;

    if (cart.length === 0) {
        cartItemsEl.innerHTML = '<p class="empty-cart">Coșul este gol</p>';
        document.getElementById('cartTotal').textContent = '0 RON';
        return;
    }

    const cartHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price} RON</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">X</button>
        </div>
    `).join('');

    cartItemsEl.innerHTML = cartHTML;

    // Calculate total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cartTotal').textContent = total + ' RON';
}

// Display order summary (on order page)
function displayOrderSummary() {
    const summaryEl = document.getElementById('summarySummary');
    if (!summaryEl) return;

    if (cart.length === 0) {
        document.location.href = 'index.html';
        return;
    }

    const summaryHTML = cart.map(item => `
        <div class="summary-item">
            <div class="summary-item-info">
                <div class="summary-item-name">${item.name}</div>
                <div class="summary-item-qty">Cantitate: ${item.quantity}</div>
            </div>
            <div class="summary-item-price">${item.price * item.quantity} RON</div>
        </div>
    `).join('');

    summaryEl.innerHTML = summaryHTML;

    // Calculate total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('summaryTotal').textContent = total + ' RON';
}

// Show notification - Modern Toast
function showCartNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'toast';
    notification.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: linear-gradient(135deg, #0F3460 0%, #1E3A8A 100%);
        color: white;
        padding: 1.5rem 2rem;
        border-radius: 10px;
        box-shadow: 0 20px 50px rgba(15, 23, 42, 0.12);
        z-index: 2000;
        animation: slideInRight 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        font-weight: 600;
        border-left: 4px solid #00D9FF;
        font-size: 0.95rem;
        max-width: 400px;
        backdrop-filter: blur(10px);
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Animate out and remove
    setTimeout(() => {
        notification.style.animation = 'slideInLeft 0.3s cubic-bezier(0.4, 0, 0.2, 1) reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Cart Modal Controls
function setupCartModal() {
    const cartBtn = document.getElementById('cartBtn');
    const cartModal = document.getElementById('cartModal');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    const productModal = document.getElementById('productModal');
    const closeProductBtn = document.getElementById('closeProductBtn');

    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            displayCartItems();
            cartModal.classList.add('show');
        });
    }

    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', () => {
            cartModal.classList.remove('show');
        });
    }

    if (closeProductBtn) {
        closeProductBtn.addEventListener('click', () => {
            productModal.classList.remove('show');
        });
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length > 0) {
                window.location.href = 'order.html';
            }
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.classList.remove('show');
        }
        if (event.target === productModal) {
            productModal.classList.remove('show');
        }
    });
}

// Order Form Submission
function setupOrderForm() {
    const orderForm = document.getElementById('orderForm');
    if (!orderForm) return;

    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            county: document.getElementById('county').value,
            city: document.getElementById('city').value,
            street: document.getElementById('street').value,
            notes: document.getElementById('notes').value,
            items: cart,
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            orderDate: new Date().toLocaleString('ro-RO')
        };

        // Save order to localStorage
        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        const orderId = 'ORD-' + Date.now();
        orders.push({
            id: orderId,
            ...formData
        });
        localStorage.setItem('orders', JSON.stringify(orders));

        // Show confirmation
        showOrderConfirmation(orderId, formData);
    });
}

// Show order confirmation
function showOrderConfirmation(orderId, formData) {
    // Save to database immediately
    saveOrderToDatabase(orderId, formData);

    const message = `
✅ COMANDĂ PLASATĂ CU SUCCES! ✅

ID Comandă: ${orderId}

━━━━━━━━━━━━━━━━━━━
DATE CLIENT:
━━━━━━━━━━━━━━━━━━━
${formData.firstName} ${formData.lastName}
${formData.street}
${formData.city}, ${formData.county}

Telefon: ${formData.phone}
Email: ${formData.email}

━━━━━━━━━━━━━━━━━━━
COMENZI PLASATE:
━━━━━━━━━━━━━━━━━━━
${formData.items.map(item => `• ${item.name} x${item.quantity} = ${item.price * item.quantity} RON`).join('\n')}

TOTAL: ${formData.total} RON
━━━━━━━━━━━━━━━━━━━

Vă mulțumim pentru achiziție!
Într-o vreme scurtă vă vor contacta pentru confirmare livrare.
    `;

    alert(message);

    // Clear cart
    cart = [];
    saveCart();

    // Redirect to main page
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

// Database Management - Save order to database
function saveOrderToDatabase(orderId, formData) {
    const databaseEntry = {
        orderId: orderId,
        orderDate: new Date().toLocaleString('ro-RO'),
        customer: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            phone: formData.phone,
            email: formData.email,
            address: {
                street: formData.street,
                city: formData.city,
                county: formData.county
            },
            notes: formData.notes
        },
        items: formData.items.map(item => ({
            productId: item.id,
            productName: item.name,
            quantity: item.quantity,
            unitPrice: item.price,
            totalPrice: item.price * item.quantity
        })),
        totalAmount: formData.total,
        status: 'pending_confirmation',
        paymentStatus: 'unpaid'
    };

    // 1. fallback localStorage for offline use
    let orders = JSON.parse(localStorage.getItem('ordersDatabase') || '[]');
    orders.push(databaseEntry);
    localStorage.setItem('ordersDatabase', JSON.stringify(orders));

    // 2. send to backend API if este disponibil
    fetch('/api/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(databaseEntry)
    })
        .then(response => response.json())
        .then(data => {
            if (data && data.success) {
                console.log('✅ Comanda salvată în DB backend, id:', data.id);
            } else {
                console.warn('⚠️ Backend nu a confirmat salvare:', data);
            }
        })
        .catch(error => {
            console.warn('⚠️ Nu am putut salva in backend, folosesc localStorage:', error);
        });

    console.log('✅ Order saved in localStorage (fallback):', databaseEntry);
    return databaseEntry;
}

// Get all orders from database
function getAllOrders() {
    return JSON.parse(localStorage.getItem('ordersDatabase') || '[]');
}

// Get order by ID
function getOrderById(orderId) {
    const orders = getAllOrders();
    return orders.find(order => order.orderId === orderId);
}

// Delete order from database
function deleteOrder(orderId) {
    let orders = JSON.parse(localStorage.getItem('ordersDatabase') || '[]');
    orders = orders.filter(order => order.orderId !== orderId);
    localStorage.setItem('ordersDatabase', JSON.stringify(orders));
}

// Update order status
function updateOrderStatus(orderId, newStatus) {
    let orders = JSON.parse(localStorage.getItem('ordersDatabase') || '[]');
    const order = orders.find(o => o.orderId === orderId);
    if (order) {
        order.status = newStatus;
        localStorage.setItem('ordersDatabase', JSON.stringify(orders));
    }
}

// Animations CSS (added dynamically)
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }

        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes slideInLeft {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(50px);
            }
        }

        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.1);
            }
        }

        @keyframes glow {
            0%, 100% {
                box-shadow: 0 0 10px rgba(0, 217, 255, 0.3);
            }
            50% {
                box-shadow: 0 0 25px rgba(0, 217, 255, 0.6);
            }
        }

        @keyframes float {
            0%, 100% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-8px);
            }
        }

        /* Product card reveal animation */
        .product-card {
            animation: fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .product-card.scroll-reveal {
            opacity: 1;
            animation: slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .modal-content {
            animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
    `;
    document.head.appendChild(style);
}

// Scroll Reveal Animation - Modern Intersection Observer
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-reveal');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all product cards
    document.querySelectorAll('.product-card').forEach(card => observer.observe(card));
}

// Parallax Effect on Banner - Subtle and Modern
function initParallaxEffect() {
    const bannerSlider = document.querySelector('.banner-slider');
    if (!bannerSlider) return;

    document.addEventListener('mousemove', (e) => {
        const slides = document.querySelectorAll('.slide');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        slides.forEach(slide => {
            slide.style.transform = `translate(${x * 5}px, ${y * 5}px)`;
        });
    });
}

// Smooth Scroll Anchor Links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    addAnimationStyles();
    initScrollReveal();
    initSmoothScroll();
    loadCart();
    displayProducts();
    displayOrderSummary();
    setupCartModal();
    setupOrderForm();
    setupProductModal();
    setupBannerSlider();
    setupSearchBar();
    setupFeedbackPopup();
});

// Product Modal Functions
let currentProductId = null;
let currentQuantity = 1;

// Banner Slider Functions
let currentSlide = 0;
let sliderInterval;

function setupBannerSlider() {
    const slides = document.querySelectorAll('.slide');
    const sliderDots = document.getElementById('sliderDots');
    const sliderPrev = document.getElementById('sliderPrev');
    const sliderNext = document.getElementById('sliderNext');

    // Create dots
    if (sliderDots && slides.length > 0) {
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = `dot ${index === 0 ? 'active' : ''}`;
            dot.onclick = () => goToSlide(index);
            sliderDots.appendChild(dot);
        });
    }

    // Next button
    if (sliderNext) {
        sliderNext.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlider();
        });
    }

    // Previous button
    if (sliderPrev) {
        sliderPrev.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateSlider();
        });
    }

    // Auto-slide
    startAutoSlide();
}

function updateSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const sliderContainer = document.querySelector('.slider-container');

    // Update slides
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
            slide.classList.add('active');
        }
    });

    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentSlide) {
            dot.classList.add('active');
        }
    });

    // Move slider
    if (sliderContainer) {
        sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Reset auto-slide timer
    clearInterval(sliderInterval);
    startAutoSlide();
}

function startAutoSlide() {
    const slides = document.querySelectorAll('.slide');
    sliderInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }, 5000); // Change slide every 5 seconds
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

// Search Bar Functions
function setupSearchBar() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        if (query.length === 0) {
            searchResults.classList.remove('show');
            return;
        }

        // Filter products
        const results = products.filter(product =>
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.material.toLowerCase().includes(query)
        );

        if (results.length === 0) {
            searchResults.innerHTML = '<div class="no-results">Niciun produs găsit. Încearcă o altă căutare.</div>';
            searchResults.classList.add('show');
            return;
        }

        // Display results
        searchResults.innerHTML = results.map(product => `
            <div class="search-result-item" onclick="openProductModal(${product.id}); document.getElementById('searchInput').value = ''; document.getElementById('searchResults').classList.remove('show');">
                <div class="search-result-info">
                    <div class="search-result-name">${product.name}</div>
                    <div class="search-result-price">${product.price} RON</div>
                </div>
            </div>
        `).join('');

        searchResults.classList.add('show');
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (e.target !== searchInput) {
            searchResults.classList.remove('show');
        }
    });
}

function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

function applyFeedbackPopupMode() {
    const popupCard = document.getElementById('feedbackPopupCard');
    const popupText = document.getElementById('feedbackPopupModeText');

    if (!popupCard || !popupText) return;

    if (window.innerWidth <= 768) {
        popupCard.classList.add('mobile-mode');
        popupCard.classList.remove('desktop-mode');
        popupText.textContent = 'Versiune mobilă: Apel și email direct din telefon.';
    } else {
        popupCard.classList.add('desktop-mode');
        popupCard.classList.remove('mobile-mode');
        popupText.textContent = 'Versiune desktop: Opțiuni pentru a te conecta cu noi.';
    }
}

function openMailUrl(url) {
    if (!isValidUrl(url)) {
        alert('URL de mail invalid. Te rugăm contactează-ne direct la ionutstanoiu15@yahoo.com');
        return;
    }

    window.open(url, '_blank');
}

function setupFeedbackPopup() {
    const feedbackBtn = document.getElementById('openFeedbackPopup');
    const popup = document.getElementById('feedbackPopup');
    const closeBtn = document.getElementById('closeFeedbackPopup');
    const callBtn = document.getElementById('feedbackCall');
    const emailBtn = document.getElementById('feedbackEmail');

    applyFeedbackPopupMode();
    window.addEventListener('resize', applyFeedbackPopupMode);

    if (feedbackBtn) {
        feedbackBtn.addEventListener('click', () => {
            if (popup) popup.style.display = 'flex';
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (popup) popup.style.display = 'none';
        });
    }

    if (popup) {
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.style.display = 'none';
            }
        });
    }

    if (callBtn) {
        callBtn.addEventListener('click', () => {
            window.location.href = 'tel:0746468138';
        });
    }

    if (emailBtn) {
        emailBtn.addEventListener('click', () => {
            openMailUrl('https://compose.mail.yahoo.com/?to=ionutstanoiu15@yahoo.com');
        });
    }
}

function openProductModal(productId) {
    const product = displayedProducts.find(p => p.id === productId);
    if (!product) return;

    currentProductId = productId;
    currentQuantity = 1;
    currentProductImages = product.images || [product.image].filter(Boolean);
    currentProductImageIndex = 0;

    // Populate modal
    document.getElementById('productModalTitle').textContent = product.name;
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productPrice').textContent = product.price + ' RON';
    document.getElementById('productDimensions').textContent = product.dimensions;
    document.getElementById('productMaterial').textContent = product.material;
    document.getElementById('productFullDescription').textContent = product.fullDescription;
    document.getElementById('quantityInput').value = 1;

    // Display main image with nav arrows
    const mainImage = document.getElementById('mainImage');
    mainImage.innerHTML = `
        <button class="image-nav prev" onclick="slideProductImage(-1)">❮</button>
        <img src="${currentProductImages[0]}" alt="${product.name}" loading="lazy">
        <button class="image-nav next" onclick="slideProductImage(1)">❯</button>
    `;

    // Display thumbnail images
    const thumbnailContainer = document.getElementById('thumbnailImages');
    thumbnailContainer.innerHTML = currentProductImages.map((img, index) => `
        <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeThumbnail(${index})">
            <img src="${img}" alt="Thumbnail ${index + 1}" loading="lazy">
        </div>
    `).join('');

    // Show similar products at bottom
    displaySimilarProducts(productId);

    // Show modal
    const productModal = document.getElementById('productModal');
    productModal.classList.add('show');
}

function changeThumbnail(index) {
    if (!currentProductImages || currentProductImages.length === 0) return;
    currentProductImageIndex = index;
    const src = currentProductImages[index];
    const mainImage = document.getElementById('mainImage');
    mainImage.innerHTML = `
        <button class="image-nav prev" onclick="slideProductImage(-1)">❮</button>
        <img src="${src}" alt="Produs" loading="lazy">
        <button class="image-nav next" onclick="slideProductImage(1)">❯</button>
    `;
    document.querySelectorAll('.thumbnail').forEach((thumb, idx) => {
        thumb.classList.toggle('active', idx === index);
    });
}

function slideProductImage(direction) {
    if (!currentProductImages || currentProductImages.length === 0) return;
    currentProductImageIndex = (currentProductImageIndex + direction + currentProductImages.length) % currentProductImages.length;
    changeThumbnail(currentProductImageIndex);
}

function setupProductModal() {
    const addToCartBtn = document.getElementById('addToCartModalBtn');
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');
    const quantityInput = document.getElementById('quantityInput');

    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            const quantity = parseInt(quantityInput.value) || 1;
            addProductToCartFromModal(currentProductId, quantity);
        });
    }

    if (incrementBtn) {
        incrementBtn.addEventListener('click', () => {
            const current = parseInt(quantityInput.value) || 1;
            quantityInput.value = current + 1;
        });
    }

    if (decrementBtn) {
        decrementBtn.addEventListener('click', () => {
            const current = parseInt(quantityInput.value) || 1;
            if (current > 1) {
                quantityInput.value = current - 1;
            }
        });
    }

    if (quantityInput) {
        quantityInput.addEventListener('change', (e) => {
            let value = parseInt(e.target.value) || 1;
            if (value < 1) value = 1;
            e.target.value = value;
        });
    }
}

function addProductToCartFromModal(productId, quantity) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }

    saveCart();
    updateCartCount();
    showCartNotification(`${product.name} adăugat în coș (${quantity}x)!`);
    
    // Close modal
    document.getElementById('productModal').classList.remove('show');
}

function displaySimilarProducts(excludeProductId) {
    const suggestedProductsSection = document.getElementById('suggestedProducts');
    if (!suggestedProductsSection) {
        // Creează secțiunea dacă nu există
        createSuggestedProductsSection();
    }

    // Get random products (exclude current)
    const similar = displayedProducts
        .filter(p => p.id !== excludeProductId)
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);

    const suggestedGrid = document.getElementById('suggestedProductsGrid');
    if (suggestedGrid) {
        suggestedGrid.innerHTML = similar.map(product => `
            <div class="product-card" onclick="openProductModal(${product.id})">
                <div class="product-image"><img src="${getSelectedImage(product)}" alt="${product.name}" loading="lazy" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'280\' viewBox=\'0 0 400 280\'%3E%3Crect width=\'400\' height=\'280\' fill=\'%23f2f4f7\'/%3E%3Ctext x=\'50%\' y=\'50%\' fill=\'%23899dac\' font-size=\'14\' font-family=\'Arial, sans-serif\' text-anchor=\'middle\' dy=\'.35em\'%3EImagine indisponibilă%3C/text%3E%3C/svg%3E';"></div>
                <div class="product-content">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">${product.price} RON</div>
                    <button class="btn btn-primary btn-small" onclick="addToCart(${product.id}); event.stopPropagation();">
                        Adaugă în Coș
                    </button>
                </div>
            </div>
        `).join('');
    }
}

function createSuggestedProductsSection() {
    const modalBody = document.querySelector('.modal-body');
    if (!modalBody) return;

    const suggestedSection = document.createElement('div');
    suggestedSection.id = 'suggestedProducts';
    suggestedSection.className = 'suggested-products-section';
    suggestedSection.innerHTML = `
        <h3 class="suggested-title">S-ar putea să iti placa şi...</h3>
        <div class="suggested-products-grid" id="suggestedProductsGrid"></div>
    `;

    modalBody.appendChild(suggestedSection);
}
