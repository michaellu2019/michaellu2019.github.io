import { React } from 'react';

import lightCover from '../../assets/images/project-assets/light/light-cover.jpg';
import lightPowerStates from '../../assets/images/project-assets/light/light-power-states.png';
import lightBlockDiagram from '../../assets/images/project-assets/light/light-block-diagram.png';
import lightSpreadsheet from '../../assets/images/project-assets/light/light-spreadsheet.png';
import lightSchematic from '../../assets/images/project-assets/light/light-schematic.png';
import lightLayout from '../../assets/images/project-assets/light/light-layout.png';
import lightBoost from '../../assets/images/project-assets/light/light-boost.jpg';
import lightScope from '../../assets/images/project-assets/light/light-scope.jpg';
import lightBaby from '../../assets/images/project-assets/light/light-baby.jpeg'

function Light(props) {
  return (
    <div className="project-content-container" id="light-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>Inspired by the difficulty certain operating rooms have with getting reliable electricity to power surgical lights, this electronics control module was able to switch between wall power, solar power, and  battery power in less than a second to power operating room lights. This device served as a proof-of-concept prototype for the MIT class 2.75 - Medical Device Design.</p>
        <img alt="" src={lightCover} />
      </div>

      <div className="project-content-container-section project-ideation">
        <h1>Ideation</h1>

        <p>The impetus for the project came from the fact that certain operating rooms across the world might face blackouts and brownouts, thus requiring robust surgical lights that could switch to backup power sources. The following power states were devised:</p>
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={lightPowerStates} /></div>
          <div>
            <p>
              <ol>
                <li>If reliable AC mains power is available, it is used to charge a battery and power the surgical lights.</li>
                <li>If only solar power is available, it is used to charge the battery, and the battery powers the lights.</li>
                <li>If only battery power is available, it is used to power the lights.</li>
              </ol>
            </p>
          </div>
        </div>
      </div>
      
      <div className="project-content-container-section project-design">
        <h1>Design</h1>
        <img alt="" src={lightBlockDiagram} />
        <p>These requirements were turned into a a modular system with five custom PCBs screwed onto a main board (so that faulty modules could be swapped out for new ones). These modules included a boost converter to step up rectified 12V DC power (from the wall) to 24V, a buck converter to take 24V (from either the boost converter of solar power) to charge the lead-acid battery at a variety of voltages, a power switching board that uses an automotive relay to switch between battery and wall power, a status UI module to display the current status of the system, and a logic module with an RPi Pico to handle the controls of individual modules.</p>
        
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={lightSpreadsheet} /></div>
          <div>
            <p>I worked on designing a boost converter to step up 12V to 24V for the battery-charging buck converter. The specifications for the boost converter were devised in a spreadsheet with switching losses being taken into consideration.</p>
          </div>
        </div>
      </div>
      
      <div className="project-content-container-section project-fabrication">
        <h1>Fabrication</h1>
        <p>The custom PCBs were designed to use widely available electrical parts in any supply chain, especially socketed ICs when possible. The boost converter featured 3 MOSFETs, each driven by a push-pull BJT drive. These BJTs were fed a 250 kHz square wave from a TL494 chip, which also had inputs for voltage and current feedback as well as overvoltage protection.</p>
        
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={lightSchematic} /></div>
          <div className="image-container"><img alt="" src={lightLayout} /></div>
        </div>

        <p>The boost converter was laid out on a two-layer PCB with the large inductors and capacitors placed in the upper left-hand region, MOSFETs and power diodes in the upper region, and ICs in the lower region. A ground layer was poured and power was routed to different elements through polygon pours as the rated amperage was up to 10A.</p>
        
        <img alt="" src={lightBoost} />
        <p>Hardware:</p>
        <ul>
          <li>4 × M3 Screw</li>
          <li>4 × M3 Standoff</li>
        </ul>

        <p>Electronics:</p>
        <ul>
          <li>1 × TL494IN PWM Controller</li>
          <li>1 × LM358P Amplifier</li>
          <li>1 × TL431ACP Shunt Voltage Reference IC</li>
          <li>5 × PMEG045V150EPD Schottky Diode</li>
          <li>3 × AOT240L N-Channel MOSFET</li>
          <li>4 × BC327 PNP Transistor</li>
          <li>3 × BC337 NPN Transistor</li>
          <li>1 × 5mR Shunt Resistor</li>
          <li>1 × 12A Fuse</li>
          <li>2 × 470 μF</li>
          <li>2 × 220 μF</li>
          <li>1 × 68 μH</li>
          <li>2 × Trim Potentiometer</li>
          <li>Lots of Test Points</li>
          <li>Plenty 0805 of Resistors, Capacitors, and LEDs</li>
          <li>Too Many Jumpers</li>
        </ul>
      </div>
      
      <div className="project-content-container-section project-results">
        <h1>Results</h1>

        <p>The boost converter was able to produce 24V from 12V with a switching frequency of 250 kHz and an efficiency of 86% when powering the buck converter that was charging the lead-acid battery.</p>
        <img alt="" src={lightScope} />

        <p>Eventually, all five PCBs were put together to control a lightbulb. The switching module was able to automatically change power sources from the (simulated) solar panel power to wall power and battery power. Users would be able to see which power source was active and how much battery charge was left (if being used) on the UI display module.</p>
        <iframe src="https://www.youtube.com/embed/6yVy80NyFwI" title="MIT 2.75 Final Project: Surgical Lighting Control System" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> 
      </div>

      <div className="project-content-container-section project-improvements">
        <h1>Improvements</h1>
        <img alt="" src={lightBaby} />

        <ul>
          <li>The voltage and feedback circuits for the boost converter were improperly tuned, which sometimes caused instability based on the boost converter load. Picking different values for some of the passive elements in the feedback network might have mitigated this result.</li>
          <li>Using an instrumentation amplifier instead of a regular differential amplifier would help with measuring current (especially at lower values) through the shunt resistor regardless of system noise.</li>
        </ul>
      </div>
    </div>
  );
}

export default Light;