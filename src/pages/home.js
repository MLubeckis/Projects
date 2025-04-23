import { format, setDefaultOptions, isToday, isBefore } from "date-fns";

import { lv } from "date-fns/locale";
setDefaultOptions({ locale: lv });

export function homeContent() {
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
  const sectionMissed = document.createElement("div");
  const sectionUpcoming = document.createElement("div");

  const projectsToday = projects.filter(function (p) {
    return isToday(p.projectDate);
  });
  const projectsMissed = projects.filter(function (p) {
    return !isToday(p.projectDate) && !isBefore(new Date(), p.projectDate);
  });
  const projectsUpcoming = projects.filter(function (p) {
    return isBefore(new Date(), p.projectDate);
  });
  sectionToday.classList.add("section", "today");
  sectionMissed.classList.add("section", "late");
  sectionUpcoming.classList.add("section", "upcoming");

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

  if (projectsMissed.length > 0) {
    const sectionH2 = document.createElement("h2");
    const projectsDiv = document.createElement("div");
    sectionH2.textContent = "Nokaveti";
    projectsDiv.classList.add("projects");

    for (const project of projectsMissed) {
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
    sectionMissed.append(sectionH2, projectsDiv);
  }
  if (projectsUpcoming.length > 0) {
    const sectionH2 = document.createElement("h2");
    const projectsDiv = document.createElement("div");
    sectionH2.textContent = "Gaidamie";
    projectsDiv.classList.add("projects");

    for (const project of projectsUpcoming) {
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
    sectionUpcoming.append(sectionH2, projectsDiv);
  }
  main.append(sectionMissed, sectionToday, sectionUpcoming);
}
