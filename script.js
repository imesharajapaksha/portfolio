// Skills Data
const skills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'OOP', level: 80 },
    { name: 'Python', level: 88 },
    { name: 'Java', level: 82 },
    { name: 'C', level: 75 },
    { name: 'C++', level: 75 },
    { name: 'SQL', level: 85 },
    { name: 'Git', level: 80 }
];

// Render Skills
function renderSkills() {
    const container = document.getElementById('skills-container');
    container.innerHTML = skills.map(skill => `
        <div class="skill-card">
            <h3>${skill.name}</h3>
            <div class="skill-level">
                <div class="skill-fill" style="width: ${skill.level}%"></div>
            </div>
        </div>
    `).join('');
}

// Projects Data
const projectsData = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce website built with React and Node.js.",
        link: "https://github.com/imesha/ecommerce-platform"
    },
    {
        title: "Task Management App",
        description: "A responsive task app using JavaScript and local storage.",
        link: "https://github.com/imesha/task-manager"
    },
    {
        title: "Weather Dashboard",
        description: "A dashboard using weather API and interactive UI.",
        link: "https://github.com/imesha/weather-dashboard"
    },
    {
        title: "Portfolio Website",
        description: "My personal portfolio website.",
        link: "#"
    }
];

// Render Projects
function renderProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = projectsData.map(project => `
        <div class="project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" class="project-link" target="_blank">View Project</a>
        </div>
    `).join('');
}

// CV Data
const cvData = {
    fileName: "Imesha_CV.pdf",
    fileUrl: "cv/Imesha_CV.pdf",
    lastUpdated: "2025-11-21"
};

// Handle CV Download
function handleCVDownload() {
    const downloadBtn = document.getElementById('download-cv-btn');

    downloadBtn.addEventListener('click', function(e) {
        e.preventDefault();

        const link = document.createElement('a');
        link.href = cvData.fileUrl;
        link.download = cvData.fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// Handle Contact Form
function handleContactForm() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(this);
        const data = Object.fromEntries(formData);

        console.log("Contact form submitted:", data);
        alert("Thank you for your message! I'll get back to you soon.");

        this.reset();
    });
}

// Initialize Everything
function init() {
    renderSkills();
    renderProjects();
    handleContactForm();
    handleCVDownload();
}

document.addEventListener("DOMContentLoaded", init);

