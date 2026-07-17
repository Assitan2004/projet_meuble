  const burgerBtn = document.getElementById('burgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const burgerIcon = document.getElementById('burgerIcon');

    burgerBtn.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('active');
        
        if (isOpen) {
            // Icône Fermer (X)
            burgerIcon.innerHTML = '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>';
        } else {
            // Icône Menu (Hamburger)
            burgerIcon.innerHTML = '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
        }
    });

    // Fermer le menu si on clique en dehors de la carte
    window.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !burgerBtn.contains(e.target) && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            burgerIcon.innerHTML = '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
        }
    });

    document.querySelectorAll('.mobile-overlay a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            burgerIcon.innerHTML = '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
        });
    });

     // --- LOGIQUE DU CHATBOT ---
const launcher = document.getElementById('chatbot-launcher');
const chatWindow = document.getElementById('chat-window');
const closeChat = document.getElementById('close-chat');
const sendBtn = document.getElementById('send-chat');
const chatInput = document.getElementById('chat-input');
const chatContent = document.getElementById('chat-content');

// Ouvrir / Fermer
launcher.onclick = () => chatWindow.style.display = 'flex';
closeChat.onclick = () => chatWindow.style.display = 'none';

// Envoyer un message
function sendMessage() {
    const text = chatInput.value.trim();
    if (text !== "") {
        // Message utilisateur
        const userMsg = document.createElement('div');
        userMsg.className = 'message user';
        userMsg.innerText = text;
        chatContent.appendChild(userMsg);
        
        chatInput.value = "";
        chatContent.scrollTop = chatContent.scrollHeight;

        // Réponse automatique simple
        setTimeout(() => {
            const botMsg = document.createElement('div');
            botMsg.className = 'message bot';
            botMsg.innerText = "Merci pour votre message. Un agent de Pallet Ross vous répondra d'ici peu !";
            chatContent.appendChild(botMsg);
            chatContent.scrollTop = chatContent.scrollHeight;
        }, 1000);
    }
}

sendBtn.onclick = sendMessage;
chatInput.onkeypress = (e) => { if(e.key === 'Enter') sendMessage(); };
 // --- DÉCLENCHEUR D'ANIMATION (REVEAL) ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

// On active l'observation sur toutes les sections qui ont la classe "reveal"
document.querySelectorAll('.reveal').forEach(section => {
    observer.observe(section);
});       