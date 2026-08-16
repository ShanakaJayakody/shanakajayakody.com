const evidence = [
  {
    id: "C-01",
    name: "Goodreads",
    url: "https://www.goodreads.com/author/show/18843327.Shanaka_Jayakody",
    desc: "Author profile listing both UCAT preparation books under his name, catalogued independently of any site he runs.",
  },
  {
    id: "C-02",
    name: "MedWithPurpose",
    url: "https://www.medwithpurpose.com/about",
    desc: "The company names him as its founder and CEO on its own about page, alongside its head of coaching and head of programmes.",
  },
];

const ventures = [
  {
    id: "V-01",
    name: "MedWithPurpose",
    url: "https://www.medwithpurpose.com/",
    meta: "Founder and CEO",
    measure:
      "Over 1,000 students coached into medicine and health-science programs.",
    detail:
      "Australian medical admissions preparation: UCAT Mastery with 25,000 practice questions, Interview Mastery for MMI and panel formats, and CASPer preparation with AI marking.",
  },
  {
    id: "V-02",
    name: "Omthentic",
    url: "https://www.omthentic.ai/",
    meta: "Founder",
    detail:
      "A venture house building technology for authentic human expression, aimed at helping people communicate as themselves rather than to a script.",
  },
  {
    id: "V-03",
    name: "InterviewMD",
    url: "https://www.interviewmd.org/",
    meta: "Co-Founder · since 2025",
    detail:
      "Medical school interview preparation combining one-to-one coaching with software that adapts to how the individual applicant thinks.",
  },
  {
    id: "V-04",
    name: "The PrepBond Academy",
    url: "https://www.prepbond.com.au/",
    meta: "Founder · since 2025",
    detail:
      "Preparation for the MSCEIT, the psychometric assessment used in Bond University medical admissions. The academy states it is independent of Bond University and not endorsed by it.",
  },
  {
    id: "V-05",
    name: "UCAT Secrets",
    url: "https://www.goodreads.com/author/show/18843327.Shanaka_Jayakody",
    meta: "Author and Founder",
    detail:
      "The imprint behind his two UCAT preparation books, distilling coaching practice into structured strategy.",
  },
  {
    id: "V-06",
    name: "ShareTree",
    url: "https://sharetree.org/",
    meta: "Character and Culture Lead for Schools",
    detail:
      "Character and culture education with a Melbourne charity, bringing values development into schools alongside academic preparation.",
  },
];

const career = [
  {
    role: "Founder and CEO",
    org: "MedWithPurpose",
    note: "Founded to make medical admissions preparation accessible to Australian applicants. The company states it was built on that aim on its own about page, where it also names a head of coaching and a head of programmes.",
  },
  {
    role: "Founder",
    org: "Omthentic",
    note: "A venture house for technology supporting authentic human expression, aimed at helping people communicate as themselves rather than to a script.",
  },
  {
    role: "Co-Founder",
    org: "InterviewMD",
    period: "2025 to present",
    note: "Medical school interview preparation combining one-to-one coaching with software that adapts to how the individual applicant thinks.",
  },
  {
    role: "Founder",
    org: "The PrepBond Academy",
    period: "2025 to present",
    note: "Preparation for the MSCEIT, the psychometric assessment used in Bond University medical admissions. The academy states it is independent of Bond University and not endorsed by it.",
  },
  {
    role: "Author and Founder",
    org: "UCAT Secrets",
    note: "The imprint under which both UCAT preparation books were published. Both are catalogued on Goodreads.",
  },
  {
    role: "Character and Culture Lead for Schools",
    org: "ShareTree",
    note: "Character and culture education with a Melbourne charity, bringing values development into schools alongside academic preparation.",
  },
];

const writing = [
  {
    title:
      "How To Ace The UCAT & Get Into Medicine: Without Sacrificing Your Year 12 Results",
    meta: "UCAT Secrets",
    url: "https://www.goodreads.com/author/show/18843327.Shanaka_Jayakody",
  },
  {
    title: "100 Situational Judgement UCAT Questions: UCAT Secrets",
    meta: "UCAT Secrets",
    url: "https://www.goodreads.com/author/show/18843327.Shanaka_Jayakody",
  },
];

