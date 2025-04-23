import "animate.css";
import "./resource/css/mayer_reset.css";
import "./resource/css/main.css";
import "../node_modules/flatpickr/dist/flatpickr.min.css";
import flatpickr from "flatpickr";
import { format } from "date-fns";
import { projects } from "./pages/objects";
import { homeContent } from "./pages/home";
import { todayContent } from "./pages/today";
import { upcomingContent } from "./pages/upcoming";
import { showNewTaskModal } from "./pages/newTaskModal";

if (!localStorage.getItem("projects")) {
  localStorage.setItem("projects", JSON.stringify(projects));
}
homeContent();

//document.addEventListener('DOMContentLoaded',()=> {
flatpickr("#newNextActivityDate", {
  enableTime: false, // turn on time picker
  time_24hr: true, // 24‑hour format
  dateFormat: "Y-M-d", // e.g. 2025-04-17 14:30
  minDate: "today", // cannot pick past dates
  defaultDate: new Date(),
  startOfWeek: 1, // preselect today’s date/time
  // you can add more: locale, disable, onChange callbacks, etc.
});
//})

document.querySelector(".filterByDate").addEventListener("click", function (e) {
  switch (e.target.classList.value) {
    case "todayTasks":
      todayContent();
      break;
    case "allTasks":
      homeContent();
      break;
    case "upcomingTasks":
      upcomingContent();
      break;
    case "addTask":
      showNewTaskModal(e.target);
      break;
    default:
      break;
  }
});
