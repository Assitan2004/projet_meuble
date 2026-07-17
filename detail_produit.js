/* ═══════════════════════════════════════
   PRODUCT DATABASE
   — remplace les src images par tes vrais fichiers
═══════════════════════════════════════ */
const PRODUCTS = [
    {
        id: 0,
        name: "Table de Salon Minimaliste",
        category: "Maison · Artisanat",
        price: 29.90,
        oldPrice: null,
        tag: "Artisanat",
        tagSale: false,
        description: "Une table basse sculptée dans un bois massif sélectionné, dotée d'une finition mate qui révèle le grain naturel. Légèreté visuelle et robustesse structurelle se marient dans un équilibre parfait. Convient à tous les styles d'intérieur, du scandinave au contemporain.",
        images: ["Images/Meuble_1.png", "Images/Meuble_1.png", "Images/Meuble_1.png", "Images/Meuble_1.png"],
        /* angles simulés avec object-position */
        imageLabels: ["Face", "Profil", "Détail", "Vue dessus"],
        colors: ["#1a1a1a","#7b5e42","#d4c5ae","#e8e0d4"],
        colorNames: ["Noir Mat","Noyer","Chêne","Ivoire"],
        materials: ["Chêne massif","Noyer","Frêne","MDF premium"],
        specs: [
            ["Dimensions","80 × 40 × 35 cm"],["Poids","8,5 kg"],["Matière","Chêne massif FSC"],
            ["Finition","Huile naturelle mate"],["Pieds","Acier laqué"],["Origine","Fabriqué en France"],
        ]
    },
    {
        id: 1,
        name: "Headsound Pro Black",
        category: "Musique · Audiophile",
        price: 112.00,
        oldPrice: null,
        tag: "Music",
        tagSale: false,
        description: "Un casque audio Over-Ear conçu pour les puristes du son. Coussinets en cuir véritable, arceau à mémoire de forme et transducteurs 50mm garantissent une écoute immersive et confortable sur de longues sessions.",
        images: ["Images/c2.jpg","Images/c2.jpg","Images/c2.jpg","Images/c2.jpg"],
        imageLabels: ["Face","Profil G","Détail arceau","Coussinet"],
        colors: ["#1a1a1a","#c0b090","#fff"],
        colorNames: ["Noir carbone","Champagne","Blanc nacré"],
        materials: ["Cuir pleine fleur","Cuir synthétique","Tissu acoustique"],
        specs: [
            ["Réponse en fréq.","20 Hz – 20 kHz"],["Impédance","32 Ω"],["SPL","105 dB"],
            ["Câble","1.5 m, détachable"],["Poids","285 g"],["Autonomie BT","40 h"],
        ]
    },
    {
        id: 2,
        name: "Adudu Comfort Chair",
        category: "Maison · Confort",
        price: 89.00,
        oldPrice: null,
        tag: "Comfort",
        tagSale: false,
        description: "Fauteuil d'exception aux lignes organiques, pensé pour sublimer votre espace tout en offrant un confort optimal. Son assise enveloppante et sa structure en hêtre massif en font une pièce à la fois sculpturale et fonctionnelle.",
        images: ["Images/c3-removebg-preview.png","Images/c3-removebg-preview.png","Images/c3-removebg-preview.png","Images/c3-removebg-preview.png"],
        imageLabels: ["Face","Profil D","Vue arrière","Détail pied"],
        colors: ["#5c4a3a","#1a1a1a","#b0a090","#e8ddd0"],
        colorNames: ["Cognac","Anthracite","Taupe","Lin naturel"],
        materials: ["Velours","Bouclé","Cuir","Lin & coton"],
        specs: [
            ["Dimensions","75 × 80 × 85 cm"],["Assise","46 cm (H)"],["Poids","18 kg"],
            ["Structure","Hêtre massif"],["Revêtement","Velours 100% polyester"],["Charge max","150 kg"],
        ]
    },
    {
        id: 3,
        name: "Lampe Sculpturale",
        category: "Maison · Luminaire",
        price: 29.90,
        oldPrice: null,
        tag: "Artisanat",
        tagSale: false,
        description: "Un luminaire qui transcende sa fonction première pour devenir une véritable sculpture de lumière. Sa forme organique en acier brossé diffuse une lumière chaude et enveloppante, parfaite pour créer une ambiance feutrée.",
        images: ["Images/Meuble_4.png","Images/Meuble_4.png","Images/Meuble_4.png","Images/Meuble_4.png"],
        imageLabels: ["Allumée","Éteinte","Détail pied","Ampoule"],
        colors: ["#c0a060","#1a1a1a","#e0e0e0"],
        colorNames: ["Laiton","Noir mat","Chrome"],
        materials: ["Acier brossé","Laiton massif","Céramique"],
        specs: [
            ["Hauteur","55 cm"],["Diamètre abat-jour","25 cm"],["Ampoule","E27, max 40W"],
            ["Câble","180 cm, tissu torsadé"],["Matière","Acier & laiton"],["Norme","CE"],
        ]
    },
    {
        id: 4,
        name: "Headsound Studio",
        category: "Musique · Studio",
        price: 89.00,
        oldPrice: 112.00,
        tag: "Music",
        tagSale: true,
        description: "Le casque de référence pour les studios d'enregistrement et les créatifs exigeants. Isolation phonique passive exceptionnelle, réponse plate et fidèle sur toute la plage de fréquences. Un outil de travail devenu icône de style.",
        images: ["Images/Meuble_3.png","Images/Meuble_3.png","Images/Meuble_3.png","Images/Meuble_3.png"],
        imageLabels: ["Face","Profil","Arceau","Sur-oreille"],
        colors: ["#1a1a1a","#ffffff"],
        colorNames: ["Midnight Black","Studio White"],
        materials: ["Cuir pleine fleur","Alcantara","Tissu Studio"],
        specs: [
            ["Réponse en fréq.","10 Hz – 25 kHz"],["Impédance","250 Ω"],["SPL","111 dB"],
            ["Type","Circumaural fermé"],["Câble","3 m spiralé"],["Poids","320 g"],
        ]
    },
    {
        id: 5,
        name: "Smart Display X1",
        category: "Tech · Écran",
        price: 89.00,
        oldPrice: null,
        tag: "Tech",
        tagSale: false,
        description: "Un écran tactile connecté au design épuré qui s'intègre harmonieusement dans votre intérieur. Gérez votre maison intelligente, affichez vos photos ou vos œuvres préférées. La technologie enfin à la hauteur de votre décor.",
        images: ["Images/Meuble_6.png","Images/Meuble_6.png","Images/Meuble_6.png","Images/Meuble_6.png"],
        imageLabels: ["Face","Profil","Fixation","Tranche"],
        colors: ["#1a1a1a","#f5f0e8"],
        colorNames: ["Graphite","Sable"],
        materials: ["Aluminium","Verre Gorilla","Plastique recyclé"],
        specs: [
            ["Écran","10\" IPS, 1920×1080"],["Luminosité","600 nits"],["OS","Android 12"],
            ["WiFi","Wi-Fi 6 dual-band"],["Bluetooth","5.2"],["Poids","480 g"],
        ]
    }
];

