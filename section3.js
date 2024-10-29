const clickSound = document.getElementById("click-button");

// Функция для воспроизведения звука
function playSound() {
    clickSound.currentTime = 0; // Сбрасываем звук к началу, если он уже играет
    clickSound.play();
}
document.getElementById('showTimeButton').addEventListener('click', function() {
            const currentTime = new Date().toLocaleTimeString();
            document.getElementById('timeDisplay').textContent = `Current Time: ${currentTime}`;
            document.getElementById('showTimeButton').style.display = 'none';
        });
document.getElementById("click1").addEventListener("click", playSound);
document.getElementById("showTimeButton").addEventListener("click", playSound);