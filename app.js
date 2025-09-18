const btn = document.getElementById("randomBtn");

function moveButton() {
    // Získa výšku okna
    const windowHeight = window.innerHeight;
    
    // Náhodná pozícia Y (od 20% po 80% výšky obrazovky)
    const randomY = Math.random() * (windowHeight * 0.6) + (windowHeight * 0.2);

    // Nastaví transformáciu na tlačidlo
    btn.style.position = "absolute";
    btn.style.top = `${randomY}px`;
    btn.style.left = "50%";
    btn.style.transform = "translateX(-50%)";
}

// Volanie každých 2 sekúnd
setInterval(moveButton, 2000);

// Inicializácia
moveButton();
