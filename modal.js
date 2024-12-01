// modal image
function openModal(imageElement) {
    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("modalImage");
    var caption = document.getElementById("caption");

  
    modal.style.display = "block";
    modalImage.src = imageElement.src;
    caption.innerHTML = imageElement.nextElementSibling.innerHTML;
  }
  
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  
  
  // Get elements
  const overlay = document.getElementById('special-notes-overlay');
  const popup = document.getElementById('special-notes-popup');
  const triggerButton = document.getElementById('special-notes-trigger');
  const closeButton = document.getElementById('special-notes-close');

  // Show the pop-up and overlay
  triggerButton.addEventListener('click', () => {
    overlay.style.display = 'block';
    popup.style.display = 'block';
  });

  // Hide the pop-up and overlay
  closeButton.addEventListener('click', () => {
    overlay.style.display = 'none';
    popup.style.display = 'none';
  });

  // Close pop-up when clicking outside of it
  overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    popup.style.display = 'none';
  });

  // Toggle dark mode
  document.addEventListener('keydown', (event) => {
    if (event.key === 'd') {
      document.body.classList.toggle('dark-mode');
      popup.classList.toggle('dark-mode');
      triggerButton.classList.toggle('dark-mode');
      closeButton.classList.toggle('dark-mode');
    }
  });

  