const RELATED_POOL = PRODUCTS;

/* ═══════════════════════════════════════
   LOAD PRODUCT FROM URL PARAM
═══════════════════════════════════════ */
const params  = new URLSearchParams(location.search);
let productId = parseInt(params.get('id')) || 0;
let product   = PRODUCTS[productId] || PRODUCTS[0];

let currentImg     = 0;
let selectedColor  = 0;
let selectedMat    = 0;
let qty            = 1;
let wished         = false;

function renderProduct() {
    document.title = `Pallet Ross – ${product.name}`;
    document.getElementById('breadcrumbName').textContent = product.name;
    document.getElementById('pCategory').textContent      = product.category;
    document.getElementById('pTitle').textContent         = product.name;
    document.getElementById('pDesc').textContent          = product.description;
    document.getElementById('mainTag').textContent        = product.tag;
    document.getElementById('mainTag').className          = 'img-tag' + (product.tagSale ? ' sale' : '');

    // Price
    const priceBlock = document.getElementById('priceBlock');
    if (product.oldPrice) {
        priceBlock.innerHTML = `
            <span class="p-price">${product.price.toFixed(2).replace('.',',')} €</span>
            <span class="p-price-old">${product.oldPrice.toFixed(2).replace('.',',')} €</span>
            <span class="p-badge">–${Math.round((1 - product.price/product.oldPrice)*100)}%</span>
        `;
    } else {
        priceBlock.innerHTML = `<span class="p-price">${product.price.toFixed(2).replace('.',',')} €</span>`;
    }

    // Thumbnails
    const thumbsWrap = document.getElementById('thumbsWrap');
    thumbsWrap.innerHTML = '';
    product.images.forEach((src, i) => {
        const t = document.createElement('div');
        t.className = 'thumb' + (i === 0 ? ' active' : '');
        t.title     = product.imageLabels[i];
        t.innerHTML = `<img src="${src}" alt="${product.imageLabels[i]}" style="object-position:${getObjectPos(i)}">`;
        t.addEventListener('click', () => switchImg(i));
        thumbsWrap.appendChild(t);
    });

    // Main image
    switchImg(0, true);

    // Colors
    const cWrap = document.getElementById('colorsWrap');
    cWrap.innerHTML = '';
    product.colors.forEach((hex, i) => {
        const s = document.createElement('div');
        s.className   = 'color-swatch' + (i === 0 ? ' active' : '');
        s.style.background = hex;
        s.title       = product.colorNames[i];
        s.style.border = hex === '#fff' || hex === '#ffffff' ? '1.5px solid #ddd' : '';
        s.addEventListener('click', () => {
            document.querySelectorAll('.color-swatch').forEach(x => x.classList.remove('active'));
            s.classList.add('active');
            selectedColor = i;
            document.getElementById('colorName').textContent = product.colorNames[i];
        });
        cWrap.appendChild(s);
    });
    document.getElementById('colorName').textContent = product.colorNames[0];

    // Materials
    const mWrap = document.getElementById('materialsWrap');
    mWrap.innerHTML = '';
    product.materials.forEach((m, i) => {
        const b = document.createElement('button');
        b.className = 'opt-btn' + (i === 0 ? ' active' : '');
        b.textContent = m;
        b.addEventListener('click', () => {
            document.querySelectorAll('.opt-btn').forEach(x => x.classList.remove('active'));
            b.classList.add('active');
            selectedMat = i;
        });
        mWrap.appendChild(b);
    });

    // Specs
    const specTable = document.getElementById('specTable');
    specTable.innerHTML = product.specs.map(([k,v]) =>
        `<div class="spec-line"><span>${k}</span><span>${v}</span></div>`
    ).join('');

    // Related
    renderRelated();
}

