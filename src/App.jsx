import { useEffect, useMemo, useRef, useState } from "react";
import {
  aboutCards,
  credentials,
  earlier,
  education,
  experience,
  filters,
  languages,
  profile,
  projects,
  skillGroups,
  training,
} from "./data.js";
import { ProjectArt, TechLogos } from "./visuals.jsx";

const nav = [
  ["About", "#about"],
  ["Work", "#work"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

const tabs = [
  ["experience", "Experience"],
  ["education", "Education"],
  ["credentials", "Certifications"],
];

export default function App() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [tab, setTab] = useState("experience");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((project) => project.tags.includes(filter)),
    [filter]
  );

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [filter, tab]);

  function closeMenu() {
    setOpen(false);
  }

  function onSubmit(event) {
    event.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject || "Portfolio enquiry"
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      <a className="skip" href="#about">
        Skip to content
      </a>
      <div className="stage" aria-hidden="true">
        <div className="glow glow-a" />
        <div className="glow glow-b" />
        <div className="glow glow-c" />
        <div className="motes" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      <header className="top">
        <a className="mark" href="#top" onClick={closeMenu}>
          <img className="logo" src="/logo.svg" alt="" />
          <span>Mary Annie</span>
        </a>
        <nav className={open ? "open" : ""} aria-label="Page">
          {nav.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>
        <div className="top-actions">
          <a className="resume" href={profile.resumeHref} download>
            Resume
          </a>
          <button
            className="menu"
            type="button"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="hello">Hello, I&apos;m</p>
            <h1>{profile.name}</h1>
            <p className="role">{profile.role}</p>
            <p className="tenure-line">
              {profile.years} · {profile.company} · {profile.tenure}
            </p>
            <p className="summary">{profile.summary}</p>
            <ul className="contacts">
              <li>{profile.location}</li>
              <li>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
            <div className="hero-actions">
              <a className="btn solid" href="#work">
                View my work
              </a>
              <a className="btn ghost" href="#contact">
                Contact me
              </a>
            </div>
          </div>
          <Portrait />
        </section>

        <section id="about" className="section">
          <SectionTitle kicker="About" title="Who I am" />
          <ul className="stats">
            <li className="reveal">
              <strong>
                <Count to={3} suffix="+" /> years
              </strong>
              <span>Sify Technologies</span>
            </li>
            <li className="reveal d1">
              <strong>
                <Count to={9.03} decimals={2} /> / 10
              </strong>
              <span>B.E. Computer Science</span>
            </li>
            <li className="reveal d2">
              <strong>AWS</strong>
              <span>Developer – Associate</span>
            </li>
            <li className="reveal d3">
              <strong>3 languages</strong>
              <span>{languages.join(", ")}</span>
            </li>
          </ul>
          <ul className="about-grid">
            {aboutCards.map((card, index) => (
              <li key={card.title} className={`reveal d${index}`}>
                <AboutGlyph index={index} />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="work" className="section">
          <SectionTitle
            kicker="Selected work"
            title="Projects"
            text="Voice AI, IT automation, a personal ResolveBot, and a full-stack learning system. Status labels match what is actually built."
          />
          <div className="filters" role="tablist" aria-label="Filter projects">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={filter === item}
                className={filter === item ? "on" : ""}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <ul className="cards">
            {visible.map((project) => (
              <li key={project.id} className="card reveal">
                <ProjectArt id={project.id} />
                <div className="card-body">
                <div className="card-top">
                  <span className={`pill ${project.statusTone}`}>{project.status}</span>
                  <span className="index">{project.index}</span>
                </div>
                <h3>{project.title}</h3>
                {project.client ? <p className="client">{project.client}</p> : null}
                {project.era ? <p className="client">{project.era}</p> : null}
                <p className="outcome">{project.outcome}</p>
                <ul className="points">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <ul className="chips">
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                </div>
              </li>
            ))}
          </ul>

          <h3 className="subhead">Earlier work</h3>
          <ul className="earlier" id="earlier">
            {earlier.map((item, index) => (
              <li key={item.title} className={`reveal d${index % 4}`}>
                <span className="mini">{item.tag}</span>
                <h3>{item.title}</h3>
                <p className="stack-line">{item.stack}</p>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="skills" className="section">
          <SectionTitle
            kicker="Skills"
            title="What I use"
            text="Tools from current automation work, a personal RAG stack, and the mobile stack from earlier projects."
          />
          <TechLogos />
          <ul className="skill-grid">
            {skillGroups.map((group, index) => (
              <li key={group.label} className={`reveal d${index % 4}`}>
                <h3>{group.label}</h3>
                <p>{group.items.join(" · ")}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="experience" className="section">
          <SectionTitle
            kicker="Background"
            title="Experience and education"
            text="Software Developer at Sify Technologies since July 2023 — 3+ years."
          />
          <div className="filters" role="tablist" aria-label="Background">
            {tabs.map(([id, label]) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={tab === id}
                className={tab === id ? "on" : ""}
                onClick={() => setTab(id)}
              >
                {label}
              </button>
            ))}
          </div>
          {tab === "experience" ? (
            <article className="panel reveal">
              <h3>
                {experience.title}
                <span> · {experience.company}</span>
              </h3>
              <p className="meta">
                {experience.place} · {experience.dates} · {profile.years}
              </p>
              <p>{experience.note}</p>
              <ol className="arc">
                {experience.arc.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </article>
          ) : null}
          {tab === "education" ? (
            <article className="panel reveal">
              <h3>{education.degree}</h3>
              <p className="meta">
                {education.school} · {education.dates} · {education.score}
              </p>
              <ul className="plain">
                {education.earlier.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          ) : null}
          {tab === "credentials" ? (
            <article className="panel reveal">
              <h3>Certifications and training</h3>
              <ul className="plain">
                {credentials.map((line) => (
                  <li key={line}>{line}</li>
                ))}
                {training.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          ) : null}
        </section>

        <section id="contact" className="section contact">
          <SectionTitle
            kicker="Contact"
            title="Let’s talk about a role"
            text="AI automation, voice, or Python backend. The form opens your email app with the message filled in."
          />
          <div className="contact-grid">
            <div className="panel reveal">
              <h3>Contact information</h3>
              <ul className="info">
                <li>
                  <span>Email</span>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </li>
                <li>
                  <span>Location</span>
                  <p>{profile.location}</p>
                </li>
                <li>
                  <span>LinkedIn</span>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    {profile.linkedinLabel}
                  </a>
                </li>
              </ul>
              <a className="btn solid" href={profile.resumeHref} download>
                Download resume
              </a>
            </div>
            <form className="panel form reveal d1" onSubmit={onSubmit}>
              <h3>Send a message</h3>
              <label>
                Your name
                <input
                  required
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) =>
                    setForm({ ...form, name: event.target.value })
                  }
                />
              </label>
              <label>
                Your email
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) =>
                    setForm({ ...form, email: event.target.value })
                  }
                />
              </label>
              <label>
                Subject
                <input
                  required
                  name="subject"
                  value={form.subject}
                  onChange={(event) =>
                    setForm({ ...form, subject: event.target.value })
                  }
                />
              </label>
              <label>
                Message
                <textarea
                  required
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={(event) =>
                    setForm({ ...form, message: event.target.value })
                  }
                />
              </label>
              <button className="btn solid" type="submit">
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer>
        <img src="/logo.svg" alt="" width="36" height="36" />
        <p>Mary Annie Sahaya · {profile.location}</p>
      </footer>
    </>
  );
}

function Portrait() {
  const stage = useRef(null);
  const rig = useRef(null);
  const shine = useRef(null);
  const pointer = useRef({ active: false, x: 0, y: 0, sx: 50, sy: 40 });
  const current = useRef({ x: 2, y: -8 });

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hero = stage.current?.closest(".hero");
    if (reduce || !hero) return undefined;

    const onMove = (event) => {
      const bounds = hero.getBoundingClientRect();
      const px = (event.clientX - bounds.left) / bounds.width - 0.5;
      const py = (event.clientY - bounds.top) / bounds.height - 0.5;
      pointer.current.active = true;
      pointer.current.x = py * -16;
      pointer.current.y = px * 28;
      pointer.current.sx = ((event.clientX - bounds.left) / bounds.width) * 100;
      pointer.current.sy = ((event.clientY - bounds.top) / bounds.height) * 100;
    };
    const onLeave = () => {
      pointer.current.active = false;
    };

    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);

    let frame = 0;
    const start = performance.now();
    const tick = (now) => {
      const t = (now - start) / 1000;
      const idleX = Math.sin(t * 0.65) * 3.5;
      const idleY = Math.cos(t * 0.5) * 8;
      const aimX = pointer.current.active ? pointer.current.x : idleX;
      const aimY = pointer.current.active ? pointer.current.y : idleY;
      current.current.x += (aimX - current.current.x) * 0.08;
      current.current.y += (aimY - current.current.y) * 0.08;
      if (rig.current) {
        rig.current.style.transform = `rotateX(${current.current.x.toFixed(2)}deg) rotateY(${current.current.y.toFixed(2)}deg)`;
      }
      if (shine.current) {
        shine.current.style.opacity = pointer.current.active ? "1" : "0.35";
        shine.current.style.background = `radial-gradient(280px circle at ${pointer.current.sx}% ${pointer.current.sy}%, rgba(255,248,236,0.55), transparent 46%)`;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="portrait-stage" ref={stage}>
      <div className="orbit-ring" aria-hidden="true">
        <span />
      </div>
      <div className="portrait-perspective">
        <div className="portrait-rig" ref={rig}>
          <div className="portrait-edge" aria-hidden="true" />
          <figure className="portrait-card">
            <div className="portrait-mat">
              <img src="/portrait.jpg" alt="Portrait of Mary Annie Sahaya" />
              <div className="portrait-shine" ref={shine} aria-hidden="true" />
            </div>
          </figure>
        </div>
      </div>
      <p className="turn-hint">Move to turn</p>
    </div>
  );
}

function Count({ to, decimals = 0, suffix = "" }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const node = ref.current;
    if (!node) return undefined;
    if (reduce) {
      setValue(to);
      return undefined;
    }
    let frame = 0;
    let started = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min(1, (now - start) / 1100);
          const eased = 1 - (1 - progress) ** 3;
          setValue(to * eased);
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    observer.observe(node);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [to]);

  const shown = decimals ? value.toFixed(decimals) : Math.round(value);
  return (
    <span ref={ref}>
      {shown}
      {suffix}
    </span>
  );
}

function AboutGlyph({ index }) {
  if (index === 1) {
    return (
      <span className="glyph bars" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
    );
  }
  if (index === 3) {
    return (
      <span className="glyph orbit" aria-hidden="true">
        <i />
      </span>
    );
  }
  return <span className={`glyph flow flow-${index}`} aria-hidden="true" />;
}

function SectionTitle({ kicker, title, text }) {
  return (
    <div className="section-head reveal">
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      <span className="underline" aria-hidden="true" />
      {text ? <p>{text}</p> : null}
    </div>
  );
}
