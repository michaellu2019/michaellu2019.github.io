import Donkey from '../components/project-content/Donkey.js'
import Krabs from '../components/project-content/Krabs.js'
import Lego from '../components/project-content/Lego.js'
import Competition from '../components/project-content/Competition.js'
import Laptop from '../components/project-content/Laptop.js'
import Chatbot from '../components/project-content/Chatbot.js'
import David from '../components/project-content/David.js'
import Omni from '../components/project-content/Omni.js'
import Ball from '../components/project-content/Ball.js'
import Yoyo from '../components/project-content/Yoyo.js'
import Bus from '../components/project-content/Bus.js'
import Boxing from '../components/project-content/Boxing.js'
import Camera from '../components/project-content/Camera.js'
import Beatbot from '../components/project-content/Beatbot.js'
import Toby from '../components/project-content/Toby.js'
import Hydros from '../components/project-content/Hydros.js'
import Car from '../components/project-content/Car.js'
import Vocoder from '../components/project-content/Vocoder.js'
import Ghostwriters from '../components/project-content/Ghostwriters.js'
import Regret from '../components/project-content/Regret.js'
import Friends from '../components/project-content/Friends.js'
import Nutriscan from '../components/project-content/Nutriscan.js'
import Tank from '../components/project-content/Tank.js'
import Trash from '../components/project-content/Trash.js'
import Capacitive from '../components/project-content/Capacitive.js'
import Euclidean from '../components/project-content/Euclidean.js'

export const PROJECT_TAGS = {
  HARDWARE: "hardware",
  SOFTWARE: "software",
  FEATURED: "featured",
}

export const LAZY_PROJECT_SECTIONS = ["overview"];
export const LAZY_HARDWARE_PROJECT_SECTIONS = ["overview", "fabrication", "results"];
export const HARDWARE_PROJECT_SECTIONS = ["overview", "ideation", "design", "fabrication", "results", "improvements"];
export const MECHATRONICS_PROJECT_SECTIONS = ["overview", "ideation", "design", "fabrication", "programming", "results", "improvements"];
export const LAZY_SOFTWARE_PROJECT_SECTIONS = ["overview", "programming", "results"];
export const SOFTWARE_PROJECT_SECTIONS = ["overview", "ideation", "design", "programming", "results", "improvements"];


