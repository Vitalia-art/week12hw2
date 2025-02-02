// Алфавит
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Случайное слово из 4 букв
function generateRandomWord() {
    let randomWord = '';
    
    // 4 случайных индекса
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        randomWord += alphabet[randomIndex];
    }
    
    return randomWord;
}

// Обработчик события для кнопки
document.getElementById("generateWord").addEventListener("click", function() {
    const randomWord = generateRandomWord();
    document.getElementById("randomWord").textContent = randomWord;
});
