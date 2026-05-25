export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-120px] top-40 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-[-120px] left-1/2 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative z-10">
          <div className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-200">
            Science Educator | AI Builder | Curriculum Designer
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            I build{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              AI-powered learning tools
            </span>
            , science apps, and classroom-tested resources.
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-slate-300">
            I’m Craig Gordon, a Boston Public Schools biology teacher using AI,
            coding, and classroom experience to create practical tools for students,
            teachers, and lifelong learners.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
            >
              View Projects
            </a>

            <a
              href="https://www.linkedin.com/in/craig-gordon-bab4b4191"
              target="_blank"
              className="rounded-xl border border-slate-600 bg-slate-900/60 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:bg-slate-800"
            >
              LinkedIn
            </a>
<a
  href="/Craig-Gordon-Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-xl border border-slate-600 bg-slate-900/60 px-6 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
>
  View Resume
</a>
            <a
              href="mailto:Craig.James.Gordon13@gmail.com"
              className="rounded-xl border border-slate-600 bg-slate-900/60 px-6 py-3 font-semibold transition hover:border-purple-400 hover:bg-slate-800"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative z-10 flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 blur-xl opacity-40" />
            <div className="relative rounded-full border border-cyan-400/40 bg-slate-900 p-2 shadow-2xl shadow-cyan-950/40">
              <img
                src="/craig-headshot.png"
                alt="Craig Gordon"
                className="h-64 w-64 rounded-full object-cover md:h-80 md:w-80"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/80 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-300">
              About
            </p>
            <h2 className="mb-4 text-3xl font-bold">About Me</h2>
            <p className="leading-relaxed text-slate-300">
              I’m a biology teacher with a background in biology, chemistry,
              healthcare management, and AI integration in education. My work
              focuses on turning complex science and career decisions into clear,
              practical learning tools.
            </p>
          </div>

          <div className="grid gap-4">
            <InfoBox
              title="Science Education"
              text="Biology, ecology, nutrition, anatomy, chemistry, and science communication."
              color="cyan"
            />
            <InfoBox
              title="AI Tool Building"
              text="Student-facing apps, tutoring tools, career guidance systems, and teacher resources."
              color="purple"
            />
            <InfoBox
              title="Professional Growth"
              text="Building a portfolio of coded projects for education, technology, and career advancement."
              color="emerald"
            />
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-300">
          Portfolio
        </p>
        <h2 className="mb-8 text-3xl font-bold">Featured Projects</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <ProjectCard
            title="Biology Tutor AI"
            description="An AI-powered biology tutoring tool designed to help students ask questions, review concepts, and receive clear explanations."
            status="In Development"
            accent="cyan"
          />

        <ProjectCard
  title="Career Guidance App"
  description="A live AI career exploration tool that helps users compare paths, clarify goals, and generate realistic next steps."
  status="Live App"
  accent="purple"
  link="https://career-guidance-app-rouge.vercel.app/"
/>

          <ProjectCard
            title="Teaching Materials Store"
            description="A self-hosted collection of biology, ecology, nutrition, and science resources built from real classroom experience."
            status="Coming Soon"
            accent="emerald"
          />
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/80 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple-300">
            Resources
          </p>
          <h2 className="mb-4 text-3xl font-bold">Teaching Materials</h2>

          <p className="mb-8 max-w-3xl text-slate-300">
            I’m building a self-hosted library of classroom-tested science resources,
            including guided notes, ecology activities, study guides, assessments,
            and AI-supported learning tools.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <ResourceCard title="Ecology Unit Resources" />
            <ResourceCard title="Biology Final Review Materials" />
            <ResourceCard title="Nutrition Guided Notes" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 p-8 shadow-2xl shadow-slate-950/40">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Connect
          </p>
          <h2 className="mb-4 text-3xl font-bold">Contact</h2>

          <p className="mb-6 max-w-2xl text-slate-300">
            Interested in my work, apps, teaching resources, or professional background?
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:Craig.James.Gordon13@gmail.com"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/craig-gordon-bab4b4191"
              target="_blank"
              className="rounded-xl border border-slate-600 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:bg-slate-800"
            >
              View LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProjectCard({ title, description, status, accent, link }) {  const accentStyles = {
    cyan: "from-cyan-400/20 to-blue-500/10 border-cyan-400/30 text-cyan-300",
    purple: "from-purple-400/20 to-fuchsia-500/10 border-purple-400/30 text-purple-300",
    emerald: "from-emerald-400/20 to-teal-500/10 border-emerald-400/30 text-emerald-300",
  };

  return (
    <div
      className={`rounded-2xl border bg-gradient-to-br p-6 transition hover:-translate-y-1 hover:shadow-xl ${accentStyles[accent]}`}
    >
      <p className="mb-3 text-xs uppercase tracking-widest">{status}</p>
      <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
      <p className="mb-5 leading-relaxed text-slate-300">{description}</p>

{link ? (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold hover:text-white"
  >
    Launch App →
  </a>
) : (
  <button className="font-semibold hover:text-white">
    View Project →
  </button>
)}   </div>
  );
}

function ResourceCard({ title }) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800/80 p-5 transition hover:border-cyan-400/50 hover:bg-slate-800">
      <h3 className="mb-2 font-semibold">{title}</h3>
      <p className="text-sm text-slate-300">
        Classroom-tested materials coming soon.
      </p>
    </div>
  );
}

function InfoBox({ title, text, color }) {
  const colors = {
    cyan: "border-cyan-400/30 text-cyan-300",
    purple: "border-purple-400/30 text-purple-300",
    emerald: "border-emerald-400/30 text-emerald-300",
  };

  return (
    <div className={`rounded-2xl border bg-slate-800/80 p-5 ${colors[color]}`}>
      <h3 className="mb-2 font-semibold">{title}</h3>
      <p className="text-slate-300">{text}</p>
    </div>
  );
  }