import { React } from 'react';

import yoyoCover from '../../assets/images/project-assets/yoyo/yoyo-cover.jpg'
import yoyoSketch from '../../assets/images/project-assets/yoyo/yoyo-sketch.jpg'
import yoyoCAD from '../../assets/images/project-assets/yoyo/yoyo-cad.png'
import yoyoCADSection from '../../assets/images/project-assets/yoyo/yoyo-cad-section.png'
import yoyoLandscapeCoverCAD from '../../assets/images/project-assets/yoyo/yoyo-landscape-cover-cad.png'
import yoyoLandscapeCoverMoldCAD from '../../assets/images/project-assets/yoyo/yoyo-landscape-cover-mold-cad.png'
import yoyoCAM from '../../assets/images/project-assets/yoyo/yoyo-cam.mp4'
import yoyoInjectionMoldingSettings from '../../assets/images/project-assets/yoyo/yoyo-injection-molding-settings.JPG'
import yoyoThermoformingSettings from '../../assets/images/project-assets/yoyo/yoyo-thermoforming-settings.JPG'
import yoyoAllDomes from '../../assets/images/project-assets/yoyo/yoyo-all-domes.JPG'
import yoyoAllLandscapeCovers from '../../assets/images/project-assets/yoyo/yoyo-all-landscape-covers.jpg'
import yoyoAllLandscapes from '../../assets/images/project-assets/yoyo/yoyo-all-landscapes.JPG'
import yoyoAllBases from '../../assets/images/project-assets/yoyo/yoyo-all-bases.jpg'
import yoyoAllPainted from '../../assets/images/project-assets/yoyo/yoyo-all-painted.JPG'
import yoyoAssembly from '../../assets/images/project-assets/yoyo/yoyo-assembly.JPG'
import yoyoAllAssemblies from '../../assets/images/project-assets/yoyo/yoyo-all-assemblies.jpg'

