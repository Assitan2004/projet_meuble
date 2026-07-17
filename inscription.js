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

    // ---- INSCRIPTION ----
    document.querySelector("form").addEventListener("submit", async (e) => {
        e.preventDefault();
        const inputs = document.querySelectorAll("input");
        const prenom = inputs[0].value.trim();
        const nom = inputs[1].value.trim();
        const email = inputs[2].value.trim();
        const mot_de_passe = inputs[3].value.trim();

        try {
            const res = await fetch("http://127.0.0.1:5000/auth/inscription", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prenom, nom, email, mot_de_passe })
            });
            const data = await res.json();
            if (res.ok) {
                alert("✅ Compte créé ! Vous pouvez vous connecter.");
                window.location.href = "connexion.html";
            } else {
                alert("❌ " + data.erreur);
            }
        } catch (err) {
            alert("❌ Impossible de contacter le serveur. Flask est-il lancé ?");
        }
    });