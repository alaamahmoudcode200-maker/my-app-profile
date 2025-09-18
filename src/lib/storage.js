// src/lib/storage.js

export const loadProjects = () => {
  try {
    return JSON.parse(localStorage.getItem('myProjects') || '[]');
  } catch (error) {
    console.error('Error loading projects:', error);
    return [];
  }
};

export const saveProjects = (projects) => {
  try {
    localStorage.setItem('myProjects', JSON.stringify(projects));
  } catch (error) {
    console.error('Error saving projects:', error);
  }
};

export const addProject = (project) => {
  const projects = loadProjects();
  projects.push(project);
  saveProjects(projects);
};

export const deleteProject = (id) => {
  const projects = loadProjects();
  const updatedProjects = projects.filter(project => project.id !== id);
  saveProjects(updatedProjects);
};