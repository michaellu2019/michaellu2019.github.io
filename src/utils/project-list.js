export const ProjectTags = {
  HARDWARE: "hardware",
  SOFTWARE: "software",
  FEATURED: "featured",
}


function Project(id, name, title, description, tags, date, skills) {
  this.id = id;
  this.name = name;
  this.title = title;
  this.description = description;
  this.tags = tags;
  this.date = date;
  this.skills = skills;
}

const hardwareProjects = [
  new Project(30, "ball", "BB-8 Robot", "A 20-inch ball robot that uses a pendulum mechanism and feedback control to stabilize itself.", 
              [ProjectTags.HARDWARE, ProjectTags.FEATURED], "April - May 2023", ["CAD", "PSoC Programming in C", "Feedback Control"]),
  new Project(29, "omni", "Omni-Directional Robot", "An STM32-based robot that uses four omni-directional wheels to move in any direction. ", 
              [ProjectTags.HARDWARE, ProjectTags.FEATURED], "January - April 2023", []),
  new Project(27, "bus", "IoT Occupancy Sensor", "An ESP32-based IOT device designed to be deployed at bus stops to monitor ambient temperature, humidity, and to count the number of people waiting at the bus stop via WiFi sniffing.", 
              [ProjectTags.HARDWARE], "February - May 2023"),
  new Project(26, "yoyo", "Snow Globe Yo-Yos", "A snow-globe themed yo-yo designed for mass manufacturing, comprising of several injection-molded and thermoformed parts.", 
              [ProjectTags.HARDWARE], "February - April 2023", []),
  new Project(24, "laptop", "ROS Laptop", "A 6DOF robot arm that takes commands from a laptop running ROS, enabling it to move around and press keyboard keys.", 
              [ProjectTags.HARDWARE, ProjectTags.FEATURED], "July - August 2022", []),
  new Project(23, "competition", "MIT Competition Robot", "An aluminum robot, featuring a belt-driven cascade lift, detachable winch, and tank chassis, designed to lift and pull heavy items in the final compoetition of 2.007, MIT's design and manufacturing class.", 
              [ProjectTags.HARDWARE, ProjectTags.FEATURED], "February - May 2022", []),
  new Project(22, "lego", "Lego Building Bot", "A ROS-controlled 6DOF UR5 robot arm that leverages OpenCV computer vision and a compliant gripper to assemble giant Lego bricks.", 
              [ProjectTags.HARDWARE, ProjectTags.FEATURED], "April - May 2022", []),
  new Project(17, "donkey", "Donkey", "A WiFi-controlled robotic donkey that walks and moves its head using inverse kinematics.", 
              [ProjectTags.HARDWARE, ProjectTags.FEATURED], "January - June 2021", []),
  new Project(15, "boxing", "IoT Boxing", "An IoT boxing game that uses an ESP32 WiFI MCU and accelerometer real-time motion data over WebSockets to an online 3D boxing game.", 
              [ProjectTags.HARDWARE], "April - May 2021", []),
  new Project(14, "camera", "IR Camera Module", "A Raspberry Pi-based infrared camera module that uses OpenCV to read QR codes hidden behind infrared-transparent plastic.", 
              [ProjectTags.HARDWARE], "February - May 2021", []),
  // new Project(13, "antenna", "Directional Antenna Optimizer", "Robot Antenna", 
  //             [ProjectTags.HARDWARE], "April - May 2021", []),
  new Project(11, "krabs", "Kombat Krabs", "Remote-controlled toy robot crabs that walk using Jansen's linkage, built out of foam core, paper, and cardboard.", 
              [ProjectTags.HARDWARE, ProjectTags.FEATURED], "April - May 2020", []),
  new Project(7, "beatbot", "BeatBot", "An autonomous line-following car that paces long distance runners along a running track.", 
              [ProjectTags.HARDWARE], "October - June 2019", []),
  new Project(6, "toby", "Toby", "A robot built primarily out of household items: cardboard, paper, Legos, power tools, and a smartphone running OpenCV for facial recognition and PocketSphinx for speech detection.", 
              [ProjectTags.HARDWARE], "July - September 2018", []),
  // new Project(5, "horse", "Animatronic Horse Head", "An animatronic horse head that mimics the movements of my mouth based on real-time data from OpenCV algorithms that would track my mouth position.", 
  //             [ProjectTags.HARDWARE], "August 2018", []),
  new Project(4, "tank", "RC Tank", "A remote-controlled Arduino toy tank built out of cardboard.", 
              [ProjectTags.HARDWARE], "May 2018", []),
  new Project(3, "trash", "Trash Mobile", "An electrical trach can vehicle built out of \"trash\": scrap wood, cardboard, old cordless drills, and wheelbarrow wheels.", 
              [ProjectTags.HARDWARE], "July - August 2017", []),
  new Project(2, "capacitive", "Capacitive Touch Controller", "An Arduino-based system that uses capacitive touch to control a computer, allowing users to draw custom controllers with paper and pencil to play various games", 
              [ProjectTags.HARDWARE], "February 2017", []),
];

const softwareProjects = [
  // new Project(28, "falcon", "Falcon 9 Rocket Landing", "Rocket", 
  //             [ProjectTags.SOFTWARE, ProjectTags.FEATURED], "April - May 2023", []),
  new Project(25, "david", "AI Turtles", "A simulation of a turtle population that evolves through a genetic algorithm to swim towards a target more efficiently.", 
              [ProjectTags.SOFTWARE, ProjectTags.FEATURED], "January 2023", []),
  // new Project(21, "car", "Self-Driving RC Car", "6.141 Vibes", 
  //             [ProjectTags.SOFTWARE], "February - May 2022", []),
  // new Project(20, "split", "Split Fighters", "Robot Split Fighters", 
  //             [ProjectTags.SOFTWARE], "April - May 2022", []),
  // new Project(19, "grapple", "Grapple Getaway", "Robot Grapple", 
  //             [ProjectTags.SOFTWARE], "March 2022", []),
  new Project(18, "vocoder", "FPGA Vocoder", "An FPGA-based system that shifts the pitch of a human voice in real-time and also visualizes the result.", 
              [ProjectTags.SOFTWARE], "November - December 2021", []),
  new Project(16, "ghostwriters", "Ghostwriters", "A ReactJS and Golang-based CRUD web-app that allows users to collaboratively create stories.", 
              [ProjectTags.SOFTWARE], "May 2021", []),
  new Project(12, "chatbot", "Facebook Chatbot", "A Tensorflow-based Transformer deep learning model trained on my text messages to create an online chatbot.", 
              [ProjectTags.SOFTWARE, ProjectTags.FEATURED], "June 2020", []),
  new Project(10, "regret", "Regret", "A ReactJS and Flask-based CRUD web-app that allows users to collaboratively decorate my bedroom wall.", 
              [ProjectTags.SOFTWARE], "March 2020", []),
  new Project(9, "friends", "Friends, Where You At?", "An online visualizer of the hometowns of my friends, obtained through web-scraping public Facebook data.", 
              [ProjectTags.SOFTWARE], "February 2020", []),
  new Project(8, "nutriscan", "NutriScan", "A mobile web application that allows users to take pictures of their meals, then uses deep learning to classify the food and track macronutrients.", 
              [ProjectTags.SOFTWARE], "November 2019", []),
  new Project(1, "euclidean", "The Euclidean Project", "A web-based geometry construction app.", 
              [ProjectTags.SOFTWARE], "May 2016", []),
];

export const projects = [...hardwareProjects, ...softwareProjects].sort((p1, p2) => p2.id - p1.id);