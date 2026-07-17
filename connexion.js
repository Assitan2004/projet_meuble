   // ---- GESTION DU MENU MOBILE ----
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
                botMsg.innerText = "Merci ! Un agent vous répondra sous peu.";
                chatContent.appendChild(botMsg);
                chatContent.scrollTop = chatContent.scrollHeight;
            }, 1000);
        }
    }
    sendBtn.onclick = sendMessage;
    chatInput.onkeypress = (e) => { if(e.key === 'Enter') sendMessage(); };

    // ---- CONNEXION (API FLASK) ----
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const email = loginForm.querySelectorAll("input")[0].value;
            const password = loginForm.querySelectorAll("input")[1].value;

            try {
                const res = await fetch("http://127.0.0.1:5000/auth/connexion", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: email, mot_de_passe: password })
                });
                const data = await res.json();
                if (res.ok) {
                    localStorage.setItem("user", JSON.stringify(data.user));
                    window.location.href = "index.html";
                } else {
                    alert("❌ " + data.erreur);
                }
            } catch (err) {
                alert("❌ Erreur serveur.");
            }
        });
    }
