// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll(".lightbox-trigger").forEach(img => {
  img.addEventListener("click", function() {
    lightbox.style.display = "flex";
    lightboxImg.src = this.dataset.full;
  });
});

function closeLightbox() {
  lightbox.style.display = "none";
}

document.querySelector(".close-lightbox").addEventListener("click", closeLightbox);

// Select the modal and overlay elements
const modal = document.getElementById("modal");
const modalOverlay = document.getElementById("modal-overlay");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");

// Ensure the modal and overlay only appear when clicked
document.querySelectorAll(".modal-trigger").forEach(trigger => {
  trigger.addEventListener("click", function() {
    modalTitle.textContent = this.dataset.title;
    modalDesc.textContent = this.dataset.desc;
    modal.style.display = "block";
    modalOverlay.style.display = "block";  // Now it appears only when needed
  });
});

// Close modal function
function closeModal() {
  modal.style.display = "none";
  modalOverlay.style.display = "none"; // Hide the overlay when closing
}

// Attach event listeners
document.querySelector(".close-modal").addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);

