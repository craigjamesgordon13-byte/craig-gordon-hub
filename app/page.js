export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
<section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
  <div>
    <p className="mb-4 text-sm uppercase tracking-widest text-cyan-300">
      Science Educator | AI Builder | Curriculum Designer
    </p>

    <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
      I build AI-powered learning tools, science apps, and classroom-tested resources.
    </h1>

    <p className="mb-8 text-lg leading-relaxed text-slate-300">
      I’m Craig Gordon, a Boston Public Schools biology teacher using AI, coding,
      and classroom experience to create practical tools for students, teachers,
      and lifelong learners.
    </p>

    <div className="flex flex-wrap gap-4">
      <a
        href="#projects"
        className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
      >
        View Projects
      </a>

      <a
        href="https://www.linkedin.com/in/craig-gordon-bab4b4191"
        target="_blank"
        className="rounded-xl border border-slate-600 px-6 py-3 font-semibold transition hover:bg-slate-800"
      >
        LinkedIn
      </a>

      <a
        href="mailto:Craig.James.Gordon13@gmail.com"
        className="rounded-xl border border-slate-600 px-6 py-3 font-semibold transition hover:bg-slate-800"
      >
        Contact Me
      </a>
    </div>
  </div>

  <div className="flex justify-center md:justify-end">
    <div className="rounded-full border border-cyan-400/40 bg-slate-900 p-2 shadow-2xl shadow-cyan-950/40">
      <img
        src="/craig-headshot.png"
        alt="Craig Gordon"
        className="h-64 w-64 rounded-full object-cover md:h-80 md:w-80"
      />
    </div>
  </div>
</section>
      <section className="bg-slate-900 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">About Me</h2>
            <p className="leading-relaxed text-slate-300">
              I’m a biology teacher with a background in biology, chemistry,
              healthcare management, and AI integration in education. My work focuses
              on turning complex science and career decisions into clear, practical
              learning tools.
            </p>
          </div>

          <div className="grid gap-4">
            <InfoBox
              title="Science Education"
              text="Biology, ecology, nutrition, anatomy, chemistry, and science communication."
            />
            <InfoBox
              title="AI Tool Building"
              text="Student-facing apps, tutoring tools, career guidance systems, and teacher resources."
            />
            <InfoBox
              title="Professional Growth"
              text="Building a portfolio of coded projects for education, technology, and career advancement."
            />
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-bold">Featured Projects</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <ProjectCard
            title="Biology Tutor AI"
            description="An AI-powered biology tutoring tool designed to help students ask questions, review concepts, and receive clear explanations."
            status="In Development"
          />

          <ProjectCard
            title="Career Guidance App"
            description="A career exploration tool that helps users compare options, identify strengths, and generate realistic next steps."
            status="In Development"
          />

          <ProjectCard
            title="Teaching Materials Store"
            description="A self-hosted collection of biology, ecology, nutrition, and science resources built from real classroom experience."
            status="Coming Soon"
          />
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-16">
        <div className="mx-auto max-w-6xl">
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
        <h2 className="mb-4 text-3xl font-bold">Contact</h2>

        <p className="mb-6 text-slate-300">
          Interested in my work, apps, teaching resources, or professional background?
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:Craig.James.Gordon13@gmail.com"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/craig-gordon-bab4b4191"
            target="_blank"
            className="rounded-xl border border-slate-600 px-6 py-3 font-semibold transition hover:bg-slate-800"
          >
            View LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}

function ProjectCard({ title, description, status }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400">
      <p className="mb-3 text-xs uppercase tracking-widest text-cyan-300">
        {status}
      </p>
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="mb-5 leading-relaxed text-slate-300">{description}</p>

      <button className="font-semibold text-cyan-300 hover:text-cyan-200">
        View Project →
      </button>
    </div>
  );
}

function ResourceCard({ title }) {
  return (
    <div className="rounded-2xl bg-slate-800 p-5">
      <h3 className="mb-2 font-semibold">{title}</h3>
      <p className="text-sm text-slate-300">
        Classroom-tested materials coming soon.
      </p>
    </div>
  );
}

function InfoBox({ title, text }) {
  return (
    <div className="rounded-2xl bg-slate-800 p-5">
      <h3 className="mb-2 font-semibold text-cyan-300">{title}</h3>
      <p className="text-slate-300">{text}</p>
    </div>
  );
}