import { React } from 'react';

import cameraCover from '../../assets/images/project-assets/camera/camera-cover.jpg'
import cameraSketch from '../../assets/images/project-assets/camera/camera-sketch.png'
import cameraCAD from '../../assets/images/project-assets/camera/camera-cad.png'
import cameraExplodedCAD from '../../assets/images/project-assets/camera/camera-exploded-cad.png'
import cameraElectronics from '../../assets/images/project-assets/camera/camera-electronics.png'
import cameraCase from '../../assets/images/project-assets/camera/camera-case.png'
import cameraVision from '../../assets/images/project-assets/camera/camera-vision.png'

function Camera(props) {
  return (
    <div className="project-content-container" id="camera-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>The IR camera module was a 3D printed phone case with a Raspberry Pi Zero W infrared camera module that could read QR codes hidden behind infrared-transparent plastic.</p>
        <img src={cameraCover} />
      </div>

      <div className="project-content-container-section project-ideation">
        <h1>Ideation</h1>
        <img src={cameraSketch} />
        <p>With the ability to use infrared-transparent filament to 3D print hidden QR codes that could only be decoded with an IR camera, I wanted to design a lightweight, thin, removable phone case module that would house an IR camera that could read these hidden QR codes and stream them to my phone.</p>
      </div>
      
      <div className="project-content-container-section project-design">
        <h1>Design</h1>
        <p>The IR camera housing would be a removable module that could slide into small grooves on a custom 3D-printed phone case. To maintain the slim form factor of a smartphone phone, I designed the IR camera module housing to be just a few millimeters thick.</p>
        <div className="image-next-to-container">
          <div className="image-container"><img src={cameraCAD} /></div>
          <div className="image-container"><img src={cameraExplodedCAD} /></div>
        </div>
        <p>To keep the IR camera module as small and simple as possible, the main electronic components—Raspberry Pi Zero W, NoIR V2 Camera, and TNTOR Ultra-Thin Power Bank—were put tightly together in a case with connecting pegs to secure the module cover, removing the need for any fasteners.</p>
      </div>
      
      <div className="project-content-container-section project-fabrication">
        <h1>Fabrication</h1>
        <p>The IR camera module was printed with PLA to give it sufficient rigidity. To achieve a tight fit inside the module, I replaced the TNTOR Ultra-Thin Power Bank charging cable with a compact Micro USB and switch assembly. The NoIR camera would fit into the square hole of the camera cap above the Raspberry Pi Zero W.</p>
        <img src={cameraElectronics} />
        <p>The IR camera module was able to easily slide into the custom phone case, which was 3D printed with TPU so that it was flexible enough to fit around the phone and camera module.</p>
        <img src={cameraCase} />
        <p>Hardware:</p> 
        <ul>
          <li>Plenty of 3D-Printed Components Made from TPU and PLA</li>
        </ul>  

        <p>Electronics:</p>
        <ul>
          <li>1 × Raspberry Pi Zero W</li>
          <li>1 × NoIR V2 Camera</li>
          <li>1 × TNTOR Ultra-Thin Power Bank</li>
        </ul>  
      </div>
      
      <div className="project-content-container-section project-programming">
        <h1>Programming</h1>
        <img src={cameraVision} />
        <p>An OpenCV image processing script ran on the Raspberry Pi Zero W, which would take the IR camera output and apply several image transform techniques, including grayscale, Gaussian blur, and contrast limited adaptive histogram equalization (CLAHE), so that it was easier to read the QR code. The results would be streamed in real time to a smartphone app built with the cross-platform Python framework Kivy.</p>    
      </div>
      
      <div className="project-content-container-section project-results">
        <h1>Results</h1>
        <p>With everything assembled, the IR camera module was able to read hidden QR codes and hidden messages in 3D-printed objects in real time.</p>
        <iframe src="https://www.youtube.com/embed/Tjs1zH7IMxE" title="Embedding Invisible Codes in Objects for Augmented Reality" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>  
      </div>

      <div className="project-content-container-section project-improvements">
        <h1>Improvements</h1>
        <ul>
          <li>Implementing the algorithm in C++ instead of Python would probably reduce latency in the camera feed and lead to a better real-time experience.</li>
          <li>Fine tuning the 3D-print settings would resolve in higher-quality parts (the camera lens guard was very scuffed) as well as better fits between components (press fits, close fits, and sliding fits were used extensively) since fasteners would not used at all.</li>
        </ul>
      </div>
    </div>
  );
}

export default Camera;