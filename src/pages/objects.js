export let projects = [];

function Projects(
  projectID,
  projectName,
  company,
  contactName,
  contactPhone,
  projectDate,
) {
  this.projectID = projectID;
  this.projectName = projectName;
  this.company = company;
  this.contactName = contactName;
  this.contactPhone = contactPhone;
  this.projectDate = new Date(projectDate);
}

projects.push(
  new Projects(
    1,
    "Jaunais Ciemats",
    "SIA Kirbitis",
    "Anete",
    "+371 26123411",
    "2025-05-16",
  ),
);
projects.push(
  new Projects(
    2,
    "Zvilnis",
    "SIA Kirbitis",
    "Anete",
    "+371 26123411",
    "2025-05-16",
  ),
);
projects.push(
  new Projects(
    3,
    "Dabas Parks",
    "SIA Zaļais Smaids",
    "Līga",
    "+371 26123414",
    "2025-05-05",
  ),
);
projects.push(
  new Projects(
    4,
    "Mūzikas Centrs",
    "SIA Mūzika",
    "Juris",
    "+371 26123415",
    "2025-06-10",
  ),
);
projects.push(
  new Projects(
    5,
    "Tehnoloģiju Zeme",
    "SIA Tehno",
    "Oskars",
    "+371 26123416",
    "2025-07-20",
  ),
);
projects.push(
  new Projects(
    6,
    "Sporta Arenas",
    "SIA SportaLīgums",
    "Kristīne",
    "+371 26123417",
    "2025-08-15",
  ),
);
projects.push(
  new Projects(
    7,
    "Bibliotēkas Centrs",
    "SIA Grāmatas",
    "Aigars",
    "+371 26123418",
    "2025-09-01",
  ),
);
projects.push(
  new Projects(
    8,
    "Radošā Telpa",
    "SIA Māksla",
    "Elīna",
    "+371 26123419",
    "2025-10-22",
  ),
);
projects.push(
  new Projects(
    9,
    "Vides Centrs",
    "SIA Zaļo Risinājumi",
    "Māris",
    "+371 26123420",
    "2025-04-16",
  ),
);
projects.push(
  new Projects(
    10,
    "Inovāciju Laboratorija",
    "SIA Inovācija",
    "Dace",
    "+371 26123421",
    "2025-12-12",
  ),
);
projects.push(
  new Projects(
    11,
    "Radošais Fabrika",
    "SIA Radoša Ražošana",
    "Rihards",
    "+371 26123422",
    "2026-01-15",
  ),
);
projects.push(
  new Projects(
    12,
    "Zaļo Rastu Projekts",
    "SIA Ekoloģija",
    "Santa",
    "+371 26123423",
    "2025-03-16",
  ),
);
projects.push(
  new Projects(
    13,
    "Vienotība",
    "SIA Kopība",
    "Anda",
    "+371 26123424",
    "2026-03-25",
  ),
);
projects.push(
  new Projects(
    14,
    "Enerģijas Mists",
    "SIA Enerģija",
    "Gints",
    "+371 26123425",
    "2026-04-30",
  ),
);
projects.push(
  new Projects(
    15,
    "Mājas Saknes",
    "SIA Būvniecība",
    "Elvis",
    "+371 26123426",
    "2025-04-16",
  ),
);
projects.push(
  new Projects(
    16,
    "Dizaina Paviljons",
    "SIA Dizains",
    "Ilze",
    "+371 26123427",
    "2026-06-10",
  ),
);
projects.push(
  new Projects(
    17,
    "Mākslas Oāze",
    "SIA Mūzikas Fabrika",
    "Rolands",
    "+371 26123428",
    "2026-07-05",
  ),
);
projects.push(
  new Projects(
    18,
    "Radošu Ideju Centrs",
    "SIA Radošums",
    "Zane",
    "+371 26123429",
    "2026-08-01",
  ),
);
projects.push(
  new Projects(
    19,
    "Biznesa Eksports",
    "SIA Bizness",
    "Marija",
    "+371 26123430",
    "2026-09-15",
  ),
);
projects.push(
  new Projects(
    20,
    "Nākotnes Projekts",
    "SIA Tehnoloģijas",
    "Oskars",
    "+371 26123431",
    "2026-10-10",
  ),
);
projects.push(
  new Projects(
    21,
    "Radošā Risinājumi",
    "SIA Risinājumi",
    "Aija",
    "+371 26123432",
    "2026-11-25",
  ),
);
projects.push(
  new Projects(
    22,
    "Zaļā Enerģija",
    "SIA Zaļās Tehnoloģijas",
    "Dainis",
    "+371 26123433",
    "2025-03-16",
  ),
);
projects.push(
  new Projects(
    23,
    "Radošie Notikumi",
    "SIA Notikumi",
    "Ilmārs",
    "+371 26123434",
    "2027-01-07",
  ),
);
projects.push(
  new Projects(
    24,
    "Kultūras Dārzs",
    "SIA Kultūra",
    "Laima",
    "+371 26123435",
    "2027-02-14",
  ),
);
projects.push(
  new Projects(
    25,
    "Izglītības Centrs",
    "SIA Zinātne",
    "Jelena",
    "+371 26123436",
    "2027-03-03",
  ),
);
projects.push(
  new Projects(
    26,
    "Veselības Projekts",
    "SIA Veselība",
    "Edvards",
    "+371 26123437",
    "2027-04-12",
  ),
);
projects.push(
  new Projects(
    27,
    "Radoša Virkne",
    "SIA Idejas",
    "Santa",
    "+371 26123438",
    "2027-05-20",
  ),
);
projects.push(
  new Projects(
    28,
    "Tirdzniecības Centrs",
    "SIA Preču Pasaules",
    "Vilhelms",
    "+371 26123439",
    "2025-04-16",
  ),
);
projects.push(
  new Projects(
    29,
    "Auto Risinājumi",
    "SIA Motors",
    "Artūrs",
    "+371 26123440",
    "2027-07-30",
  ),
);
projects.push(
  new Projects(
    30,
    "Radošais Forums",
    "SIA Debess",
    "Marta",
    "+371 26123441",
    "2027-08-25",
  ),
);
projects.push(
  new Projects(
    31,
    "Zinātnes Centrs",
    "SIA Innovācijas",
    "Gustavs",
    "+371 26123442",
    "2025-04-16",
  ),
);
projects.push(
  new Projects(
    32,
    "Radošie Princips",
    "SIA Ideju Fabrika",
    "Valdis",
    "+371 26123443",
    "2027-10-05",
  ),
);