function getObjectPos(i) {
    const positions = ['center center','center left','center right','top center'];
    return positions[i] || 'center center';
}

function switchImg(i, instant = false) {
    const mainImg = document.getElementById('mainImg');
    if (!instant) {
        mainImg.classList.add('fade-out');
        setTimeout(() => {
            mainImg.src = product.images[i];
            mainImg.style.objectPosition = getObjectPos(i);
            mainImg.classList.remove('fade-out');
        }, 300);
    } else {
        mainImg.src = product.images[i];
        mainImg.style.objectPosition = getObjectPos(i);
    }
    currentImg = i;
    document.querySelectorAll('.thumb').forEach((t, idx) => t.classList.toggle('active', idx === i));
}

function renderRelated() {
    const grid = document.getElementById('relatedGrid');
    grid.innerHTML = '';
    const related = RELATED_POOL.filter(p => p.id !== product.id).slice(0, 4);
    related.forEach(p => {
        const card = document.createElement('div');
        card.className = 'rel-card';
        card.innerHTML = `
            <div class="rel-img">
                <img src="${p.images[0]}" alt="${p.name}">
            </div>
            <div class="rel-info">
                <div class="rel-name">${p.name}</div>
                <div class="rel-price">${p.price.toFixed(2).replace('.',',')} €</div>
            </div>
        `;
        card.addEventListener('click', () => {
            window.location.href = `detail.html?id=${p.id}`;
        });
        grid.appendChild(card);
    });
}

/* ═══════════════════════════════════════
   IMAGE NAVIGATION
═══════════════════════════════════════ */
document.getElementById('prevImg').addEventListener('click', () => {
    const n = (currentImg - 1 + product.images.length) % product.images.length;
    switchImg(n);
});
document.getElementById('nextImg').addEventListener('click', () => {
    const n = (currentImg + 1) % product.images.length;
    switchImg(n);
});

/* ═══════════════════════════════════════
   LIGHTBOX
═══════════════════════════════════════ */
const lightbox = document.getElementById('lightbox');
const lbImg    = document.getElementById('lbImg');
const lbCounter= document.getElementById('lbCounter');
let lbIndex    = 0;

function openLb(i) {
    lbIndex = i;
    lbImg.src = product.images[i];
    lbCounter.textContent = `${i+1} / ${product.images.length}`;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLb() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
}

