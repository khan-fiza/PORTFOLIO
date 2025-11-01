import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* NAV */}
      <nav className="navbar">
        <div className="nav-left">Fiza Sooraj Khan</div>
        <div className="nav-right">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#certs">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero" id="home">
        <div className="hero-center">
          <h1>Hi, I’m <span>Fiza Sooraj Khan</span></h1>
          <h3 className="tag">Machine Learning • Deep Learning • MERN Stack • Full-Stack Developer</h3>
          <p className="lead">
            I’m passionate about building intelligent systems that combine deep learning,
            computer vision, and modern MERN-stack technologies to create impactful, data-driven applications.
          </p>

          <div className="hero-actions">
            <a className="btn" href="#projects">View My Work</a>
            <a className="btn outline" href="/fiza_khan_resume_1.pdf" target="_blank" rel="noreferrer">Download Resume</a>
          </div>

          <div className="social-icons">
            <a href="mailto:fizasoorajkhan@gmail.com" title="Email"><i className="fa fa-envelope"></i></a>
            <a href="https://linkedin.com/in/fiza-khan-1b267522b" target="_blank" rel="noreferrer" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/khan-fiza" target="_blank" rel="noreferrer" title="GitHub"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="section about">
        <h2 className="section-title">About Me</h2>
        <p className="section-text">
          I’m an M.Tech student (Computer Science) with hands-on experience in machine learning,
          computer vision, and full-stack web development. I build scalable applications that combine
          research and practical engineering — from RAG systems and deep learning models to MERN web apps.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section experience">
        <h2 className="section-title">Experience</h2>
        <div className="card">
          <h3>Software Engineering Intern — Kerala Police Academy (May 2025 – June 2025)</h3>
          <ul>
            <li>Developed an Inventory Management System (QM Store) using React.js, Node.js, MongoDB.</li>
            <li>Implemented state management with Redux and designed responsive UI using Figma.</li>
            <li>Improved tracking and reduced manual errors; participated in debugging and code reviews.</li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects">
        <h2 className="section-title">Projects</h2>

        <div className="project-grid">
          <div className="project-card">
            <h3>Retrieval-Augmented Generation (RAG) System for PDFs</h3>
            <p>Built ingest → embed → retrieve → answer pipeline using LangChain, ChromaDB, all-MiniLM embeddings, integrated with Llama 3 via Ollama. Implemented chunking, token management, and embedding optimisation.</p>
            <p className="meta">Tools: Python, LangChain, ChromaDB, HuggingFace, Llama 3, PyTorch</p>
            <a className="link" href="https://github.com/khan-fiza/RAG1" target="_blank" rel="noreferrer">View code</a>
          </div>

          <div className="project-card">
            <h3>Thermal Image Detection & Classification</h3>
            <p>Developed YOLOv8 and DETR based models for object detection on thermal imagery; supported COCO annotations and IoU evaluation, checkpointing and reports for traffic monitoring.</p>
            <p className="meta">Tools: PyTorch, Ultralytics (YOLOv8), HuggingFace Transformers</p>
            <a className="link" href="https://github.com/khan-fiza/Thermal" target="_blank" rel="noreferrer">View code</a>
          </div>

          <div className="project-card">
            <h3>Fake News Detection System</h3>
            <p>Python system using TF-IDF and ML models (Logistic Regression, SVM) for real-time news verification with focus on accuracy and scalability.</p>
            <p className="meta">Tools: scikit-learn, TF-IDF</p>
            <a className="link" href="https://github.com/khan-fiza/Fake-news-detection-" target="_blank" rel="noreferrer">View code</a>
          </div>

          <div className="project-card">
            <h3>Job Portal (MERN)</h3>
            <p>Full-stack job portal with role-based authentication, filters, resume uploads and application tracking.</p>
            <p className="meta">Tools: React.js, Node.js, MongoDB, TailwindCSS</p>
            <a className="link" href="https://github.com/MuhammedYahiya/JobListingPortal" target="_blank" rel="noreferrer">View code</a>
          </div>

          <div className="project-card">
            <h3>CareBot (Mental Health Chatbot)</h3>
            <p>Chatbot with empathetic response generation using NLP, plus Speech-to-Text and Text-to-Speech integration; backend with Python + MySQL.</p>
            <p className="meta">Tools: Python, spaCy, NLTK, MySQL</p>
            <a className="link" href="https://github.com/khan-fiza/CareBot" target="_blank" rel="noreferrer">View code</a>
          </div>

          <div className="project-card">
            <h3>Licht App (Flutter)</h3>
            <p>Cross-platform mobile app to assist children with autism; progress tracking and local storage with Hive.</p>
            <p className="meta">Tools: Flutter, Dart, Hive</p>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section education">
        <h2 className="section-title">Education</h2>
        <div className="card">
          <h3>M.Tech — Computer Science & Engineering (Government Engineering College, Thrissur)</h3>
          <p><strong>Sept 2024 – May 2026</strong> • GPA: 8.5/10</p>
        </div>

        <div className="card">
          <h3>B.Tech — Computer Science & Engineering (Jyothi Engineering College, Thrissur)</h3>
          <p><strong>June 2020 – May 2024</strong> • GPA: 8.3/10</p>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certs" className="section certs">
        <h2 className="section-title">Certifications</h2>
        <ul className="cert-list">
          <li>Programming for Everybody (Getting Started with Python) — Coursera</li>
          <li>Artificial Intelligence — Cognizant Foundation (Tech4All)</li>
          <li>Full Stack Web Development — Skolar</li>
          <li>Hackathon (SheBuilds) — Mental Health Chatbot</li>
          <li>SAP ABAP Programming — Udemy</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact">
        <h2 className="section-title">Contact</h2>
        <div className="contact-grid">
          <div>
            <p><strong>Email:</strong> <a href="mailto:fizasoorajkhan@gmail.com">fizasoorajkhan@gmail.com</a></p>
            <p><strong>Phone:</strong> 7034955557</p>
            <p><strong>Location:</strong> Thrissur, Kerala, India</p>
          </div>
          <div>
            <p><a href="https://linkedin.com/in/fiza-khan-1b267522b" target="_blank" rel="noreferrer">LinkedIn</a></p>
            <p><a href="https://github.com/khan-fiza" target="_blank" rel="noreferrer">GitHub</a></p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 Fiza Sooraj Khan · Machine Learning & Full-Stack Developer</p>
      </footer>
    </div>
  );
}

export default App;
