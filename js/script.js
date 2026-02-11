// ==============================
// Hearts background effect
// ==============================
function createHearts() {
    const hearts = document.querySelector('.hearts');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    hearts.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

// Continuously create hearts
setInterval(createHearts, 300);

// ==============================
// Move "No" button when hovered or clicked
// ==============================
function moveButton(button) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

// ==============================
// Navigation between steps
// ==============================
function goToStep2() {
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.add('active');
    triggerConfetti();
}

function goToStep3() {
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step3').classList.add('active');
    triggerConfetti();
}

// ==============================
// Final step with WhatsApp + Facebook buttons
// ==============================
function finalStep() {
    // Hide previous step
    document.getElementById('step3').classList.remove('active');

    // Show final message
    document.querySelector('.final-message').style.display = 'block';

    // Show WhatsApp and Facebook buttons
    const buttonsContainer = document.querySelector('.final-buttons');
    buttonsContainer.classList.add('show');
    buttonsContainer.querySelectorAll('a').forEach(btn => btn.style.display = 'inline-block');

    // Trigger confetti
    triggerConfetti();
    setTimeout(() => triggerConfetti(), 500);
    setTimeout(() => triggerConfetti(), 1000);
    setTimeout(() => triggerConfetti(), 1500);

    // Floating hearts on buttons
    buttonsContainer.querySelectorAll('a').forEach(btn => {
        for(let i = 0; i < 5; i++) {
            const heart = document.createElement('span');
            heart.classList.add('heart');
            heart.innerText = '❤️';
            heart.style.left = `${Math.random() * 80 + 10}%`;
            heart.style.animationDuration = `${1 + Math.random()}s`;
            btn.appendChild(heart);

            // Remove hearts after animation ends
            setTimeout(() => heart.remove(), 1200);
        }
    });
}

// ==============================
// Confetti function
// ==============================
function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}
