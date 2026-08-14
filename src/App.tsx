const stats = [
  { value: "13+", label: "Years coaching UCAT & admissions" },
  { value: "8,000+", label: "Hours of teaching" },
  { value: "1,000+", label: "Students coached into medicine" },
  { value: "2", label: "Published UCAT books" },
];

const ventures = [
  {
    name: "MedWithPurpose",
    role: "Founder & Head UCAT Tutor",
    url: "https://medwithpurpose.com",
    description:
      "Australian medical admissions preparation: UCAT Mastery with 25,000+ practice questions, Interview Mastery for MMI and panel formats, and CASPer preparation with AI marking. Over 1,000 students coached into medicine and health-science programs.",
  },
  {
    name: "Omthentic",
    role: "Founder",
    url: "https://omthentic.ai",
    description:
      "A venture house building technology for authentic human expression. Its live product, InterviewMD, helps medical school applicants succeed in high-stakes interviews by becoming genuinely themselves rather than reciting scripts.",
  },
  {
    name: "UCAT Secrets",
    role: "Author & Founder",
    url: "https://www.goodreads.com/author/show/18843327.Shanaka_Jayakody",
    description:
      "The imprint behind my UCAT preparation books, distilling thousands of hours of coaching into structured, learnable strategy.",
  },
  {
    name: "ShareTree",
    role: "Character & Culture Lead for Schools",
    url: "https://sharetree.org",
    description:
      "Character and culture education with a Melbourne charity, bringing values development into schools alongside academic preparation.",
  },
];

const publications = [
  {
    title:
      "How To Ace The UCAT & Get Into Medicine: Without Sacrificing Your Year 12 Results",
    meta: "Book · Goodreads 4.5/5",
    url: "https://www.goodreads.com/author/show/18843327.Shanaka_Jayakody",
  },
  {
    title: "100 Situational Judgement UCAT Questions: UCAT Secrets",
    meta: "Book · Goodreads 5.0/5",
    url: "https://www.goodreads.com/author/show/18843327.Shanaka_Jayakody",
  },
  {
    title: "Finding Purpose at your Lowest Point",
    meta: "Bottled Up Podcast, Episode 53 (2022)",
    url: "https://podcasts.apple.com/nz/podcast/id1524876519?i=1000575427726",
  },
  {
    title: "UCAT Masterclass with KIS Academics",
    meta: "Video (2021)",
    url: "https://www.youtube.com/watch?v=_XZzB27Y9Qg",
  },
];

const profiles = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/shanakajayakody/" },
  { name: "GitHub", url: "https://github.com/ShanakaJayakody" },
  { name: "Skool", url: "https://www.skool.com/@shanaka-jayakody" },
  {
    name: "Goodreads",
    url: "https://www.goodreads.com/author/show/18843327.Shanaka_Jayakody",
  },
  { name: "Facebook", url: "https://www.facebook.com/shanakawithpurpose/" },
  { name: "Instagram", url: "https://www.instagram.com/shanakaj17/" },
  { name: "Medium", url: "https://medium.com/@shanaka.j17" },
];

export default function App() {
  return (
    <>
      <header className="nav">
        <a className="nav-name" href="#top">
          SJ
        </a>
        <nav aria-label="Primary">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#publications">Publications</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <p className="kicker">Educator · Founder · Builder · Melbourne, Australia</p>
          <h1>Shanaka Jayakody</h1>
          <p className="lede">
            I build values-driven education businesses, refined by technology
            and measured by the students they help activate. Founder of
            MedWithPurpose and Omthentic, author of two UCAT preparation books.
          </p>
        </section>

        <section className="stats" aria-label="Experience at a glance">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </section>

        <section id="about" className="section">
          <h2>About</h2>
          <p>
            My work sits at the intersection of teaching and technology. I have
            spent more than thirteen years, and over 8,000 hours of direct
            teaching, helping students win places in medicine. I started as a
            coach, sitting the UCAT myself repeatedly to keep my strategies
            honest, and went on to build the platforms I wished existed:
            structured UCAT preparation, interview training that treats
            performance as a learnable skill, and AI tools that give every
            student a personal coach.
          </p>
          <p>
            Along the way I wrote two UCAT preparation books, coached more than
            1,000 students into medicine and health-science programs, and led
            character and culture education in schools with the charity
            ShareTree. I am a Melbourne High School alumnus and I work from
            Melbourne, Australia.
          </p>
          <p>
            I care about the craft of explanation, honest measurement of
            outcomes, and software that gets out of the way.
          </p>
        </section>

        <section id="work" className="section">
          <h2>Work</h2>
          <div className="projects">
            {ventures.map((p) => (
              <article key={p.name} className="project">
                <h3>
                  <a href={p.url} rel="me">
                    {p.name}
                  </a>
                </h3>
                <p className="project-role">{p.role}</p>
                <p>{p.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="publications" className="section">
          <h2>Publications &amp; Media</h2>
          <ul className="pub-list">
            {publications.map((p) => (
              <li key={p.title}>
                <a href={p.url}>{p.title}</a>
                <span className="pub-meta">{p.meta}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="elsewhere" className="section">
          <h2>Elsewhere</h2>
          <p>
            You can verify my work and find me across the web on these
            profiles:
          </p>
          <ul className="profile-list">
            {profiles.map((p) => (
              <li key={p.name}>
                <a href={p.url} rel="me">
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
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
        <p>
          © {new Date().getFullYear()} Shanaka Jayakody · Melbourne, Australia
        </p>
      </footer>
    </>
  );
}
