const scriptURL = "https://script.google.com/macros/s/AKfycbzEOzxx6ntkDoYzBc63uvrsIht4ma71vdfazDUDDp4jLSFZrCp_uM-3e2NNgtwe-JuY/exec";
const form = document.forms["contact-form"];
const loadingElement = document.getElementById("loading");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Periksa validasi form
  if (!form.checkValidity()) {
    alert("Semua form harus diisi dengan benar!");
    return;
  }

  // Tampilkan animasi loading
  loadingElement.classList.remove("hidden");

  // Lakukan fetch dan kirim form
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      alert("Thank you! your form is submitted successfully.");
    })
    .then(() => {
      // Sembunyikan animasi dan reload halaman
      loadingElement.classList.add("hidden");
      window.location.reload();
    })
    .catch((error) => {
      console.error("Error!", error.message);
      loadingElement.classList.add("hidden"); // Sembunyikan animasi jika terjadi error
    });
});
