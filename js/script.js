// testimoni slider
const slides = document.querySelectorAll(".testimonial-slide");
let currentIndex = 0;

setInterval(() => {
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add("active");
}, 4000);

// form validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const interestSelect = document.getElementById("interest");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const interestError = document.getElementById("interest-error");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Reset error messages
    nameError.textContent = "";
    emailError.textContent = "";
    interestError.textContent = "";

    let isValid = true;

    // Validasi nama
    const name = nameInput.value.trim();
    if (name === "" || name.length < 3) {
      nameError.textContent = "Nama harus diisi dan minimal 3 karakter.";
      isValid = false;
    }

    // Validasi email
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      emailError.textContent = "Email tidak valid.";
      isValid = false;
    }

    // Validasi interest
    const interest = interestSelect.value;
    if (interest === "") {
      interestError.textContent = "Silakan pilih minat wisata.";
      isValid = false;
    }

    if (isValid) {
      const konfirmasi = confirm("Apakah data yang Anda isi sudah benar?");
      if (konfirmasi) {
        alert("Form berhasil dikirim!");
        form.reset();
      }
    }
  });
});

// menampilkan dan menutup FAQ
const showBtn = document.getElementById("show-more-btn");
const hideBtn = document.getElementById("hide-more-btn");
const hiddenFaqs = document.querySelectorAll(".more-faq");

showBtn.addEventListener("click", function () {
  hiddenFaqs.forEach((item) => {
    item.style.display = "block";
  });
  showBtn.style.display = "none";
  hideBtn.style.display = "inline-block";
});

hideBtn.addEventListener("click", function () {
  hiddenFaqs.forEach((item) => {
    item.style.display = "none";
  });
  hideBtn.style.display = "none";
  showBtn.style.display = "inline-block";
});