function Project(id, name, title, description, tags, date, 
                 codeLink="", demoLink="", skills=[], sections=[], component=(() => "Project info coming soon!")) {
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
  new Project(31, "ball", "BB-8 Robot", "A 20-inch ball robot that uses a pendulum mechanism and feedback control to stabilize itself.", 
              [PROJECT_TAGS.HARDWARE, PROJECT_TAGS.FEATURED], "April - May 2023", "https://github.com/michaellu2019/ball", "https://youtu.be/xmnu_rDfkFk", ["Feedback Control", "CAD", "PSoC", "C"], MECHATRONICS_PROJECT_SECTIONS, Ball),
  new Project(30, "omni", "Omni-Directional Robot", "An STM32-based robot that uses four omni-directional wheels to move in any direction. ", 
              [PROJECT_TAGS.HARDWARE, PROJECT_TAGS.FEATURED], "January - April 2023", "https://github.com/michaellu2019/laptop_v2", "https://youtu.be/sVWTkhwmhlI", ["Feedback Control", "CAD", "STM32", "C++"], MECHATRONICS_PROJECT_SECTIONS, Omni),
  new Project(28, "bus", "IoT Occupancy Sensor", "An ESP32-based IOT device designed to be deployed at bus stops to monitor ambient temperature, humidity, and to count the number of people waiting at the bus stop via WiFi sniffing.", 
              [PROJECT_TAGS.HARDWARE], "February - May 2023", "", "", ["CAD", "PCB Design", "ESP32", "C", "Python"], MECHATRONICS_PROJECT_SECTIONS, Bus),
  new Project(27, "yoyo", "Snow Globe Yo-Yos", "A snow-globe themed yo-yo designed for mass manufacturing, comprising of several injection-molded and thermoformed parts.", 
              [PROJECT_TAGS.HARDWARE], "February - April 2023", "", "", ["Design for Manufacturing", "CAD", "CAM"], HARDWARE_PROJECT_SECTIONS, Yoyo),
  new Project(25, "hydros", "Hydros", "A firehose cleaning machine that uses high-pressure water sprayers and hydro-powered scrubs to remove carcinogenic debris off of firehoses.", 
              [PROJECT_TAGS.HARDWARE], "September 2022 - December 2022", "", "https://youtu.be/Qw2EdmquCUw", ["CAD", "Amateur Plumbing Skills"], HARDWARE_PROJECT_SECTIONS, Hydros),
  new Project(24, "laptop", "Laptop Bot", "A 6DOF robot arm that takes commands from a laptop running ROS, enabling it to move around and press keyboard keys.", 
              [PROJECT_TAGS.HARDWARE, PROJECT_TAGS.FEATURED], "July - August 2022", "https://youtu.be/Iixz6tXIA5E", "https://github.com/michaellu2019/laptop", ["ROS", "CAD", "Arduino", "C++"], MECHATRONICS_PROJECT_SECTIONS, Laptop),
  new Project(23, "competition", "MIT Competition Robot", "An aluminum robot, featuring a belt-driven cascade lift, detachable winch, and tank chassis, designed to lift and pull heavy items in the final compoetition of 2.007, MIT's design and manufacturing class.", 
              [PROJECT_TAGS.HARDWARE, PROJECT_TAGS.FEATURED], "February - May 2022", "https://github.com/michaellu2019/big-daddy", "https://youtu.be/f2lEhvnP2P4", ["Feedback Control", "CAD", "Arduino", "C++"], MECHATRONICS_PROJECT_SECTIONS, Competition),
  new Project(22, "lego", "Lego Building Bot", "A ROS-controlled 6DOF UR5 robot arm that leverages OpenCV computer vision and a compliant gripper to assemble giant Lego bricks.", 
              [PROJECT_TAGS.HARDWARE, PROJECT_TAGS.FEATURED], "April - May 2022", "https://github.com/michaellu2019/2.12-final-project", "https://youtu.be/oTqwCtPKNQM", ["ROS", "OpenCV", "Python", "C++"], MECHATRONICS_PROJECT_SECTIONS, Lego),
  new Project(17, "donkey", "Robot Donkey", "A WiFi-controlled robotic donkey that walks and moves its head using inverse kinematics.", 
              [PROJECT_TAGS.HARDWARE, PROJECT_TAGS.FEATURED], "January - June 2021", "https://github.com/michaellu2019/dog", "https://youtu.be/A4OMXvGx_4I", ["Inverse Kinematics", "CAD", "Raspberry Pi", "Python"], MECHATRONICS_PROJECT_SECTIONS, Donkey),
  new Project(15, "boxing", "IoT Boxing", "An IoT boxing game that uses an ESP32 WiFI MCU and accelerometer real-time motion data over WebSockets to an online 3D boxing game.", 
              [PROJECT_TAGS.HARDWARE], "April - May 2021", "https://github.com/michaellu2019/ragdoll-boxing", "https://youtu.be/XnNphWLp-24", ["CAD", "ESP32", "WebSockets", "C", "Python", "JavaScript"], MECHATRONICS_PROJECT_SECTIONS, Boxing),
  new Project(14, "camera", "IR Camera Module", "A Raspberry Pi-based infrared camera module that uses OpenCV to read QR codes hidden behind infrared-transparent plastic.", 
              [PROJECT_TAGS.HARDWARE], "February - May 2021", "", "https://hcie.csail.mit.edu/research/infraredtags/infraredtags.html", ["CAD", "OpenCV", "Raspberry Pi", "Python"], MECHATRONICS_PROJECT_SECTIONS, Camera),
  // new Project(13, "antenna", "Directional Antenna Optimizer", "Robot Antenna", 
  //             [PROJECT_TAGS.HARDWARE], "April - May 2021", "", "", []),
  new Project(11, "krabs", "Kombat Krabs", "Remote-controlled toy robot crabs that walk using Jansen's linkage, built out of foam core, paper, and cardboard.", 
              [PROJECT_TAGS.HARDWARE, PROJECT_TAGS.FEATURED], "April - May 2020", "https://github.com/michaellu2019/kombat-krabs", "https://youtu.be/xg4couBU9fM", ["CAD", "Arduino", "C++"], MECHATRONICS_PROJECT_SECTIONS, Krabs),
  new Project(7, "beatbot", "BeatBot", "An autonomous line-following car that paces long distance runners along a running track.", 
              [PROJECT_TAGS.HARDWARE], "October - June 2019", "", "", ["Feedback Control", "CAD", "Arduino", "C++"], MECHATRONICS_PROJECT_SECTIONS, Beatbot),
  new Project(6, "toby", "Toby", "A robot built primarily out of household items: cardboard, paper, Legos, power tools, and a smartphone running OpenCV for facial recognition and PocketSphinx for speech detection.", 
              [PROJECT_TAGS.HARDWARE], "July - September 2018", "https://github.com/michaellu2019/Annice-Brain-App", "", ["OpenCV", "Android Studio", "Arduino", "C++", "Java"], MECHATRONICS_PROJECT_SECTIONS, Toby),
  // new Project(5, "horse", "Animatronic Horse Head", "An animatronic horse head that mimics the movements of my mouth based on real-time data from OpenCV algorithms that would track my mouth position.", 
  //             [PROJECT_TAGS.HARDWARE], "August 2018", "", "", []),
  new Project(4, "tank", "RC Tank", "A remote-controlled Arduino toy tank built out of cardboard.", 
              [PROJECT_TAGS.HARDWARE], "May 2018", "https://github.com/michaellu2019/cardboard-tank", "", ["Arduino", "C++"], LAZY_PROJECT_SECTIONS, Tank),
  new Project(3, "trash", "Trash Mobile", "An electrical trach can vehicle built out of \"trash\": scrap wood, cardboard, old cordless drills, and wheelbarrow wheels.", 
              [PROJECT_TAGS.HARDWARE], "July - August 2017", "", "", ["Arduino", "C++"], LAZY_PROJECT_SECTIONS, Trash),
  new Project(2, "capacitive", "Capacitive Touch Controller", "An Arduino-based system that uses capacitive touch to control a computer, allowing users to draw custom controllers with paper and pencil to play various games", 
              [PROJECT_TAGS.HARDWARE], "February 2017", "", "", ["Arduino", "C++"], LAZY_PROJECT_SECTIONS, Capacitive),
];

