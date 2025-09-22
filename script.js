// update tahun otomatis di footer
document.getElementById("year").textContent = new Date().getFullYear();

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// Pagination setup
const itemsPerPage = 6; // jumlah gambar per halaman
let currentPage = 1;

function showPage(page) {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const totalItems = galleryItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // sembunyikan semua gambar dulu
  galleryItems.forEach((item, index) => {
    item.style.display =
      index >= (page - 1) * itemsPerPage && index < page * itemsPerPage
        ? "block"
        : "none";
  });

  document.getElementById(
    "pageInfo"
  ).textContent = `Halaman ${page} dari ${totalPages}`;

  // disable prev/next kalau mentok
  document.getElementById("prevPage").disabled = page === 1;
  document.getElementById("nextPage").disabled = page === totalPages;
}

// Event tombol pagination
document.getElementById("prevPage").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
});
document.getElementById("nextPage").addEventListener("click", () => {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const totalPages = Math.ceil(galleryItems.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
});

// Filter kategori
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");
    document.querySelectorAll(".gallery-item").forEach((item) => {
      if (filter === "all" || item.dataset.category === filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Tampilkan halaman pertama saat load
showPage(currentPage);
// --- Sertifikat Pagination ---
const itemsPerPageSertifikat = 6;
let currentPageSertifikat = 1;

function showPageSertifikat(page) {
  const galleryItems = document.querySelectorAll(
    "#gallery-sertifikat .gallery-item"
  );
  const totalItems = galleryItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPageSertifikat);

  galleryItems.forEach((item, index) => {
    item.style.display =
      index >= (page - 1) * itemsPerPageSertifikat &&
      index < page * itemsPerPageSertifikat
        ? "block"
        : "none";
  });

  document.getElementById(
    "pageInfoSertifikat"
  ).textContent = `Halaman ${page} dari ${totalPages}`;
  document.getElementById("prevPageSertifikat").disabled = page === 1;
  document.getElementById("nextPageSertifikat").disabled = page === totalPages;
}

document.getElementById("prevPageSertifikat").addEventListener("click", () => {
  if (currentPageSertifikat > 1) {
    currentPageSertifikat--;
    showPageSertifikat(currentPageSertifikat);
  }
});
document.getElementById("nextPageSertifikat").addEventListener("click", () => {
  const galleryItems = document.querySelectorAll(
    "#gallery-sertifikat .gallery-item"
  );
  const totalPages = Math.ceil(galleryItems.length / itemsPerPageSertifikat);
  if (currentPageSertifikat < totalPages) {
    currentPageSertifikat++;
    showPageSertifikat(currentPageSertifikat);
  }
});

// --- Filter Sertifikat ---
document.querySelectorAll("#sertifikat .filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll("#sertifikat .filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");
    document
      .querySelectorAll("#gallery-sertifikat .gallery-item")
      .forEach((item) => {
        if (filter === "all" || item.dataset.category === filter) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
  });
});

// Tampilkan halaman pertama saat load
showPageSertifikat(currentPageSertifikat);