function Yoyo(props) {
  return (
    <div className="project-content-container" id="yoyo-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>These snow globe-themed yo-yos were designed for mass production in 2.008, MIT's second design and manufacturing class. The yo-yo features a mix of injection molded and thermoformed parts.</p>
        <img src={yoyoCover} />
      </div>

      <div className="project-content-container-section project-ideation">
        <h1>Ideation</h1>
        <img src={yoyoSketch} />
        <p>The idea behind the yo-yo was based on winter-themed snow globes from the holidays. It would feature an evergreen tree and a cozy house overlooking a frozen lake in a wintery landscape underneath a little dome. We planned for these three areas to be separate parts, with the landscape part having close-fit holes to sit on top the house and tree.</p>
      </div>
      
      <div className="project-content-container-section project-design">
        <h1>Design</h1>
        <p>These parts were then modeled in Fusion360 with more fidelity. Each yo-yo half would consist of several parts: a brown injection molded base, the thermoformed house and tree part, an injection molded landscape that would press fit into the base, the transparent snow globe dome, and a golden injection molded ring that would press fit into the base to keep all the parts together. The yo-yo halves would be connected with an 10-24 set screw that would screw into hex nuts embedded into the yo-yo base plastic.</p>
        <div className="image-next-to-container">
          <div className="image-container"><img src={yoyoCADSection} /></div>
          <div className="image-container"><img src={yoyoCAD} /></div>
        </div>
        <p>The injection molded parts were designed in CAD, then the part files were tweaked for injection molding with added draft angles and scaling to account for shrinkage before being used to create a core and cavity mold. The landscape cover had a "cavity" mold that was a flat faced down block (so that the chance of a parting line showing up on) and a "core" mold that had the negative of the part with ejector pin holes added in.</p>
        <div className="image-next-to-container">
          <div className="image-container"><img src={yoyoLandscapeCoverCAD} /></div>
          <div className="image-container"><img src={yoyoLandscapeCoverMoldCAD} /></div>
        </div>
        <p>Fusion360's CAM software was then used to generate the G-code for a HASS CNC mill to machine the aluminum molds. CAM settings were chosen to minimize the machining time, probability of tool breakage, and chance of fabrication error.</p>
        <video controls>
          <source src={yoyoCAM} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="project-content-container-section project-fabrication">
        <h1>Fabrication</h1>
        <p>Using G-code from Fusion360, a HASS CNC mill would machine the core and cavity for all injection molded parts. STL files were exported from CAD to 3D-print theromformed molds with an SLA printer. These molds were then placed in an injection molding machine and thermoforming machine to mass produce yo-yo parts. Machine settings were tuned to produce the best part quality with minimal fabrication defects/artifacts (e.g. ejector pin marks, warping regions, flash etc.). </p>
        <div className="image-next-to-container">
          <div className="image-container"><img src={yoyoInjectionMoldingSettings} /></div>
          <div className="image-container"><img src={yoyoThermoformingSettings} /></div>
        </div>
        <iframe src="https://www.youtube.com/embed/ApmKvSr3p4U" title="MIT 2.008 Final Project: Yo-Yo Manufacturing" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <p>Once the process was refined enough to be repeatable, yo-yo parts were able to be mass produced with enough consistency over the span of a few weeks. Over 100 of each yo-yo part was made from the injection molding machine and thermoforming machine..</p>
        <div className="image-next-to-container">
          <div className="image-container"><img src={yoyoAllDomes} /></div>
          <div className="image-container"><img src={yoyoAllLandscapes} /></div>
        </div>
        <div className="image-next-to-container">
          <div className="image-container"><img src={yoyoAllLandscapeCovers} /></div>
          <div className="image-container"><img src={yoyoAllBases} /></div>
        </div>
        <div className="image-next-to-container">
          <div className="image-container"><img src={yoyoAllPainted} /></div>
          <div className="image-container"><img src={yoyoAssembly} /></div>
        </div>
        <p>Once all the parts were made, certain parts were finished with spray paint, decorative elements (such as fake snow and glitter) were added, and all yo-yo parts were assembled into full yo-yos.</p>
        
        <p>Hardware:</p>
        <ul>
          <li>Many 4"×4"×1.5" aluminum blanks machined into injection molding molds.</li>
          <li>Many high-temperature resin SLA-printed thermoform molds.</li>
          <li>Many polypropylene injection molding parts.</li>
          <li>Many clear PETG and white HIPS theromformed parts.</li>
          <li>Tons of glitter, fake snow, and spray paint.</li>
          <li>A lot of 10-24, 5/8" set screws.</li>
          <li>A lot of 1/4" axle spacers.</li>
          <li>A lot of 10-24 nuts.</li>
          <li>A lot of yo-yo strings.</li>
        </ul>
      </div>
      
      <div className="project-content-container-section project-results">
        <h1>Results</h1>
        <p>Eventually, 50 full yo-yos were able to be assembled that required no adhesives for assembly and could survive a drop of 6 feet above ground.</p>
        <div className="image-container"><img src={yoyoAllAssemblies} /></div>
      </div>

      <div className="project-content-container-section project-improvements">
        <h1>Improvements</h1>
        <ul>
          <li>Thermoformed parts would come out of the machine with a lot of extra plastic that had to be cut out with a punch and die. A custom punch and die should have been machined based on our yo-yo dimensions as the lab's communal one was imprecise and dull, which resulted in a lot of hand-trimming. By not doing extra work up front, the production rate of yo-yos suffered immensely.</li>
          <li>Many of our injection molded parts were out of spec due to incorrect shrinkage estimates from the design phase. It turned out that the plastic from the injection molding machine did not shrink as much as expected, resulting in parts slightly larger than the defined upper specification limit. Simulation in Fusion360 beforehand or detection and adjustment early on could have mitigated this.</li>
        </ul>
      </div>
    </div>
  );
}

export default Yoyo;