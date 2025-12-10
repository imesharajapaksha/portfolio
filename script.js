// Data arrays simulating a database
const skillsData = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "OOP", level: 80 },
    { name: "C++", level: 75 },
    { name: "Python", level: 70 },
    { name: "SQL", level: 65 },
    { name: "Git", level: 85 }
];

const projectsData = [
    {
        title: "Fingerprint-Based Smart Lock System",
        description: "A collaborative IoT hardware project designed to enhance security functions. Developed a fingerprint-based smart lock system integrated with Bluetooth alert notifications to improve safety and user accessibility.",
        link: "project/hardware.pdf"
    },
    {
        title: "Quick Cars - Car Rental System",
        description: "A web-based car rental system built for customers and vehicle owners to easily rent and manage cars. Group project developed using HTML, CSS, Java, and PHP for the Web Development module.",
        link: "https://github.com/sahanrd/QuickCarz.git"
    },
    {
        title: "Cypher 3.0 - Inter-University Hackathon",
        description: "Contributed as Co-Chair of Cypher 3.0, an inter-university hackathon and coding competition organized by WIE, KDU. Played a key role in organizing and executing this major successful event.",
        link: "https://www.linkedin.com/posts/kdu-wie_ieee-ieeewie-wiekdu-activity-7387467032574881792-hqZ7?utm_medium=ios_app&rcm=ACoAAFS-Tb4BvqzsHbEBYBXapPXEtak3TlBmrpI&utm_source=social_share_send&utm_campaign=whatsapp"
    },
    {
        title: "Individual Portfolio Website",
        description: "A modern, responsive personal portfolio website showcasing skills, projects, and professional highlights. Built with HTML, CSS, and JavaScript featuring liquid glass design aesthetics.",
        link: "#"
    }
];

// CV Data (simulating backend storage)
const cvData = {
    fileName: "imesha_cv.pdf",
    fileUrl: "cv/imesha_cv.pdf", // Path to CV file
    lastUpdated: "2025-12-10"
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
    if (!form) return;

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const formData = new FormData(this);
        const data = Object.fromEntries(formData);

        const payload = {
            name: data.name,
            email: data.email,
            message: data.message,
            _subject: `Portfolio Contact: Message from ${data.name}`,
            _template: "table",
            _captcha: "false"
        };

        try {
            const response = await fetch("https://formsubmit.co/ajax/imeshaaa2004@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                alert("Your message has been sent successfully! I will get back to you soon.");
                this.reset();
            } else {
                alert("Failed to send your message. Please try again.");
            }
        } catch (error) {
            alert("Something went wrong! Please try again or email me directly: imeshaaa2004@gmail.com");
            console.error(error);
        }
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

document.addEventListener("DOMContentLoaded", () => {
    loadSkills();
    loadProjects();
    handleContactForm();  // <--- THIS MUST BE HERE
});
