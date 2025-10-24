// Efek teks mengetik otomatis
const text = [
  "Building Tomorrow’s Infrastructures...",
  "Architect of Orbital Systems...",
  "Integrating AI Beyond the Atmosphere..."
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === text.length) count = 0;
  currentText = text[count];
  letter = currentText.slice(0, ++index);
  document.getElementById("typedText").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500);
  } else {
    setTimeout(type, 80);
  }
})();

// Validasi form
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msg = document.getElementById("msg");

  if (!name || !email || !message) {
    msg.textContent = "⚠️ Semua field wajib diisi.";
    msg.style.color = "crimson";
    return;
  }

  msg.textContent = "🚀 Pesan berhasil dikirim ke orbit pusat!";
  msg.style.color = "#00f0ff";
  e.target.reset();
});
