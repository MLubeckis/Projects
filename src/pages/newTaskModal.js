export function showNewTaskModal() {
  const modal = document.querySelector(".newTaskModal");

  if (modal.classList.contains("hidden")) {
    modal.classList.remove("hidden");

    requestAnimationFrame(() => {
      modal.classList.remove("animate__zoomOut");
      modal.classList.add("animate__zoomIn");
    });
    addEventListener("click", function (e) {
      if (e.target == modal) {
        modal.classList.remove("animate__zoomIn");
        modal.classList.add("animate__zoomOut");

        modal.addEventListener("animationend", function handler() {
          modal.classList.add("hidden");
          modal.classList.remove("animate__zoomOut");
          modal.removeEventListener("animationend", handler);
        });
      }
    });
  }
}