document.getElementById('mainImgWrap').addEventListener('click', (e) => {
    if (!e.target.closest('.img-arrow')) openLb(currentImg);
});

document.getElementById('lbClose').addEventListener('click', closeLb);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLb(); });

document.getElementById('lbPrev').addEventListener('click', () => {
    lbIndex = (lbIndex - 1 + product.images.length) % product.images.length;
    lbImg.src = product.images[lbIndex];
    lbCounter.textContent = `${lbIndex+1} / ${product.images.length}`;
});

document.getElementById('lbNext').addEventListener('click', () => {
    lbIndex = (lbIndex + 1) % product.images.length;
    lbImg.src = product.images[lbIndex];
    lbCounter.textContent = `${lbIndex+1} / ${product.images.length}`;
});

document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') document.getElementById('lbPrev').click();
    if (e.key === 'ArrowRight') document.getElementById('lbNext').click();
});

/* ═══════════════════════════════════════
   QUANTITY
═══════════════════════════════════════ */
document.getElementById('qtyMinus').addEventListener('click', () => {
    if (qty > 1) { qty--; document.getElementById('qtyNum').textContent = qty; }
});
document.getElementById('qtyPlus').addEventListener('click', () => {
    qty++; document.getElementById('qtyNum').textContent = qty;
});

/* ═══════════════════════════════════════
   CART & WISHLIST
═══════════════════════════════════════ */
document.getElementById('btnCart').addEventListener('click', () => {
    showToast(`"${product.name}" × ${qty} ajouté au panier ✓`);
    const btn = document.getElementById('btnCart');
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Ajouté !`;
    setTimeout(() => {
        btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg> Ajouter au panier`;
    }, 2000);
});

document.getElementById('btnWish').addEventListener('click', () => {
    wished = !wished;
    const btn = document.getElementById('btnWish');
    btn.classList.toggle('liked', wished);
    btn.innerHTML = wished ? '<i class="fa-solid fa-heart"></i>' : '<i class="fa-regular fa-heart"></i>';
    showToast(wished ? 'Ajouté aux favoris ♥' : 'Retiré des favoris');
});

/* ═══════════════════════════════════════
   ACCORDION
═══════════════════════════════════════ */
document.querySelectorAll('.spec-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.spec-row').classList.toggle('open');
    });
});

/* ═══════════════════════════════════════
   TOAST
═══════════════════════════════════════ */
const toast = document.getElementById('toast');
let toastTimer;
function showToast(msg) {
    clearTimeout(toastTimer);
    toast.textContent = msg;
    toast.classList.add('show');
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

/* ═══════════════════════════════════════
   HEADER / MOBILE MENU
═══════════════════════════════════════ */
const burgerBtn  = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
burgerBtn.addEventListener('click', e => { e.stopPropagation(); mobileMenu.classList.toggle('active'); });
document.addEventListener('click', e => { if (!burgerBtn.contains(e.target) && !mobileMenu.contains(e.target)) mobileMenu.classList.remove('active'); });

/* ═══════════════════════════════════════
   CHATBOT
═══════════════════════════════════════ */
const launcher   = document.getElementById('chatbot-launcher');
const chatWindow = document.getElementById('chat-window');
const closeChat  = document.getElementById('close-chat');
const sendBtn    = document.getElementById('send-chat');
const chatInput  = document.getElementById('chat-input');
const chatContent= document.getElementById('chat-content');

launcher.onclick = () => chatWindow.style.display = 'flex';
closeChat.onclick = () => chatWindow.style.display = 'none';

function sendChatMsg() {
    const text = chatInput.value.trim();
    if (!text) return;
    const u = document.createElement('div');
    u.className = 'message user'; u.innerText = text;
    chatContent.appendChild(u);
    chatInput.value = '';
    chatContent.scrollTop = chatContent.scrollHeight;
    setTimeout(() => {
        const b = document.createElement('div');
        b.className = 'message bot';
        b.innerText = 'Merci ! Un conseiller Pallet Ross vous répondra dans les plus brefs délais.';
        chatContent.appendChild(b);
        chatContent.scrollTop = chatContent.scrollHeight;
    }, 1000);
}
sendBtn.onclick = sendChatMsg;
chatInput.onkeypress = e => { if (e.key === 'Enter') sendChatMsg(); };

/* ═══════════════════════════════════════
   INIT
═══════════════════════════════════════ */
renderProduct();