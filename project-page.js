const projectId = new URLSearchParams(window.location.search).get("project");
const project = projects.find((item) => item.id === projectId);
const projectContent = document.querySelector("#project-content");

if (!project) {
  document.title = "Project not found — Julius Zajitschek";
  const message = document.createElement("p");
  message.className = "notice";
  message.textContent =
    "This project could not be found. Please return to the selected projects and choose another project.";
  projectContent.append(message);
} else {
  document.title = `${project.title} — Julius Zajitschek`;

  const header = document.createElement("header");
  header.className = "project-detail-header";
  const heading = document.createElement("h1");
  heading.textContent = project.title;
  header.append(heading);
  projectContent.append(header);

  const image = document.createElement("img");
  image.className = "project-detail-image";
  image.src = project.image;
  image.alt = project.title;
  const imageFrame = document.createElement("div");
  imageFrame.className = "project-detail-image-frame";
  imageFrame.append(image);
  projectContent.append(imageFrame);

  const copy = document.createElement("div");
  copy.className = "project-detail-copy";

  [
    ["Overview", project.overview],
    ["Skills", project.skills.join(" · ")],
    ["Tools", project.tools],
    ["Challenges", project.challenges],
  ].forEach(([title, content]) => {
    const section = document.createElement("section");
    section.className = "detail-section";
    const sectionHeading = document.createElement("h2");
    sectionHeading.textContent = title;
    const paragraph = document.createElement("p");
    paragraph.textContent = content;
    section.append(sectionHeading, paragraph);
    copy.append(section);
  });

  const actions = document.createElement("div");
  actions.className = "detail-actions";
  const portfolioLink = document.createElement("a");
  portfolioLink.className = "button";
  portfolioLink.href = "https://gentfossly.github.io/website%20pages/portfolio.html";
  portfolioLink.target = "_blank";
  portfolioLink.rel = "noopener noreferrer";
  portfolioLink.textContent = "View in Full Portfolio";
  actions.append(portfolioLink);
  copy.append(actions);
  projectContent.append(copy);
}