const softwareProjects = [
  // new Project(28, "falcon", "Falcon 9 Rocket Landing", "Rocket", 
  //             [PROJECT_TAGS.SOFTWARE, PROJECT_TAGS.FEATURED], "April - May 2023", "", "", []),
  new Project(26, "david", "AI Turtles", "A simulation of a turtle population that evolves through a genetic algorithm to swim towards a target more efficiently.", 
              [PROJECT_TAGS.SOFTWARE, PROJECT_TAGS.FEATURED], "January 2023", "https://github.com/michaellu2019/life-of-david", "https://youtu.be/_sfkeGzkRUs", ["Genetic Algorithms", "SDL", "C"], SOFTWARE_PROJECT_SECTIONS, David),
  new Project(21, "car", "Self-Driving RC Car", "A ROS-controlled RC car that used lidar and a depth camera to navigate around a mini-city and an indoor track.", 
              [PROJECT_TAGS.SOFTWARE], "February - May 2022", "", "", ["Localization, Mapping, and Planning Algorithms", "Feedback Control", "ROS", "OpenCV", "Python"], LAZY_SOFTWARE_PROJECT_SECTIONS, Car),
  // new Project(20, "split", "Split Fighters", "Robot Split Fighters", 
  //             [PROJECT_TAGS.SOFTWARE], "April - May 2022", "", "", []),
  // new Project(19, "grapple", "Grapple Getaway", "Robot Grapple", 
  //             [PROJECT_TAGS.SOFTWARE], "March 2022", "", "", []),
  new Project(18, "vocoder", "FPGA Vocoder", "An FPGA-based system that shifts the pitch of a human voice in real-time and also visualizes the result.", 
              [PROJECT_TAGS.SOFTWARE], "November - December 2021", "https://github.com/michaellu2019/fpga-vocoder", "https://youtu.be/PiNG7RL6Dus", ["Digital Signal Processing", "FPGA", "System Verilog"], LAZY_SOFTWARE_PROJECT_SECTIONS, Vocoder),
  new Project(16, "ghostwriters", "Ghostwriters", "A ReactJS and Golang-based CRUD web-app that allows users to collaboratively create stories.", 
              [PROJECT_TAGS.SOFTWARE], "May 2021", "https://github.com/michaellu2019/ghostwriters", "https://ghost-writers.herokuapp.com", ["ReactJS", "Golang"], LAZY_PROJECT_SECTIONS, Ghostwriters),
  new Project(12, "chatbot", "Facebook Chatbot", "A Tensorflow-based Transformer deep learning model trained on my text messages to create an online chatbot.", 
              [PROJECT_TAGS.SOFTWARE, PROJECT_TAGS.FEATURED], "June 2020", "https://github.com/michaellu2019/Sadmanda-Chatbot", "https://youtu.be/KBvbvm9B2dA", ["Deep Learning", "TensorFlow", "Python"], SOFTWARE_PROJECT_SECTIONS, Chatbot),
  new Project(10, "regret", "Regret", "A ReactJS and Flask-based CRUD web-app that allows users to collaboratively decorate my bedroom wall.", 
              [PROJECT_TAGS.SOFTWARE], "March 2020", "https://github.com/michaellu2019/Regret", "https://big-regret.herokuapp.com", ["ReactJS", "Flask", "AWS", "Python"], LAZY_PROJECT_SECTIONS, Regret),
  new Project(9, "friends", "Friends, Where You At?", "A Google Maps-based visualizer of the hometowns of my friends, obtained through Python web-scraping public Facebook data.", 
              [PROJECT_TAGS.SOFTWARE], "February 2020", "https://github.com/michaellu2019/Frens-Where-U-At", "https://michaellu2019.github.io/Frens-Where-U-At/visualizer/index.html", ["Selenium", "BeautifulSoup", "Python"], LAZY_PROJECT_SECTIONS, Friends),
  new Project(8, "nutriscan", "NutriScan", "A mobile web application that allows users to take pictures of their meals, then uses deep learning to classify the food and track macronutrients.", 
              [PROJECT_TAGS.SOFTWARE], "November 2019", "https://github.com/michaellu2019/NutriScan", "https://devpost.com/software/nutriscan-jli0t2", ["ReactJS", "Flask", "Firebase", "Google Vision", "Twilio", "Python"], LAZY_PROJECT_SECTIONS, Nutriscan),
  new Project(1, "euclidean", "The Euclidean Project", "A web-based geometry construction app.", 
              [PROJECT_TAGS.SOFTWARE], "May 2016", "https://github.com/LittyLing/The-Euclidean-Project", "http://littyling.github.io/The-Euclidean-Project", ["HTML", "CSS", "JavaScript"], LAZY_PROJECT_SECTIONS, Euclidean),
];

export const projects = [...hardwareProjects, ...softwareProjects].sort((p1, p2) => p2.id - p1.id);