// Sample Products Database - 3D Printed Items
const products = [
    {
        id: 1,
        name: 'Figurină Dragon 3D',
        price: 89.99,
        description: 'Figurină dragon detaliată, 15cm, culori customize disponibile. Aceasta este o piesă premium realizată cu imprimantă 3D de ultimă generație. Fiecare detaliu este perfect finisajat manual. Disponibilă în variante de culoare: negru, roșu, albastru și verde.',
        fullDescription: 'Această magnifică figurină de dragon este creată handmade cu imprimantă 3D și oferă un nivel de detaliu excepțional. Ideală pentru colecționari sau ca element decorativ în orice cameră. Fiecare produs este unic și poate fi personalizat cu culori și materiale diferite.',
        emoji: '🐉',
        images: ['🐉', '🐲', '🦎'],
        colors: ['Negru', 'Roșu', 'Albastru', 'Verde'],
        dimensions: '15cm x 12cm x 10cm',
        material: 'PLA/PETG 3D Printed'
    },
    {
        id: 2,
        name: 'Vază Decorativă Modernă',
        price: 45.99,
        description: 'Vază elegantă cu design geometric, perfectă pentru decorație. Modelul este inspirat din arta modernă și se potrivește cu orice stil interior. Design abstract și plinuri/goluri care creează efecte vizuale interesante.',
        fullDescription: 'Vaza aceasta cu design geometric modern este realizată prin imprimare 3D cu precizie extrem de ridicată. Perfectă pentru a plasa flori, plante decorative sau pur și simplu ca element de decor. Finish-ul este neted și elegant.',
        emoji: '🏺',
        images: ['🏺', '⚱️'],
        colors: ['Alb', 'Gri', 'Negru', 'Albastru închis'],
        dimensions: '25cm x 15cm x 15cm',
        material: 'PLA 3D Printed'
    },
    {
        id: 3,
        name: 'Suport Telefon 3D',
        price: 24.99,
        description: 'Suport telefon ajustabil, design ergonomic, diverse culori. Permite înclinarea perfectă pentru vizionare și video-call.',
        fullDescription: 'Suportul telefon universal este compatibil cu orice telefon și poate fi ajustat la diferite unghiuri. Design ergonomic care nu rănește ecranul. Perfect pentru desk, birou sau masă.',
        emoji: '📱',
        images: ['📱', '📲'],
        colors: ['Alb', 'Negru', 'Gri'],
        dimensions: '8cm x 10cm x 12cm',
        material: 'PLA 3D Printed'
    },
    {
        id: 4,
        name: 'Lampa LED pentru Birou',
        price: 67.99,
        description: 'Lampă cu LED integrată, 3 niveluri de luminozitate. Design futurist cu control ușor și consum redus de energie.',
        fullDescription: 'Lampa LED cu design modern și futurist. 3 niveluri de luminozitate réglabile, consum scăzut de energie. Bază stabilă și robust. Perfectă pentru birou, cameră de lucru sau studiu.',
        emoji: '💡',
        images: ['💡', '🔆'],
        colors: ['Alb cald', 'Alb rece', 'Alb natural'],
        dimensions: '15cm diametru bază x 30cm înălțime',
        material: 'PLA 3D + LED'
    },
    {
        id: 5,
        name: 'Cutie de Organizare',
        price: 34.99,
        description: 'Cutie compartimentată pentru birou, removable dividers. Ideal pentru organizarea documentelor, pixuri și alte mici obiecte.',
        fullDescription: 'Cutia de organizare cu compartimente removabile permite personalizarea spațiului intern. Perfectă pentru birou, cameră de studiu sau cameră copilului. Design curat și profesional.',
        emoji: '📦',
        images: ['📦', '📫'],
        colors: ['Alb', 'Gri deschis', 'Negru'],
        dimensions: '30cm x 20cm x 15cm',
        material: 'PLA 3D Printed'
    },
    {
        id: 6,
        name: 'Miniatură Castel',
        price: 79.99,
        description: 'Castel medieval detaliat cu 20+ piese, set complet. Model de colecție cu detalii minuscule și structură complexă.',
        fullDescription: 'Miniaturile castelului sunt realizate cu atenție extremă la detaliu. Fiecare peartă, fereastră și turn sunt elaborate. Set complet care poate fi asamblat în diferite configurații. Ideal pentru colecționari.',
        emoji: '🏰',
        images: ['🏰', '🏯'],
        colors: ['Alb/Gri', 'Bej/Maro'],
        dimensions: '25cm x 20cm x 30cm',
        material: 'PLA 3D Printed'
    },
    {
        id: 7,
        name: 'Raft de Perete Design',
        price: 49.99,
        description: 'Raft modern pentru cărți, suportă până la 5kg. Design minimalist care se adaptează oricărui interior.',
        fullDescription: 'Raftul de perete oferă o soluție de depozitare elegantă și funcțională. Poate susține până la 5kg și are un finisaj neted. Instalare ușoară cu cuie sau ancore.',
        emoji: '📚',
        images: ['📚', '📖'],
        colors: ['Alb', 'Gri', 'Negru', 'Stejar'],
        dimensions: '40cm x 20cm x 10cm',
        material: 'PLA 3D Printed'
    },
    {
        id: 8,
        name: 'Plantă Decorativă Geo',
        price: 32.99,
        description: 'Ghiveci geometric pentru plante, impermeabil. Design futurist cu formă regulată și simetrică.',
        fullDescription: 'Ghiveul geometric este impermeabil și perfect pentru a planta flori sau plante verzi. Design minimalist și modern care se potrivește cu orice stil. Drenaj intern pentru sănătatea plantelor.',
        emoji: '🌿',
        images: ['🌿', '🌱', '🍃'],
        colors: ['Alb', 'Gri', 'Negru', 'Bej'],
        dimensions: '15cm x 15cm x 15cm',
        material: 'PLA impermeabilizat'
    },
    {
        id: 9,
        name: 'Robot Fidget Toy',
        price: 28.99,
        description: 'Jucărie anti-stres articulate, 100% imprimare 3D. Ideal pentru a relaxa mâinile și mica ta.',
        fullDescription: 'Robotul fidget toy este o jucărie anti-stres cu múltiplele puncte de articulare. Fiecare mișcare este ușoară și plăcută. Perfect pentru birou, școală sau acasă. Idee excelentă de cadou.',
        emoji: '🤖',
        images: ['🤖', '🦾'],
        colors: ['Alb', 'Negru', 'Roșu', 'Albastru'],
        dimensions: '10cm x 8cm x 6cm',
        material: 'PLA/ABS 3D Printed'
    }
];

