// Modal functionality
const modal = document.getElementById("myModal");
const openModal = document.getElementById("openModal");
const closeBtn = document.getElementsByClassName("close-btn")[0];

openModal.onclick = () => modal.style.display = "block";
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Back to Top Button functionality
window.onscroll = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("backToTop").style.display = "block";
  } else {
    document.getElementById("backToTop").style.display = "none";
  }
};

document.getElementById("backToTop").onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
