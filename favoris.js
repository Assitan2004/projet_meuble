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

        // Petite logique pour supprimer visuellement un favori
        const removeButtons = document.querySelectorAll('.remove-btn');
        removeButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const card = this.closest('.product-card');
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.remove();
                    // Ici on pourrait mettre à jour le compteur ou afficher l'état vide
                }, 400);
            });
        });

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
                botMsg.innerText = "Merci ! Un agent vous répondra sous peu.";
                chatContent.appendChild(botMsg);
                chatContent.scrollTop = chatContent.scrollHeight;
            }, 1000);
        }
    }
    sendBtn.onclick = sendMessage;
    chatInput.onkeypress = (e) => { if(e.key === 'Enter') sendMessage(); };
