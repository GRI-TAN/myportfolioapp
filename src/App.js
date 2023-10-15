import React from "react";

const App = () => {
  const portfolioData = {
    name: "Madiraju Chaitanya Raju",
    place: "Bengaluru, India",
    skills: [
      "Aspiring Backend Web Developer",
      "Node.js",
      "Database Systems",
      "Machine Learning",
      "Data Science",
      "Python",
      "Cybersecurity",
    ],
    projects: [
      {
        title: "Backend Web API with User Authentication",
        description:
          "Created a secure backend web API with user authentication (login, registration) using Node.js, Express, and MongoDB. Developed custom controllers, routes, and models.",
      },
      {
        title: "PlantPulse",
        description:
          "Led the backend development for the 'PlantPulse' project in a 48-hour hackathon. Implemented user authentication, database management, and the 'Adopt a Tree' feature. Collaborated with the front-end team for seamless integration.",
      },
      {
        title: "Gatsby.js Web Development Collaboration",
        description:
          "Collaborated on a Gatsby.js website project, undertook troubleshooting and hosting efforts.",
      },
      {
        title: "Machine Learning Model Validation",
        description:
          "Created a model focusing on model validation techniques. Utilized Python to load data and created a DecisionTreeRegressor model to predict housing prices.",
      },
      {
        title: "Predictive Housing Model with Random Forest",
        description:
          "Utilized Python and sklearn's RandomForestRegressor with precision, producing housing price predictions.",
      },
    ],
  };

  return (
    <div className="portfolio">
      <div className="frame">
        <div className="header">
          <h1>{portfolioData.name}</h1>
          <h2>
            <u>PLACE:</u> {portfolioData.place}
          </h2>
        </div>
        <div className="body">
          <div className="about">
            <h3>
              <u>ABOUT ME</u>
            </h3>
            <p>
              Aspiring backend web developer well-acquainted with Node.js and Database systems. Familiar with Machine Learning and Data Science concepts using Python. Eager to learn and seeking internships to expand my expertise, with a particular interest in exploring cybersecurity to enhance my skills as a well-rounded backend developer.
            </p>
          </div>
          <div className="skills">
            <h3>
              <u>SKILLS</u>
            </h3>
            <ul>
              {portfolioData.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="projects">
            <h3>
              <u>PROJECTS</u>
            </h3>
            {portfolioData.projects.map((project, index) => (
              <div className="project" key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
