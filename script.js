// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll(".lightbox-trigger").forEach(img => {
  img.addEventListener("click", function() {
    console.log("Lightbox triggered by:", this); // Debugging line
    lightbox.style.display = "block";
    lightboxImg.src = this.dataset.full;
  });
});

function closeLightbox() {
  lightbox.style.display = "none";
}

document.querySelector(".close-lightbox").addEventListener("click", closeLightbox);

// Modal functionality
const modal = document.getElementById("modal");
const modalOverlay = document.getElementById("modal-overlay");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");

// Prevent modal from opening on page load
window.onload = function () {
  console.log("Page loaded - Ensuring modal is hidden."); // Debugging line
  modal.style.display = "none";
  modalOverlay.style.display = "none";
};

// Add event listener only when user clicks
document.querySelectorAll(".modal-trigger").forEach(trigger => {
  trigger.addEventListener("click", function () {
    console.log("Modal triggered by:", this); // Logs which element triggered it
    if (this.dataset.title && this.dataset.desc) {
      modalTitle.textContent = this.dataset.title;
      modalDesc.textContent = this.dataset.desc;
      modal.style.display = "block";
      modalOverlay.style.display = "block";
    } else {
      console.warn("Modal trigger missing title or description");
    }
  });
});

function closeModal() {
  console.log("Closing modal"); // Debugging line
  modal.style.display = "none";
  modalOverlay.style.display = "none";
}

// Ensure close button works
document.querySelector(".close-modal").addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);
