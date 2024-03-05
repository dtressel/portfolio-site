import './Technologies.css';
import cssIcon from '../../assets/icons/technologies/css3.png';
import expressIcon from '../../assets/icons/technologies/Express.png';
import flaskIcon from '../../assets/icons/technologies/Flask.png';
import gitIcon from '../../assets/icons/technologies/Git.png';
import htmlIcon from '../../assets/icons/technologies/html5.png';
import jasmineIcon from '../../assets/icons/technologies/jasmine.png';
import javaScriptIcon from '../../assets/icons/technologies/javascript.png';
import nextJSIcon from '../../assets/icons/technologies/Next.js.png';
import nodeJSIcon from '../../assets/icons/technologies/Node.js.png';
import postgresIcon from '../../assets/icons/technologies/postgresql.png';
import pythonIcon from '../../assets/icons/technologies/python.png';
import reactIcon from '../../assets/icons/technologies/react.png';
import sqlIcon from '../../assets/icons/technologies/SQL.png';
import sqlAlchemyIcon from '../../assets/icons/technologies/SQLAlchemy.png';
import typescriptIcon from '../../assets/icons/technologies/typescript.png';

const Technologies = () => {
  const TechnologyObj = {
    JavaScript: javaScriptIcon,
    HTML: htmlIcon,
    CSS: cssIcon,
    "React.js": reactIcon,
    "Next.js": nextJSIcon,
    TypeScript: typescriptIcon,
    "Node.js": nodeJSIcon,
    "Express.js": expressIcon,
    Python: pythonIcon,
    Flask: flaskIcon,
    SQL: sqlIcon,
    postgreSQL: postgresIcon,
    // SQLALchemy: sqlAlchemyIcon,
    // Git: gitIcon,
    // Jasmine: jasmineIcon,
  }
  return (
    <div className="Technologies">
      <h2>Technologies:</h2>
      <div className="Technologies-icon-wrapper">
        {Object.keys(TechnologyObj).map((key) => (
          <div key={key}>
            <img className="Technologies-icon" src={TechnologyObj[key]} alt={`${key} icon`} />
            <div>{key}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Technologies;