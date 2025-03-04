// 📌 Tarih ve Saat Gösterme
function updateDateTime() {
    const now = new Date();
    document.getElementById("date-time").innerText = now.toLocaleString("tr-TR");
}
setInterval(updateDateTime, 1000);
updateDateTime();

// 📌 Hava Durumu API'si (Istanbul için)
async function fetchWeather() {
    const apiKey = "YOUR_OPENWEATHER_API_KEY"; // OpenWeather API anahtarını buraya ekleyin
    const city = "Istanbul";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById("weather-text").innerText = `🌤️ ${data.weather[0].description}, ${data.main.temp}°C`;
        document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        
        // Hava durumuna göre arka plan değiştir
        document.body.style.background = data.main.temp > 20 ? "#ffd700" : "#87ceeb";
    } catch (error) {
        document.getElementById("weather-text").innerText = "Hava durumu bilgisi alınamadı.";
    }
}
fetchWeather();

// 📌 Şoförler İçin Komik Sözler
const driverQuotes = [
    "Gaz pedalına aşık olanın freni de sağlam olmalı! 😂",
    "Arabayı değil, yolu sür! 🚗💨",
    "Yol uzun, şaka kısa: Kamyoncu çayı içtikten sonra direksiyonu ters çevirir! ☕",
    "Kavşakta sağdan mı soldan mı? Şoförün iç sesi: 'Bugün şansımı deneyeyim!' 😂"
];

function updateDriverQuote() {
    const index = Math.floor(Math.random() * driverQuotes.length);
    document.getElementById("driver-quote").innerText = driverQuotes[index];
}

// 📌 Araç Bakım İpuçları
const carTips = [
    "Motor yağı değişimini aksatma, aracın kalbini koru! ❤️",
    "Lastik basıncını düzenli kontrol et, yakıt tasarrufu sağla! ⛽",
    "Fren balatalarını kontrol ettir, ani duruşlar sürpriz olmasın! 🛑",
    "Kışın cam suyuna antifriz eklemeyi unutma! ❄️"
];

function updateCarTips() {
    const index = Math.floor(Math.random() * carTips.length);
    document.getElementById("car-tips").innerText = carTips[index];
}
updateCarTips();
