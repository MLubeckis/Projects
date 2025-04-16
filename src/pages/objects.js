
let projects = [];

function Projects(projectID, projectName, company, contactName, contactPhone, projectDate) {
    this.projectID = projectID;
    this.projectName = projectName;
    this.company = company;
    this.contactName = contactName;
    this.contactPhone =contactPhone;
    this.projectDate = new Date(projectDate);
}

projects.push(new Projects(1, 'Jaunais Ciemats', 'SIA Kirbitis', 'Anete', '+371 26123411', '15-04-2025'));
projects.push(new Projects(2, 'Zvilnis', 'SIA Kirbitis', 'Anete', '+371 26123411', '15-04-2025'));

console.log(projects);