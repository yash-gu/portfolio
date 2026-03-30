const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const themeToggle = document.getElementById('themeToggle');
const contactForm = document.getElementById('contactForm');
const modal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const projectCards = document.querySelectorAll('.project-card');

let lastScroll = 0;
let typingIndex = 0;
let typingTextElement = document.querySelector('.typing-text');
const texts = [
    'Aspiring Software Developer',
    'DSA Enthusiast',
    'Cloud & DevOps Learner',
    'Full-Stack Developer'
];
let currentTextIndex = 0;

function typeWriter() {
    const currentText = texts[currentTextIndex];

    if (typingIndex < currentText.length) {
        typingTextElement.textContent += currentText.charAt(typingIndex);
        typingIndex++;
        setTimeout(typeWriter, 100);
    } else {
        setTimeout(eraseText, 2000);
    }
}

function eraseText() {
    const currentText = texts[currentTextIndex];

    if (typingIndex > 0) {
        typingTextElement.textContent = currentText.substring(0, typingIndex - 1);
        typingIndex--;
        setTimeout(eraseText, 50);
    } else {
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        setTimeout(typeWriter, 500);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeWriter, 1000);
});

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.classList.remove('hidden');
        return;
    }

    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }

    lastScroll = currentScroll;

    animateSkillBars();
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

const currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (barPosition < screenPosition && !bar.classList.contains('animated')) {
            const progress = bar.getAttribute('data-progress');
            bar.style.setProperty('--progress-width', progress + '%');
            bar.classList.add('animated');
        }
    });
}

const projectData = {
    'campusx': {
        title: 'CampusX',
        description: `
            <h2>CampusX - Campus Marketplace</h2>
            <p>A comprehensive full-stack marketplace application designed specifically for Bennett University students. The platform enables students to buy and sell items, communicate through real-time chat, and manage their listings efficiently.</p>

            <h3>Key Features</h3>
            <ul>
                <li>Secure user authentication with bcrypt encryption</li>
                <li>Real-time chat functionality for buyer-seller communication</li>
                <li>Responsive UI design for seamless mobile and desktop experience</li>
                <li>Product listing and management system</li>
                <li>Search and filter capabilities</li>
                <li>User profile management</li>
            </ul>

            <h3>Technology Stack</h3>
            <ul>
                <li><strong>Frontend:</strong> React.js with modern hooks and state management</li>
                <li><strong>Backend:</strong> Node.js with Express framework</li>
                <li><strong>Database:</strong> MongoDB for flexible data storage</li>
                <li><strong>Authentication:</strong> bcrypt for secure password hashing</li>
                <li><strong>Real-time:</strong> WebSocket integration for chat features</li>
            </ul>

            <h3>Challenges & Solutions</h3>
            <p>Implementing real-time chat while maintaining security was a key challenge. Solved by integrating WebSocket with proper authentication middleware and message encryption.</p>
        `,
        github: '#',
        demo: '#'
    },
    'audible-eyes': {
        title: 'Audible Eyes',
        description: `
            <h2>Audible Eyes - PDF to Speech Converter</h2>
            <p>An accessibility-focused application that converts PDF documents into speech, making digital content accessible to visually impaired users. The tool features multi-language support and a simplified user interface.</p>

            <h3>Key Features</h3>
            <ul>
                <li>PDF text extraction and processing</li>
                <li>Text-to-speech conversion with natural voice</li>
                <li>Multi-language support for global accessibility</li>
                <li>Simple and intuitive user interface</li>
                <li>Playback controls (pause, resume, speed adjustment)</li>
                <li>Support for various PDF formats</li>
            </ul>

            <h3>Technology Stack</h3>
            <ul>
                <li><strong>Language:</strong> Python</li>
                <li><strong>TTS Engine:</strong> Text-to-Speech libraries</li>
                <li><strong>PDF Processing:</strong> PyPDF2 for document parsing</li>
                <li><strong>GUI:</strong> Tkinter for user interface</li>
            </ul>

            <h3>Impact</h3>
            <p>This project demonstrates the power of technology in creating inclusive solutions. By converting visual content to audio, it helps visually impaired users access educational materials, documents, and other important information independently.</p>
        `,
        github: '#'
    },
    'calorie-tracker': {
        title: 'Calorie Tracker',
        description: `
            <h2>Calorie Tracker - Fitness Management Application</h2>
            <p>A comprehensive desktop fitness application built with Java Swing that helps users track their daily calorie intake, monitor BMI, and maintain hydration levels through intelligent reminders.</p>

            <h3>Key Features</h3>
            <ul>
                <li>BMI calculator with personalized recommendations</li>
                <li>Daily calorie intake tracking</li>
                <li>Water intake reminders using multi-threading</li>
                <li>Comprehensive data logging and history</li>
                <li>Visual charts and progress tracking</li>
                <li>Goal setting and achievement tracking</li>
            </ul>

            <h3>Technology Stack</h3>
            <ul>
                <li><strong>Language:</strong> Java</li>
                <li><strong>GUI Framework:</strong> Swing for desktop interface</li>
                <li><strong>Data Structures:</strong> Java Collections Framework</li>
                <li><strong>Concurrency:</strong> Multi-threading for reminders and background tasks</li>
                <li><strong>Storage:</strong> File-based data persistence</li>
            </ul>

            <h3>Technical Highlights</h3>
            <p>The application leverages Java's multi-threading capabilities to implement a background reminder system that alerts users to drink water at regular intervals. Data is managed efficiently using Java Collections, and the Swing framework provides a responsive desktop experience.</p>
        `,
        github: '#'
    }
};

projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
        if (e.target.closest('.project-link')) {
            return;
        }

        const projectKey = card.getAttribute('data-project');
        const project = projectData[projectKey];

        if (project) {
            document.getElementById('modalBody').innerHTML = project.description;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitButton = contactForm.querySelector('.submit-button');
    const formStatus = contactForm.querySelector('.form-status');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
        formStatus.textContent = 'Please fill in all fields.';
        formStatus.className = 'form-status error';
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        formStatus.textContent = 'Please enter a valid email address.';
        formStatus.className = 'form-status error';
        return;
    }

    submitButton.disabled = true;
    submitButton.classList.add('loading');
    formStatus.textContent = '';

    try {
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log('Form submitted:', { name, email, message });

        formStatus.textContent = 'Message sent successfully! I\'ll get back to you soon.';
        formStatus.className = 'form-status success';

        contactForm.reset();

        setTimeout(() => {
            formStatus.textContent = '';
        }, 5000);

    } catch (error) {
        formStatus.textContent = 'Oops! Something went wrong. Please try again.';
        formStatus.className = 'form-status error';
    } finally {
        submitButton.disabled = false;
        submitButton.classList.remove('loading');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.education-card, .project-card, .achievement-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

animateSkillBars();