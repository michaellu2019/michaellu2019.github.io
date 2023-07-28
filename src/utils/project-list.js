import Donkey from '../components/project-content/Donkey.js'
import Krabs from '../components/project-content/Krabs.js'
import Lego from '../components/project-content/Lego.js'
import Competition from '../components/project-content/Competition.js'
import Laptop from '../components/project-content/Laptop.js'
import Chatbot from '../components/project-content/Chatbot.js'

export const PROJECT_TAGS = {
  HARDWARE: "hardware",
  SOFTWARE: "software",
  FEATURED: "featured",
}

export const MECHATRONICS_PROJECT_SECTIONS = ["overview", "ideation", "design", "fabrication", "programming", "results", "improvements"];
export const SOFTWARE_PROJECT_SECTIONS = ["overview", "ideation", "design", "programming", "results", "improvements"];


function Project(id, name, title, description, tags, date, 
                 codeLink="", demoLink="", skills=[], sections=[], component=(() => "Project info not found...")) {
  this.id = id;
  this.name = name;
  this.title = title;
  this.description = description;
  this.tags = tags;
  this.date = date;
  this.codeLink = codeLink;
  this.demoLink = demoLink;
  this.skills = skills;
  this.sections = sections;
  this.component = component;
}

const hardwareProjects = [
  new Project(30, "ball", "BB-8 Robot", "A 20-inch ball robot that uses a pendulum mechanism and feedback control to stabilize itself.", 
              [PROJECT_TAGS.HARDWARE, PROJECT_TAGS.FEATURED], "April - May 2023", "https://github.com/michaellu2019/ball", "https://youtu.be/xmnu_rDfkFk", ["Feedback Control", "CAD", "3D Printing", "Machining", "Soldering", "C", "PSoC"]),
  new Project(29, "omni", "Omni-Directional Robot", "An STM32-based robot that uses four omni-directional wheels to move in any direction. ", 
              [PROJECT_TAGS.HARDWARE, PROJECT_TAGS.FEATURED], "January - April 2023", "", "", ["Feedback Control", "CAD", "3D Printing", "Machining", "Soldering", "C++", "STM32"]),
  new Project(27, "bus", "IoT Occupancy Sensor", "An ESP32-based IOT device designed to be deployed at bus stops to monitor ambient temperature, humidity, and to count the number of people waiting at the bus stop via WiFi sniffing.", 
              [PROJECT_TAGS.HARDWARE], "February - May 2023", "", "", ["CAD", "3D Printing", "PCB Design", "Soldering", "C", "Python", "ESP32"]),
  new Project(26, "yoyo", "Snow Globe Yo-Yos", "A snow-globe themed yo-yo designed for mass manufacturing, comprising of several injection-molded and thermoformed parts.", 
              [PROJECT_TAGS.HARDWARE], "February - April 2023", "", "", ["Design for Manufacturing", "CAD", "CAM", "Injection Molding", "Thermoforming"]),
  new Project(24, "laptop", "Laptop Bot", "A 6DOF robot arm that takes commands from a laptop running ROS, enabling it to move around and press keyboard keys.", 
              [PROJECT_TAGS.HARDWARE, PROJECT_TAGS.FEATURED], "July - August 2022", "https://youtu.be/Iixz6tXIA5E", "https://github.com/michaellu2019/laptop", ["ROS", "CAD", "3D Printing", "C++", "Arduino"], MECHATRONICS_PROJECT_SECTIONS, Laptop),
  new Project(23, "competition", "MIT Competition Robot", "An aluminum robot, featuring a belt-driven cascade lift, detachable winch, and tank chassis, designed to lift and pull heavy items in the final compoetition of 2.007, MIT's design and manufacturing class.", 
              [PROJECT_TAGS.HARDWARE, PROJECT_TAGS.FEATURED], "February - May 2022", "https://github.com/michaellu2019/big-daddy", "https://youtu.be/f2lEhvnP2P4", ["Feedback Control", "CAD", "Machining", "C++", "Arduino"], MECHATRONICS_PROJECT_SECTIONS, Competition),
  new Project(22, "lego", "Lego Building Bot", "A ROS-controlled 6DOF UR5 robot arm that leverages OpenCV computer vision and a compliant gripper to assemble giant Lego bricks.", 
              [PROJECT_TAGS.HARDWARE, PROJECT_TAGS.FEATURED], "April - May 2022", "https://github.com/michaellu2019/2.12-final-project", "https://youtu.be/oTqwCtPKNQM", ["ROS", "OpenCV", "3D Printing", "Python", "C++"], MECHATRONICS_PROJECT_SECTIONS, Lego),
  new Project(17, "donkey", "Robot Donkey", "A WiFi-controlled robotic donkey that walks and moves its head using inverse kinematics.", 
              [PROJECT_TAGS.HARDWARE, PROJECT_TAGS.FEATURED], "January - June 2021", "https://github.com/michaellu2019/dog", "https://youtu.be/A4OMXvGx_4I", ["Inverse Kinematics", "CAD", "3D Printing", "Python", "Raspberry Pi"], MECHATRONICS_PROJECT_SECTIONS, Donkey),
  new Project(15, "boxing", "IoT Boxing", "An IoT boxing game that uses an ESP32 WiFI MCU and accelerometer real-time motion data over WebSockets to an online 3D boxing game.", 
              [PROJECT_TAGS.HARDWARE], "April - May 2021", "", "", []),
  new Project(14, "camera", "IR Camera Module", "A Raspberry Pi-based infrared camera module that uses OpenCV to read QR codes hidden behind infrared-transparent plastic.", 
              [PROJECT_TAGS.HARDWARE], "February - May 2021", "", "", []),
  // new Project(13, "antenna", "Directional Antenna Optimizer", "Robot Antenna", 
  //             [PROJECT_TAGS.HARDWARE], "April - May 2021", "", "", []),
  new Project(11, "krabs", "Kombat Krabs", "Remote-controlled toy robot crabs that walk using Jansen's linkage, built out of foam core, paper, and cardboard.", 
              [PROJECT_TAGS.HARDWARE, PROJECT_TAGS.FEATURED], "April - May 2020", "https://github.com/michaellu2019/kombat-krabs", "https://youtu.be/xg4couBU9fM", ["CAD", "C++", "Arduino"], MECHATRONICS_PROJECT_SECTIONS, Krabs),
  new Project(7, "beatbot", "BeatBot", "An autonomous line-following car that paces long distance runners along a running track.", 
              [PROJECT_TAGS.HARDWARE], "October - June 2019", "", "", []),
  new Project(6, "toby", "Toby", "A robot built primarily out of household items: cardboard, paper, Legos, power tools, and a smartphone running OpenCV for facial recognition and PocketSphinx for speech detection.", 
              [PROJECT_TAGS.HARDWARE], "July - September 2018", "", "", []),
  // new Project(5, "horse", "Animatronic Horse Head", "An animatronic horse head that mimics the movements of my mouth based on real-time data from OpenCV algorithms that would track my mouth position.", 
  //             [PROJECT_TAGS.HARDWARE], "August 2018", "", "", []),
  new Project(4, "tank", "RC Tank", "A remote-controlled Arduino toy tank built out of cardboard.", 
              [PROJECT_TAGS.HARDWARE], "May 2018", "", "", []),
  new Project(3, "trash", "Trash Mobile", "An electrical trach can vehicle built out of \"trash\": scrap wood, cardboard, old cordless drills, and wheelbarrow wheels.", 
              [PROJECT_TAGS.HARDWARE], "July - August 2017", "", "", []),
  new Project(2, "capacitive", "Capacitive Touch Controller", "An Arduino-based system that uses capacitive touch to control a computer, allowing users to draw custom controllers with paper and pencil to play various games", 
              [PROJECT_TAGS.HARDWARE], "February 2017", "", "", []),
];

