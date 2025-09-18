const btn = document.getElementById("randomBtn");

function moveButton() {
    const windowHeight = window.innerHeight;
    const randomY = Math.random() * (windowHeight * 0.6) + (windowHeight * 0.2);

    btn.style.position = "absolute";
    btn.style.top = `${randomY}px`;
    btn.style.left = "50%";
    btn.style.transform = "translateX(-50%)";
}

// prvá pozícia pri načítaní
window.onload = moveButton;

// presun po kliknutí
btn.addEventListener("click", moveButton);
