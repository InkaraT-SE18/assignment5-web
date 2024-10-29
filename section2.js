
const clickSound = document.getElementById("click-button");

// Функция для воспроизведения звука
function playSound() {
    clickSound.currentTime = 0; // Сбрасываем звук к началу, если он уже играет
    clickSound.play();
}

document.getElementById("click1").addEventListener("click", playSound);
document.getElementById("click2").addEventListener("click", playSound);


    const colors = ['#102827', '#160808', '#151B2A', '#390000', '#062819'];

        function changeBackgroundColor() {
            let randomIndex = Math.floor(Math.random() * colors.length);

            document.body.style.backgroundColor = colors[randomIndex];
        }