// Cart Management
let cart = [];

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
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    productsGrid.innerHTML = products.map(product => `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <div class="product-image">${product.emoji}</div>
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

// Show notification
function showCartNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #1E3A5F 0%, #2C5282 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 50px;
        box-shadow: 0 5px 20px rgba(30, 58, 95, 0.3);
        z-index: 2000;
        animation: slideIn 0.4s ease;
        font-weight: 600;
        border-left: 4px solid #0D6B8C;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
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
    const database = {
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

    // Save to localStorage (acting as database)
    let orders = JSON.parse(localStorage.getItem('ordersDatabase') || '[]');
    orders.push(database);
    localStorage.setItem('ordersDatabase', JSON.stringify(orders));

    // Log to console for verification
    console.log('✅ Order saved to database:', database);
    
    return database;
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
    `;
    document.head.appendChild(style);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    addAnimationStyles();
    loadCart();
    displayProducts();
    displayOrderSummary();
    setupCartModal();
    setupOrderForm();
    setupProductModal();
    setupBannerSlider();
    setupSearchBar();
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
                <div class="search-result-emoji">${product.emoji}</div>
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

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    currentProductId = productId;
    currentQuantity = 1;

    // Populate modal
    document.getElementById('productModalTitle').textContent = product.name;
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productPrice').textContent = product.price + ' RON';
    document.getElementById('productDimensions').textContent = product.dimensions;
    document.getElementById('productMaterial').textContent = product.material;
    document.getElementById('productFullDescription').textContent = product.fullDescription;
    document.getElementById('quantityInput').value = 1;

    // Display main image
    document.getElementById('mainImage').textContent = product.emoji;

    // Display thumbnail images
    const thumbnailContainer = document.getElementById('thumbnailImages');
    thumbnailContainer.innerHTML = product.images.map((img, index) => `
        <div class="thumbnail" onclick="changeThumbnail('${img}', event)">${img}</div>
    `).join('');

    // Display colors
    const colorsList = document.getElementById('colorsList');
    colorsList.innerHTML = product.colors.map(color => `<span class="color-badge">${color}</span>`).join('');

    // Show similar products at bottom
    displaySimilarProducts(productId);

    // Show modal
    const productModal = document.getElementById('productModal');
    productModal.classList.add('show');
}

function changeThumbnail(emoji, event) {
    document.getElementById('mainImage').textContent = emoji;
    
    // Highlight selected thumbnail
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    event.target.classList.add('active');
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
    const similar = products
        .filter(p => p.id !== excludeProductId)
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);

    const suggestedGrid = document.getElementById('suggestedProductsGrid');
    if (suggestedGrid) {
        suggestedGrid.innerHTML = similar.map(product => `
            <div class="product-card" onclick="openProductModal(${product.id})">
                <div class="product-image">${product.emoji}</div>
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
