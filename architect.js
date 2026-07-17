    // ---- MENU MOBILE CORRIGÉ ----
    const burgerBtn = document.getElementById('burgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (burgerBtn && mobileMenu) {
        burgerBtn.onclick = (e) => {
            e.stopPropagation();
            const isActive = mobileMenu.classList.toggle('active');
            const icon = burgerBtn.querySelector('.material-symbols-outlined');
            icon.innerText = isActive ? 'close' : 'menu';
        };

        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
                mobileMenu.classList.remove('active');
                burgerBtn.querySelector('.material-symbols-outlined').innerText = 'menu';
            }
        });
    }

// ── HERO SLIDER ──
const slides = document.querySelectorAll('.slide');
const counterEl = document.querySelector('.slide-counter .current');
const progressLine = document.getElementById('progressLine');
let current = 0;
let timer;
const total = slides.length;

function goTo(index) {
  slides[current].classList.remove('active');
  current = (index + total) % total;
  slides[current].classList.add('active');
  counterEl.textContent = String(current + 1).padStart(2, '0');
  const pct = ((current + 1) / total) * 100;
  progressLine.style.setProperty('--progress', pct + '%');
}

function autoPlay() {
  timer = setInterval(() => goTo(current + 1), 5000);
}

document.getElementById('nextBtn').addEventListener('click', () => {
  clearInterval(timer);
  goTo(current + 1);
  autoPlay();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  clearInterval(timer);
  goTo(current - 1);
  autoPlay();
});

progressLine.style.setProperty('--progress', ((1 / total) * 100) + '%');
autoPlay();

// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => io.observe(el));

// ── COUNT-UP ANIMATION ──
const statNums = document.querySelectorAll('[data-target]');
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target);
      const suffix = el.querySelector('span')?.outerHTML || '';
      let start = 0;
      const duration = 1800;
      const startTime = performance.now();

      function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(eased * target);
        el.innerHTML = value + suffix;
        if (progress < 1) requestAnimationFrame(update);
        else el.innerHTML = target + suffix;
      }

      requestAnimationFrame(update);
      statObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

statNums.forEach(el => statObserver.observe(el));


      // --- LOGIQUE DU CHATBOT ---
    const launcher = document.getElementById('chatbot-launcher');
    const chatWindow = document.getElementById('chat-window');
    const closeChat = document.getElementById('close-chat');
    const sendBtn = document.getElementById('send-chat');
    const chatInput = document.getElementById('chat-input');
    const chatContent = document.getElementById('chat-content');

    launcher.onclick = () => chatWindow.style.display = 'flex';
    closeChat.onclick = () => chatWindow.style.display = 'none';

    function sendMessage() {
        const text = chatInput.value.trim();
        if (text !== "") {
            const userMsg = document.createElement('div');
            userMsg.className = 'message user';
            userMsg.innerText = text;
            chatContent.appendChild(userMsg);
            chatInput.value = "";
            chatContent.scrollTop = chatContent.scrollHeight;
            setTimeout(() => {
                const botMsg = document.createElement('div');
                botMsg.className = 'message bot';
                botMsg.innerText = "Merci pour votre message. Un agent vous répondra d'ici peu !";
                chatContent.appendChild(botMsg);
                chatContent.scrollTop = chatContent.scrollHeight;
            }, 1000);
        }
    }
    sendBtn.onclick = sendMessage;
    chatInput.onkeypress = (e) => { if(e.key === 'Enter') sendMessage(); };
