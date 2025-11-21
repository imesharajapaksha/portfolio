// Data arrays simulating a database
const skillsData = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Python", level: 70 },
    { name: "SQL", level: 65 },
    { name: "Git", level: 85 }
];

const projectsData = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce website built with React and Node.js, featuring user authentication, payment integration, and admin dashboard.",
        link: "https://github.com/imesha/ecommerce-platform"
    },
    {
        title: "Task Management App",
        description: "A responsive task management application using vanilla JavaScript, HTML, and CSS with local storage for data persistence.",
        link: "https://github.com/imesha/task-manager"
    },
    {
        title: "Weather Dashboard",
        description: "A weather dashboard that fetches data from a public API and displays current weather and forecasts with interactive charts.",
        link: "https://github.com/imesha/weather-dashboard"
    },
    {
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website showcasing projects and skills, built with HTML, CSS, and JavaScript.",
        link: "#"
    }
];

// CV Data (simulating backend storage)
const cvData = {
    fileName: "imesha_cv.pdf",
    fileUrl: "cv/imesha_cv.pdf", // Path to CV file
    lastUpdated: "2025-11-21"
};

// Function to render skills
function renderSkills() {
    const container = document.getElementById('skills-container');
    container.innerHTML = skillsData.map(skill => `
        <div class="skill-card">
            <h3>${skill.name}</h3>
            <div class="skill-level">
                <div class="skill-fill" style="width: ${skill.level}%"></div>
            </div>
        </div>
    `).join('');
}

// Function to render projects
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

// Function to handle contact form submission
function handleContactForm() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Simulate server submission by logging to console
        console.log('Contact form submitted:', data);
        
        // Show success alert
        alert('Thank you for your message! I\'ll get back to you soon.');
        
        // Reset the form
        this.reset();
    });
}

// Function to handle CV download
function handleCVDownload() {
    const downloadBtn = document.getElementById('download-cv-btn');
    downloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Simulate backend retrieval by logging to console
        console.log('CV Download requested:', {
            fileName: cvData.fileName,
            fileUrl: cvData.fileUrl,
            timestamp: new Date().toISOString()
        });
        
        // Check if CV file exists, otherwise show alert
        // In a real scenario, this would fetch from the server
        const cvExists = true; // Set to true when you add the actual CV file
        
        if (cvExists) {
            // Create a temporary link and trigger download
            const link = document.createElement('a');
            link.href = cvData.fileUrl;
            link.download = cvData.fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            alert('CV file will be available soon. Please add your CV file to the "cv" folder and name it "Imesha_CV.pdf"');
        }
    });
}

// Initialize the application
function init() {
    renderSkills();
    renderProjects();
    handleContactForm();
    handleCVDownload();
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', init);