const press = [
  {
    title: "Finding Purpose at your Lowest Point",
    meta: "Bottled Up Podcast · 2022",
    url: "https://podcasts.apple.com/nz/podcast/53-finding-purpose-at-your-lowest-point-death-and/id1524876519?i=1000575427726",
  },
  {
    title: "UCAT Masterclass with KIS Academics",
    meta: "KIS Academics · 2021",
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
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="wrap-wide bar">
          <a className="brand" href="/">
            Shanaka Jayakody
          </a>
          <nav aria-label="Primary">
            <ul>
              <li>
                <a href="#publications">Publications</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main">
        <div className="masthead">
          <div className="wrap-wide">
            <section className="hero">
              <figure className="idplate rise d1">
                <img
                  className="hero-photo"
                  src="/images/shanaka-jayakody.webp"
                  alt="Shanaka Jayakody, founder and CEO of MedWithPurpose"
                  width={368}
                  height={368}
                  fetchPriority="high"
                />
                <div className="plate-rows">
                  <div>
                    <span className="eyebrow">Melbourne, Australia</span>
                  </div>
                  <div>
                    <span className="on-record">On the record</span>
                  </div>
                </div>
              </figure>
              <div>
                <h1 className="rise d2">
                  Shanaka Jaya<span className="h1-tail">kody</span>
                </h1>
                <p className="hero-role rise d3">
                  Founder &amp; CEO, MedWithPurpose
                </p>
                <p className="lede rise d4">
                  Shanaka Jayakody is a Melbourne educator and the founder of
                  MedWithPurpose, Omthentic and The PrepBond Academy, and a
                  co-founder of InterviewMD. He coaches students for the UCAT,
                  for medical school interviews and for the Bond University
                  psychometric assessment, has worked in medical admissions
                  preparation for more than thirteen years, and is the author
                  of two UCAT preparation books. He is an alumnus of Melbourne
                  High School.
                </p>
                <p className="hero-proof rise d5">
                  <b>2</b> published books and <b>2</b> recorded appearances.
                </p>
              </div>
            </section>
          </div>
        </div>

        <div className="wrap-wide">
          <section className="section" id="evidence">
            <div className="shead">
              <h2>What can be checked</h2>
              <p className="eyebrow">Credentials and press</p>
            </div>
            <div className="reg">
              {evidence.map((e) => (
                <div className="rrow" key={e.id}>
                  <span className="rid" aria-hidden="true">
                    {e.id}
                  </span>
                  <span className="rname">
                    <a href={e.url} rel="noopener" target="_blank">
                      {e.name}
                    </a>
                  </span>
                  <p className="rdesc">{e.desc}</p>
                  <span className="chip">On record</span>
                </div>
              ))}
            </div>
          </section>

          <section className="section" id="roles">
            <div className="shead">
              <h2>Companies and roles</h2>
              <p className="eyebrow">Ventures</p>
            </div>
            <div className="vgrid">
              {ventures.map((v) => (
                <div className="vcell" key={v.id}>
                  <span className="mono" aria-hidden="true">
                    {v.id}
                  </span>
                  <h3>
                    <a href={v.url} rel="noopener" target="_blank">
                      {v.name}
                    </a>
                  </h3>
                  <p className="meta">{v.meta}</p>
                  {v.measure && <p className="role-measure">{v.measure}</p>}
                  <p className="role-detail">{v.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="section" id="background">
            <div className="shead">
              <h2>Career and education</h2>
              <p className="eyebrow">Background</p>
            </div>
            <h3>Career</h3>
            <ul className="timeline">
              {career.map((c) => (
                <li key={c.role + c.org}>
                  {c.period && <p className="meta">{c.period}</p>}
                  <h4>{c.role}</h4>
                  <p className="org">{c.org}</p>
                  <p>{c.note}</p>
                </li>
              ))}
            </ul>
            <h3>Education</h3>
            <ul className="timeline">
              <li>
                <h4>Alumnus</h4>
                <p className="org">Melbourne High School</p>
              </li>
            </ul>
          </section>

          <section className="section" id="publications">
            <div className="shead">
              <h2>Published work</h2>
              <p className="eyebrow">Writing</p>
            </div>
            <ul className="pub-list">
              {writing.map((w) => (
                <li key={w.title}>
                  <h3>
                    <a href={w.url} rel="noopener" target="_blank">
                      {w.title}
                    </a>
                  </h3>
                  <p className="meta">{w.meta}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="section" id="quoted">
            <div className="shead">
              <h2>Quoted elsewhere</h2>
              <p className="eyebrow">Press</p>
            </div>
            <ul className="pub-list">
              {press.map((p) => (
                <li key={p.title}>
                  <h3>
                    <a href={p.url} rel="noopener" target="_blank">
                      {p.title}
                    </a>
                  </h3>
                  <p className="meta">{p.meta}</p>
                </li>
              ))}
            </ul>
            <ul className="contact-profiles">
              {profiles.map((p) => (
                <li key={p.name}>
                  <a href={p.url} rel="me noopener" target="_blank">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="section" id="contact">
            <div className="contact-band">
              <div>
                <p className="eyebrow">Contact</p>
                <h2>Getting in touch</h2>
                <p>
                  Corrections take priority. Include the address of the page
                  and the source that contradicts it.
                </p>
              </div>
              <a className="cta" href="mailto:admin@omthentic.ai">
                Contact Shanaka
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <div className="wrap-wide">
          <p>
            <strong>Shanaka Jayakody</strong>. Founder &amp; CEO,
            MedWithPurpose. Melbourne, Australia.
          </p>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/shanakajayakody/"
                rel="me noopener"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.goodreads.com/author/show/18843327.Shanaka_Jayakody"
                rel="me noopener"
                target="_blank"
              >
                Goodreads
              </a>
            </li>
            <li>
              <a
                href="https://www.skool.com/@shanaka-jayakody"
                rel="me noopener"
                target="_blank"
              >
                Skool
              </a>
            </li>
          </ul>
          <p className="meta">
            © {new Date().getFullYear()} Shanaka Jayakody.
          </p>
        </div>
      </footer>
    </>
  );
}
