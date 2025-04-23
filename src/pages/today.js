import { format, setDefaultOptions, isToday, isBefore } from "date-fns";

import { lv } from "date-fns/locale";
setDefaultOptions({ locale: lv });

export function todayContent() {
  const main = document.querySelector("#main");
  main.innerHTML = "";
  let projects = JSON.parse(
    localStorage.getItem("projects"),
    function (key, value) {
      if (key == "projectDate") {
        return new Date(value);
      } else {
        return value;
      }
    },
  );
  const sectionToday = document.createElement("div");

  const projectsToday = projects.filter(function (p) {
    return isToday(p.projectDate);
  });
  sectionToday.classList.add("section", "today");

  if (projectsToday.length > 0) {
    const sectionH2 = document.createElement("h2");
    const projectsDiv = document.createElement("div");
    sectionH2.textContent = "Šodien";
    projectsDiv.classList.add("projects");

    for (const project of projectsToday) {
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("project");
      projectDiv.dataset.projectId = project.projectID;

      const projectName = document.createElement("div");
      const companyName = document.createElement("div");
      const contactName = document.createElement("div");
      const contactPhone = document.createElement("div");
      const nextActivityDate = document.createElement("div");

      projectName.classList.add("projectName");
      companyName.classList.add("companyName");
      contactName.classList.add("contactName");
      contactPhone.classList.add("contactPhone");
      nextActivityDate.classList.add("nextActivityDate");

      projectName.textContent = project.projectName;
      companyName.textContent = project.company;
      contactName.textContent = project.contactName;
      contactPhone.textContent = project.contactPhone;
      nextActivityDate.textContent = format(
        project.projectDate,
        "dd. MMM yyyy",
      );

      projectDiv.append(
        projectName,
        companyName,
        contactName,
        contactPhone,
        nextActivityDate,
      );
      projectsDiv.append(projectDiv);
    }
    sectionToday.append(sectionH2, projectsDiv);
  }

  main.append(sectionToday);
}
