import { React } from 'react';

import busCover from '../../assets/images/project-assets/bus/bus-cover.png'
import busSketch from '../../assets/images/project-assets/bus/bus-sketch.png'
import busCad from '../../assets/images/project-assets/bus/bus-cad.png'
import busPowerSchematic from '../../assets/images/project-assets/bus/bus-power-schematic.png'
import busPowerLayout from '../../assets/images/project-assets/bus/bus-power-layout.png'
import busPowerCAD from '../../assets/images/project-assets/bus/bus-power-cad.png'
import busPowerPCB from '../../assets/images/project-assets/bus/bus-power-pcb.JPG'
import busSystemDiagram from '../../assets/images/project-assets/bus/bus-system-diagram.png'
import busFabrication from '../../assets/images/project-assets/bus/bus-fabrication.JPG'
import busInstallation from '../../assets/images/project-assets/bus/bus-installation.mp4'
import busResults from '../../assets/images/project-assets/bus/bus-results.mp4'

function Bus(props) {
  return (
    <div className="project-content-container" id="bus-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>This IoT device was created to monitor bus stop occpancy and environmental conditions in real-time in Miani-Dade County, which was project challenge presented in the MIT class 6.900 - Engineering for Impact.</p>
        <img src={busCover} />
      </div>

      <div className="project-content-container-section project-ideation">
        <h1>Ideation</h1>
        <img src={busSketch} />
        <p>The bus-monitoring device was designed to be inconspicuous and was to be inserted into a bus pole. It would have a solar panel as a power source along with sensors to monitor the environment. Finally, it would use a cellular LTE module to post data to an online database.</p>
      </div>
      
      <div className="project-content-container-section project-design">
        <h1>Design</h1>
        <p>The IoT device had to keep its electrical components safe from environmental dangers such as weather, animals, and people.</p>
        <div className="image-next-to-container">
          <div className="image-container"><img src={busCad} /></div>
          <div className="text-container">
            <p>The device's case that had three components: a press-fit peg that would go into the bus pole, a main housing case, and a case cover that would have threaded holes for the solar panel to mount to. These parts were designed in Solidworks.</p>
            <p>The electronics would be housed inside the case. This would include a LiPo battery, custom PCB, and Boron LTE module.</p>  
            <p>The solar panel would then be mounted to the case cover with two sheet metal brackets. It was angled to prevent the accumulation of dirt and water (and bird droppings of course, who could forget).</p>
          </div>
        </div>
        <p>A custom PCB was designed to mimize the footprint of electronics as much as possible. A prototype USB battery power board was designed in Altium then built and tested. This board would then be developed further into an integrated power board that would house the device's ESP32 MCU, I2C communication lines to the device's temperature and humidity sensors, and the solar panel and battery charge circuitry.</p>
        <div className="image-next-to-container">
          <div className="image-container"><img src={busPowerSchematic} /></div>
          <div className="image-container"><img src={busPowerLayout} /></div>
        </div>
        <div className="image-next-to-container">
          <div className="image-container"><img src={busPowerCAD} /></div>
          <div className="image-container"><img src={busPowerPCB} /></div>
        </div>
      </div>
      
      <div className="project-content-container-section project-fabrication">
        <h1>Fabrication</h1>
        <p>The parts of the case were 3D printed. Surface mount components were soldered to the PCB with the help of plenty of leaded solder paste and a rework station.</p>
        <img src={busFabrication} />
        <video controls>
          <source src={busInstallation} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>Hardware:</p>
        <ul>
          <li>A Few 3D-Printed Case Components</li>
          <li>Some M3, M5, and 1/4"-20 Screws and Nuts</li>
          <li>2 × 5052-H32 Aluminum 1/16" Sheet Metal Brackets</li>
        </ul>  

        <p>Electronics:</p>
        <ul>
          <li>1 × Soshine 6W Mini Solar Panel</li>
          <li>1 × Boron LTE Module</li>
          <li>1 × AKZYTUE 3.7V 7200mAh 866898 Lipo Battery</li>
          <li>1 × A Custom PCB with an ESP32, AP7361C Voltage Regulator, MCP73871 Battery Management System, SHTC3 Temperature Sensor, SGP41-D-R4 Air Quality Sensors, and a lot of 0805-Sized Components...</li>
        </ul>  
      </div>
      
      <div className="project-content-container-section project-programming">
        <h1>Programming</h1>
        <p>Firmware for the electronics was written in C to allow the MCU to communicate with the sensors over I2C and also to scan its environment for unique IP addresses of nearby devices that would be correlated with occpancy of the bus stop. This data was then sent to a Boron LTE cellular module over serial communication, which then would periodically send an HTTP request to a Flask server.</p>
        <img src={busSystemDiagram} />
        <p>This Flask server would pull data from several tables in an SQL database and would display them on an HTML web page for authorized users to monitor bus stop occupancy, temperature, and humidity in real time.</p>
      </div>
      
      <div className="project-content-container-section project-results">
        <h1>Results</h1>
        <p>Eventually, and end-to-end system was built that could generate data at a bus stop and post it over cellular without the need for a WiFi connection. With the use of solar power and a LiPo battery to store charge, the device was able to power itself.</p>
        <video controls>
          <source src={busResults} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="project-content-container-section project-improvements">
        <h1>Improvements</h1>
        <ul>
          <li>Using Flask was a quick way to prove out an end-to-end system, though it was ultimately not very scalable. Switching to another server platform or cloud solutions such as AWS would mitigate this scalability issue.</li>
          <li>Relying on a press fit to insert the device into a bus pole caused a servicing nightmare as it was very difficult to remove the device from the bus pole. After several cycles of removing and inserting the device into the bus pole, the friction rubbed off much of the plastic's surface, making the press fit weaker. Using a temporary fastening method such as screws would add to the number of parts but would make the system much more maintainable.</li>
        </ul>
      </div>
    </div>
  );
}

export default Bus;