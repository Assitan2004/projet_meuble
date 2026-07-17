  /* ─── Mobile menu ─── */
    const burgerBtn  = document.getElementById('burgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    burgerBtn.addEventListener('click', e => { e.stopPropagation(); mobileMenu.classList.toggle('active'); });
    document.addEventListener('click', e => { if (!burgerBtn.contains(e.target) && !mobileMenu.contains(e.target)) mobileMenu.classList.remove('active'); });

    /* ─── Form submit ─── */
    function handleSubmit(e) {
        e.preventDefault();
        const btn     = document.getElementById('btnSend');
        const success = document.getElementById('formSuccess');

        btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Envoyé avec succès !`;
        btn.style.background = '#2a7a2a';

        success.classList.add('show');

        showToast('Message envoyé ! On vous répond sous 24 h ✓');

        setTimeout(() => {
            btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Envoyer ma demande`;
            btn.style.background = '';
            success.classList.remove('show');
        }, 4000);
    }

    /* ─── Toast ─── */
    const toastEl = document.getElementById('toast');
    let toastTimer;
    function showToast(msg) {
        clearTimeout(toastTimer);
        toastEl.textContent = msg;
        toastEl.classList.add('show');
        toastTimer = setTimeout(() => toastEl.classList.remove('show'), 3000);
    }

    /* ─── Scroll reveal ─── */
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    /* ─── Chatbot ─── */
    const launcher   = document.getElementById('chatbot-launcher');
    const chatWindow = document.getElementById('chat-window');
    const closeChat  = document.getElementById('close-chat');
    const sendBtn    = document.getElementById('send-chat');
    const chatInput  = document.getElementById('chat-input');
    const chatContent= document.getElementById('chat-content');

    launcher.onclick  = () => chatWindow.style.display = 'flex';
    closeChat.onclick = () => chatWindow.style.display = 'none';

    function sendMsg() {
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
            b.innerText = 'Merci ! Un conseiller Pallet Ross vous répondra très bientôt.';
            chatContent.appendChild(b);
            chatContent.scrollTop = chatContent.scrollHeight;
        }, 900);
    }
    sendBtn.onclick  = sendMsg;
    chatInput.onkeypress = e => { if (e.key === 'Enter') sendMsg(); };