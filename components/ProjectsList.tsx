import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
  return (
    <div className="md:grid grid-cols-3 gap-4 md:p-16 p-4">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};

export default ProjectsList;
