import { React } from 'react';


import vocoderCover from '../../assets/images/project-assets/vocoder/vocoder-cover.png'
import vocoderDiagram from '../../assets/images/project-assets/vocoder/vocoder-diagram.png'

function Vocoder(props) {
  return (
    <div className="project-content-container" id="vocoder-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>This project involved building an audio vocoder with a Xilinx FPGA to shift the pitch of a human voice in real time and also visualize the result with a frequency response plot and spectrogram.</p>
        <img src={vocoderCover} />
      </div>
      
      <div className="project-content-container-section project-programming">
        <h1>Programming</h1>
        <p>The FPGA would take in an audio signal from a small microphone and then run it through some anti-aliasing filters. The signal would then be transformed into the frequency domain with a fast Fourier transform. This signal would then be passed into a module that would detect the fundamental frequency as well as a module that would shift the frequency by an amount specified by the user using the FPGA's switch controls. An inverse fast Fourier transform would then be performed to turn the signal back into the time domain so that it could be played on the FPGA's speakers. All resulting signals would be visualized as well on an external display over VGA.</p>   
        <img src={vocoderDiagram} /> 
      </div>
      
      <div className="project-content-container-section project-results">
        <h1>Results</h1>
        <p>After several all-nighters, the system was working, allowing a user to use the Xilinx FPGA to shift their voice in real time while hearing and seeing the resulting changed signal.</p>
        <iframe src="https://www.youtube.com/embed/PiNG7RL6Dus" title="MIT 6.111 Final Project: Real-Time FPGA Vocoder" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
    </div>
  );
}

export default Vocoder;