const projects = [
  {
    name: "MedwithPurpose",
    role: "Founder",
    description:
      "A UCAT preparation platform helping aspiring medical students master the exam with structured practice, live analytics, and proven strategy.",
  },
  {
    name: "Omthentic AI",
    role: "Founder",
    description:
      "AI-powered communication coaching — practice medical interviews with instant, structured feedback on content, structure, and delivery.",
  },
  {
    name: "Interview Coaching",
    role: "Coach & Program Designer",
    description:
      "Weekly interactive group classes with a highly structured process — over 1,000 students coached into medicine and health-science programs.",
  },
];

export default function App() {
  return (
    <>
      <header className="nav">
        <a className="nav-name" href="#top">
          SJ
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <p className="kicker">Educator · Founder · Builder</p>
          <h1>Shanaka Jayakody</h1>
          <p className="lede">
            I build values-driven education businesses — refined by technology,
            measured by the students they help activate.
          </p>
        </section>

        <section id="about" className="section">
          <h2>About</h2>
          <p>
            My work sits at the intersection of teaching and technology. I have
            spent the last decade helping students win places in medicine —
            first as a coach, then by building the platforms I wished existed:
            structured UCAT preparation, interview training that treats
            performance as a learnable skill, and AI tools that give every
            student a personal coach.
          </p>
          <p>
            I care about the craft of explanation, honest measurement of
            outcomes, and software that gets out of the way.
          </p>
        </section>

        <section id="work" className="section">
          <h2>Work</h2>
          <div className="projects">
            {projects.map((p) => (
              <article key={p.name} className="project">
                <h3>{p.name}</h3>
                <p className="project-role">{p.role}</p>
                <p>{p.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>
            The fastest way to reach me is email:{" "}
            <a href="mailto:admin@omthentic.ai">admin@omthentic.ai</a>
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Shanaka Jayakody</p>
      </footer>
    </>
  );
}
