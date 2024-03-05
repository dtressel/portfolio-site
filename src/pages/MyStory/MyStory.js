import './MyStory.css';
import celloPerforming from '../../assets/photos/Daniel-performing-cropped-small.png';

const MyStory = () => {
  return (
    <div className="MyStory">
      <h1>My Story</h1>
      <img src={celloPerforming} alt="Daniel performing on cello" className="MyStory-photo" />
      <p>
        From composing symphonies to crafting web applications, I've always been a creator at heart, crafting large-scale 
        architecture while managing fine details. From performing with world-class musicians to building software with other 
        engineers, I'm accustomed to collaborating, delivering high-quality products, and performing under pressure.
      </p>
      <p>
        Before I began my career as a Software Engineer, I worked for 15 years as a classical cellist and composer. I 
        performed in orchestras and chamber ensembles touring throughout the U.S., China, and Europe. 
        I also shared my passion for music with my students at Universities and heard my compositions performed by professional 
        ensembles. 
      </p>
      <p>
        With a downturn in the classical music industry during Covid, I knew it was time to pursue my other passion, software engineering! 
        Since launching my career as a software engineer I have worked tirelessly to develop my skills working 
        through Springboard's Software Engineering coding bootcamp and finding numerous outlets to begin working and gaining 
        professional experience. I am a front-end software engineer specializing in JavaScript, React.js, and CSS.
      </p>
    </div>
  )
}

export default MyStory;