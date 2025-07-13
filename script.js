// Ambil elemen input pencarian berdasarkan ID
const searchInput = document.getElementById('searchInput');

// Ambil semua elemen dengan class "card" (game cards)
const cards = document.querySelectorAll('.card');

// Tambahkan event listener saat pengguna mengetik di input
searchInput.addEventListener('keyup', function () {
  // Ambil nilai yang diketik dan ubah ke huruf kecil (agar pencarian tidak case sensitive)
  const keyword = this.value.toLowerCase();

  // Loop semua kartu game
  cards.forEach(card => {
    // Ambil nilai data-title dari card (nama game)
    const title = card.getAttribute('data-title').toLowerCase();

    // Cek apakah nama game mengandung keyword yang diketik
    if (title.includes(keyword)) {
      // Tampilkan card dengan mengubah display parent-nya (col-md-4)
      card.parentElement.style.display = 'block';

      // Hapus kelas animasi dulu untuk reset
      card.classList.remove('card-animate');

      // Trigger ulang animasi dengan force reflow (hack CSS)
      void card.offsetWidth;

      // Tambahkan kembali kelas animasi agar animasi dijalankan ulang
      card.classList.add('card-animate');
    } else {
      // Sembunyikan card jika tidak cocok dengan pencarian
      card.parentElement.style.display = 'none';
    }
  });
});


