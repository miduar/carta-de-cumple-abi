function mostrarCarta() {
    let carta = document.getElementById("carta");
    carta.classList.add("mostrar");

    // Generar corazones al hacer clic
    setInterval(() => {
        let corazon = document.createElement("div");
        corazon.innerHTML = "❤️💗";
        corazon.classList.add("corazon");
        corazon.style.left = Math.random() * window.innerWidth + "px";
        corazon.style.bottom = "0"; // Inicia desde abajo
        corazon.style.fontSize = Math.random() * 20 + 30 + "px"; // Tamaños aleatorios
        document.body.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 4000); // Tiempo para que desaparezcan arriba
    }, 100);
}