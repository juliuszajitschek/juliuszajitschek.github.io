function createProjectCard(project, featured) {
  const card = document.createElement("article");
  card.className = "project-card";

  const projectUrl = `project.html?project=${encodeURIComponent(project.id)}`;
  const imageLink = document.createElement("a");
  imageLink.className = "project-image-link";
  imageLink.href = projectUrl;

  const image = document.createElement("img");
  image.className = "project-image";
  image.src = project.image;
  image.alt = project.title;
  image.loading = "lazy";
  imageLink.append(image);
  card.append(imageLink);

  const heading = document.createElement("h3");
  const titleLink = document.createElement("a");
  titleLink.href = projectUrl;
  titleLink.textContent = project.title;
  heading.append(titleLink);
  card.append(heading);

  if (featured) {
    const link = document.createElement("a");
    link.className = "text-link";
    link.href = projectUrl;
    link.textContent = "→ View Project";
    card.append(link);
    return card;
  }

  const summary = document.createElement("p");
  summary.className = "project-summary";
  summary.textContent = project.summary;
  card.append(summary);

  const tags = document.createElement("ul");
  tags.className = "project-tags";
  project.skills.forEach((skill) => {
    const tag = document.createElement("li");
    tag.textContent = skill;
    tags.append(tag);
  });
  card.append(tags);

  const link = document.createElement("a");
  link.className = "button button-outline";
  link.href = projectUrl;
  link.textContent = "Read More";
  card.append(link);
  return card;
}

const featuredProjects = projects.filter((project) => project.featured);
const featuredContainer = document.querySelector("#featured-projects");
const selectedContainer = document.querySelector("#selected-projects");

featuredProjects.forEach((project) => {
  featuredContainer.append(createProjectCard(project, true));
});

projects.forEach((project) => {
  selectedContainer.append(createProjectCard(project, false));
});
