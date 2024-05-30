import React, { useState, useEffect } from "react";

// import data
import { projectsData, projectsNav } from "./Data";

// import components
import WorkItems from "./WorkItems";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    // get projects based on item
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.includes(item.name);
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      {/* projects nav */}
      <div className="work__filters">
        {projectsNav.map((navItem, index) => (
          <span
            onClick={(e) => {
              handleClick(e, index);
            }}
            className={`${active === index ? "active-work" : ""} work__item`}
            key={index}
          >
            {navItem.name}
          </span>
        ))}
      </div>
      {/* projects */}
      <div className="work__container container grid">
        {projects.map((projectItem) => (
          <WorkItems item={projectItem} key={projectItem.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
