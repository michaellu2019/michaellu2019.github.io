function Project(id, name, title, description, tags) {
  this.id = id;
  this.name = name;
  this.title = title;
  this.description = description + "... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis vehicula sollicitudin.";
  this.tags = tags;
}

const hardwareProjects = [
  new Project(23, "competition", "MIT Competition Robot", "Robot MIT Competition Robot", ["hardware", "featured"]),
  new Project(22, "lego", "Lego Building Bot", "Robot Lego Building Robot", ["hardware", "featured"]),
  new Project(17, "donkey", "Donkey", "Robot Donkey", ["hardware", "featured"]),
  new Project(15, "boxing", "IoT Boxing", "Robot Boxing", ["hardware", "featured"]),
  new Project(14, "camera", "IR Camera Module", "Robot IR Camera Module", ["hardware", "featured"]),
  // new Project(13, "antenna", "Directional Antenna Optimizer", "Robot Antenna", ["hardware"]),
  new Project(11, "krabs", "Kombat Krabs", "Robot Kombat Krabs", ["hardware"]),
  new Project(7, "beatbot", "BeatBot", "Robot BeatBot", ["hardware"]),
  new Project(6, "toby", "Toby", "Robot Toby", ["hardware"]),
  new Project(5, "horse", "Animatronic Horse Head", "Robot Horse", ["hardware"]),
  new Project(4, "tank", "RC Tank", "Robot Tank", ["hardware"]),
  new Project(3, "trash", "Trash Mobile", "Robot Trash", ["hardware"]),
  new Project(2, "capacitive", "Capacitive Touch Controller", "Robot Capacitive Touch", ["hardware"]),
];

const softwareProjects = [
  new Project(21, "car", "Autonomous Racing Car", "Robot Car", ["software", "featured"]),
  // new Project(20, "split", "Split Fighters", "Robot Split Fighters", ["software"]),
  // new Project(19, "grapple", "Grapple Getaway", "Robot Grapple", ["software"]),
  new Project(18, "vocoder", "FPGA Vocoder", "Robot FPGA", ["software"]),
  new Project(16, "ghostwriters", "Ghostwriters", "Robot Ghostwriters", ["software"]),
  new Project(12, "chatbot", "Facebook Chatbot", "Robot Facebook", ["software", "featured"]),
  new Project(10, "regret", "Regret", "Robot Regret", ["software"]),
  new Project(9, "friends", "Friends, Where You At?", "Robot Friends", ["software"]),
  new Project(8, "nutriscan", "NutriScan", "Robot NutriScan", ["software", "featured"]),
  new Project(1, "euclidean", "The Euclidean Project", "Robot Euclidean", ["software"]),
];

export const projects = [...hardwareProjects, ...softwareProjects].sort((p1, p2) => p2.id - p1.id);