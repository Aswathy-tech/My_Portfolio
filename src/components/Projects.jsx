import React from 'react';
import project from '../data/project.json';
import { getImageUrl } from '../utils';
import styles from "./projects.module.css";

const Projects = () => {
  return (
    <section className={styles.container} id='projects'>
      <div className={styles.box}>
        <h3 className={styles.title}>Projects</h3>
        <div className={styles.projects}>
          {project.map((project, id) => (
            <div className={styles.projectBox} key={id}>
              <img src={getImageUrl(project.imageSrc)} className={styles.image} alt={project.title} />
              <div className={styles.projectDetails}>
                <h3 className={styles.heading}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <ul className={styles.skills}>
                  {project.skills.map((skill, id) => (
                    <li key={id} className={styles.skill}>{skill}</li>
                  ))}
                </ul>
                <div className={styles.links}>
                  <a href={project.demo} className={styles.link}>Demo</a>
                  <a href={project.source} className={styles.link}>Source</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
