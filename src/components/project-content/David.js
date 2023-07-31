import { React } from 'react';

import davidCover from '../../assets/images/project-assets/david/david-cover.png'
import davidTurtle from '../../assets/images/project-assets/david/david-turtle.png'
import davidJellyfish from '../../assets/images/project-assets/david/david-jellyfish.png'
import davidDiagram from '../../assets/images/project-assets/david/david-diagram.png'
import davidProgramming from '../../assets/images/project-assets/david/david-programming.png'
import davidEquation from '../../assets/images/project-assets/david/david-equation.png'

function David(props) {
  return (
    <div className="project-content-container" id="david-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>This project involved using a genetic algorithm to teach a population of turtles to learn to navigate through a simple obstacle course to a hidden jellyfish.</p>
        <img src={davidCover} />
      </div>

      <div className="project-content-container-section project-ideation">
        <h1>Ideation</h1>
        <p>Genetic algorithms take inspiration from nature, which has designed countless species of organisms to adapt to their environment through years of genetic variation and natural evolution. Organisms are born with variation that may help or hinder their survival, so those with advantageous characteristics are more likely to survive and pass on their desirable traits to their offspring, thus evolving the design of the pouplation as a whole.</p>
        <div className="image-next-to-container">
          <div className="image-container"><img src={davidTurtle} /></div>
          <div className="image-container"><img src={davidJellyfish} /></div>
        </div>
        <p>Genetic algorithms aim to mimic this phenomenon in producing variations of approaches to a task, and selecting and duplicating successful approaches. In my case, I wanted to see if a genetic algorithm could optimize a turtle's movement towards a goal location. Because I designed the environment to be difficult to move around in (low friction and no side movement), a genetic algorithm would be well suited for this task.</p>
      </div>
      
      <div className="project-content-container-section project-design">
        <h1>Design</h1>
        <p>At the start of the simulation, many turtles would be spawned into an ocean environment. Turtles would be able to swim to either accelerate forwards, accelerate backwards, turn clockwise, or turn counterclockwise, or they could choose to not move at all. The only catch was that there would be minimal friction, which would decrease their agility. If they ran into an obstacle or the edges of the simulation they would die.</p>
        <img src={davidDiagram} />
        <p>The genetic algorithm was broken into four main steps to run per generation:</p>
        <ol>
          <li>Many turtles would first be spawned into the simulation at the same location, and their goal would be to get to a jellyfish in a certain location.</li>  
          <li>Turtles would move around randomly until they ran out of moves (i.e. expending all their energy) or ran into a wall or obstacle, at which point they would perish.</li>
          <li>Each turtle would then receive a score. Turtles that got closer to the jellyfish and used less moves would achieve a higher score.</li>
          <li>The genetic algorithm would then create a new generation of turtles based on the previous generation, and turtles that had a higher score had a higher probability of producing turtles with similar behaviors in the next generation with some mutations. The turtle with the best score would automatically go to the next generation.</li>
        </ol> 
        <p>As the simulation progressed and the turtles evolved, the turtles that got closer to the jellyfish faster would have more offspring that would replicate their moves, thus advancing the population as a whole each generation.</p>
      </div>
      
      <div className="project-content-container-section project-programming">
        <h1>Programming</h1>
        <p>The genetic algorithm and simulation were programmed in C using the SDL game engine library. The structure of the software leveraged a lot of object-oriented practices, but because it was programmed in C, ended up involving a gazillion pointers being passed between structs.</p>  
        <img src={davidProgramming} />  
        <p>The main loop of the program controlled the overall flow of the simulation and interfaced with a <span className="code-text">population</span> "class" that controlled a population of turtles, updating each one and computing its score when it died before running the genetic algorithm to produce a new generation of mutated turtles.</p>
        <p>The turtles themselves were implemented in their own turtle "class" (called the <span className="code-text">david</span> "class" in the program). Each turtle ran their own move set and took care of their own dynamics, but they would transmit their status to the overarching <span className="code-text">popoulation</span> class.</p>
        <div className="image-next-to-container">
          <div className="image-container"><img src={davidEquation} /></div>
          <div className="text-container">
            <p>The score for each turtle was calculated by the equation on the left. Turtles that got closer to the jellyfish faster got a higher score. The scoring equation took into account a turtle's horizontal distance from the jellyfish, denoted by the absolute value of <i>x</i>, and their vertical distance from the jellyfish, denoted by <i>y<sup>2</sup></i>. </p>
          </div>
        </div>
        <p>Because I wanted to push turtles to get closer to the jellyfish in the vertical direction first (due to the nature of the obstacle course), their vertical distance was squared. In addition, the number of moves was counted by <i>m</i>. All these terms were scaled by weights <i>W<sub>p</sub> = 2.0</i> and <i>W<sub>v</sub> = 0.1</i> so that turtles that got closer to the goal would be rewarded a lot more. Another score weighting term <i>C = 100000000.0</i> was divided by the sum of all those terms so that turtles with small <i>x</i> and <i>y</i> distance from the jellyfish using a smaller <i>m</i> number of moves would get a higher score.</p>
        <p>The simulation would end once one of the turtles was able to reach the jellyfish.</p>
      </div>
      
      <div className="project-content-container-section project-results">
        <h1>Results</h1>
        <p>After tuning the parameters of the scoring function and tweaking the genetic algorithm, the a turtle from the population was able to reach the jellyfish within 101 generations. While certainly not the quickest way to reach the jellyfish, it was cool to see how a population of randomly moving turtles would eventually reach their goal with a little push from a mother-nature-esque algorithm.</p>
        <iframe src="https://www.youtube.com/embed/_sfkeGzkRUs" title="AI Teaches Turtles to Navigate 🐢" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      <div className="project-content-container-section project-improvements">
        <h1>Improvements</h1>
        <ul>
          <li>While turtles would eventually tend towards the jellyfish as the generations went on, many turtles got stuck on the ceiling, left wall, or first obstacle, possibly since all move sets were randomly mutated, and if a turtle randomly chose to move in a certain way and never slowed down, they'd force themselves into an obstacle. This could have been mitigated by reducing the mutation of the initial moves in the move set so that good moves from parent turtles would be preserved. This of course would risk getting stuck in local "optima" move sets.</li>
          <li>Tuning the scoring function so that fewer moves were rewarded more—either by changing the weight multiplier or by making the term exponential or polynomial—could improve convergence speed by rewarding turtles that moved faster.</li>
          <li>Ending the simulation when one turtle reached the jellyfish made it difficult to observe how fast the entire population would converge. When the turtle of the 101st generation reached the jellyfish, many turtles were still stuck on move sets that got them nowhere near the jellyfish.</li>
        </ul>
      </div>
    </div>
  );
}

export default David;