const softwareProjects = [
  // new Project(28, "falcon", "Falcon 9 Rocket Landing", "Rocket", 
  //             [PROJECT_TAGS.SOFTWARE, PROJECT_TAGS.FEATURED], "April - May 2023", "", "", []),
  new Project(25, "david", "AI Turtles", "A simulation of a turtle population that evolves through a genetic algorithm to swim towards a target more efficiently.", 
              [PROJECT_TAGS.SOFTWARE, PROJECT_TAGS.FEATURED], "January 2023", "", "", ["Genetic Algorithms", "C"]),
  // new Project(21, "car", "Self-Driving RC Car", "6.141 Vibes", 
  //             [PROJECT_TAGS.SOFTWARE], "February - May 2022", "", "", []),
  // new Project(20, "split", "Split Fighters", "Robot Split Fighters", 
  //             [PROJECT_TAGS.SOFTWARE], "April - May 2022", "", "", []),
  // new Project(19, "grapple", "Grapple Getaway", "Robot Grapple", 
  //             [PROJECT_TAGS.SOFTWARE], "March 2022", "", "", []),
  new Project(18, "vocoder", "FPGA Vocoder", "An FPGA-based system that shifts the pitch of a human voice in real-time and also visualizes the result.", 
              [PROJECT_TAGS.SOFTWARE], "November - December 2021", "", "", ["Digital Signal Processing", "FPGA", "System Verilog"]),
  new Project(16, "ghostwriters", "Ghostwriters", "A ReactJS and Golang-based CRUD web-app that allows users to collaboratively create stories.", 
              [PROJECT_TAGS.SOFTWARE], "May 2021", "", "", ["Golang", "ReactJS"]),
  new Project(12, "chatbot", "Facebook Chatbot", "A Tensorflow-based Transformer deep learning model trained on my text messages to create an online chatbot.", 
              [PROJECT_TAGS.SOFTWARE, PROJECT_TAGS.FEATURED], "June 2020", "https://github.com/michaellu2019/Sadmanda-Chatbot", "https://youtu.be/KBvbvm9B2dA", ["Deep Learning", "TensorFlow", "Python"], SOFTWARE_PROJECT_SECTIONS, Chatbot),
  new Project(10, "regret", "Regret", "A ReactJS and Flask-based CRUD web-app that allows users to collaboratively decorate my bedroom wall.", 
              [PROJECT_TAGS.SOFTWARE], "March 2020", "", "", []),
  new Project(9, "friends", "Friends, Where You At?", "A Google Maps-based visualizer of the hometowns of my friends, obtained through Python web-scraping public Facebook data.", 
              [PROJECT_TAGS.SOFTWARE], "February 2020", "", "", []),
  new Project(8, "nutriscan", "NutriScan", "A mobile web application that allows users to take pictures of their meals, then uses deep learning to classify the food and track macronutrients.", 
              [PROJECT_TAGS.SOFTWARE], "November 2019", "", "", []),
  new Project(1, "euclidean", "The Euclidean Project", "A web-based geometry construction app.", 
              [PROJECT_TAGS.SOFTWARE], "May 2016", "", "", []),
];

export const projects = [...hardwareProjects, ...softwareProjects].sort((p1, p2) => p2.id - p1.id);