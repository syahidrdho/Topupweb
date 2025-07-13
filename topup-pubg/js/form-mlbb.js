let selectedDiamond = "-";
let selectedPrice = "-";
let selectedPayment = "-";

document.addEventListener("DOMContentLoaded", () => {
  const diamondSelect = document.getElementById("select-diamond");
  const paymentButtons = document.querySelectorAll("#payment-buttons .btn");

  // Ambil pilihan diamond
  diamondSelect.addEventListener("change", () => {
    const [diamond, price] = diamondSelect.value.split("|");
    selectedDiamond = diamond + " Diamond";
    selectedPrice = "Rp" + parseInt(price).toLocaleString("id-ID");
  });

  // Metode pembayaran (pakai class 'active' sebagai penanda)
  paymentButtons.forEach(button => {
    button.addEventListener("click", () => {
      paymentButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      selectedPayment = button.textContent;
    });
  });
});

// Fungsi untuk mengupdate ringkasan saat tombol konfirmasi ditekan
function updateRingkasan() {
  const nomorHP = document.getElementById("input-hp").value || "-";

  document.getElementById("summary-diamond").textContent = selectedDiamond;
  document.getElementById("summary-payment").textContent = selectedPayment;
  document.getElementById("summary-hp").textContent = nomorHP;
  document.getElementById("summary-total").textContent = selectedPrice;

  // Tambahkan efek animasi ringkasan (jika animate.css aktif)
  const ringkasanBox = document.querySelector(".ringkasan-box");
  ringkasanBox.classList.remove("animate__pulse");
  void ringkasanBox.offsetWidth;
  ringkasanBox.classList.add("animate__animated", "animate__pulse");
}
