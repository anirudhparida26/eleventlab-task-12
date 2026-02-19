const images = document.querySelectorAll(".gallery img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const caption = document.getElementById("caption");
const closeBtn = document.getElementById("closeBtn");

// 2️⃣ Add click event listeners
images.forEach(image => {
    image.addEventListener("click", () => {
        openModal(image);
    });
});

// 4️⃣ Dynamically update modal
function openModal(image) {
    modal.classList.add("active");
    modalImg.src = image.src;
    modalImg.alt = image.alt;
    caption.textContent = image.alt;

    // 7️⃣ Prevent background scrolling
    document.body.style.overflow = "hidden";
}

// 5️⃣ Close functionality
function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
}

closeBtn.addEventListener("click", closeModal);

// Close when clicking outside image
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// 8️⃣ ESC key support
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
        closeModal();
    }
});
