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
