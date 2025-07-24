document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("mode-toggle");
  const body = document.body;

  if (!toggle) {
    console.error("Tombol mode-toggle tidak ditemukan!");
    return;
  }

  // Cek localStorage
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    toggle.textContent = "☀️";
  }

  toggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    const isLight = body.classList.contains("light-mode");
    toggle.textContent = isLight ? "☀️" : "🌙";
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
});

// Buat elemen tombol WhatsApp
const waButton = document.createElement('a');
waButton.href = 'https://wa.me/6282181440252'; // Ganti dengan nomor kamu
waButton.className = 'whatsapp-float';
waButton.target = '_blank';
waButton.setAttribute('aria-label', 'Hubungi via WhatsApp');

// Tambahkan icon ke dalam tombol
const waImg = document.createElement('img');
waImg.src = '/images/wa.jpeg'; // Pastikan file ini ada di direktori yg benar
waImg.alt = 'WhatsApp';

waButton.appendChild(waImg);
document.body.appendChild(waButton);
