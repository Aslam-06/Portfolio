// src/app/page.tsx
import Link from "next/link";
import "./globals.css";

export default function Home() {
  const services = [
    {
      icon: "💻",
      title: "Frontend Development",
      description:
        "Build responsive and modern websites using React.js and Next.js. Create user-friendly UI/UX and connect APIs.",
    },
    {
      icon: "🗄",
      title: "Backend & Database",
      description:
        "Create RESTful APIs with Node.js & Express. Manage MySQL, PostgreSQL, and MongoDB. Implement authentication & authorization.",
    },
    {
      icon: "🌐",
      title: "Full-Stack Solutions",
      description:
        "Develop full-stack web applications. Ensure clean integration between frontend & backend. Deploy to Vercel, Netlify, or cloud platforms.",
    },
  ];

  const projects = [
    {
      title: "Task Management",
      description: "Task management is the process of organizing and tracking tasks to improve productivity and meet deadlines.",
      link: "https://gestion-tache-wgiy.onrender.com/",
    },
    {
      title: "Reseau Social",
      description: "A mini social network that lets users create posts,comment and like content.",
      link: "https://r-seau-social.onrender.com",
    },
  ];

  return (
    <div className="container">
      <section className="header">
        <img src="/Aslam.jpg" alt="Aslam" className="profile-pic" />
        <div className="intro">
          <h1>Hi, I’m Aslam 👋</h1>
          <p>
            I build efficient, modern and scalable applications. Check out my
            work, discover my services, and feel free to contact me!
          </p>
        </div>
      </section>

      {/* ===== Services ===== */}
      <section className="services">
        <h2 className="section-title">My Services</h2>
        <div className="cards">
          {services.map((s, i) => (
            <div key={i} className="card">
              <div className="icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Projects ===== */}
      <section className="projects">
        <h2 className="section-title">My Projects</h2>
        <div className="cards">
          {projects.map((p, i) => (
            <div key={i} className="card">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
      <section className="contact">
        <h3 className="section-title">View my Github Projects</h3>
        <div className="social-links">
          <span>click here to see the projects</span> <br />
          <button className="bg-white">
            <Link href="https://github.com/Aslam-06" target="_blank" rel="noopener noreferrer">
              🐱 GitHub
            </Link>
          </button>
        </div>
      </section>

      <section className="footer">
        <p>© 2025 Aslam. All rights reserved.</p>
      </section>
    </div>
  );
}