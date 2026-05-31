export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-300">
          Science Educator • AI Builder • Web Project Developer
        </p>

        <h1 className="mb-6 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
          Craig Gordon builds science learning tools, AI apps, and polished web experiences.
        </h1>

        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
          I’m a biology teacher, healthcare MBA, and builder using AI, web tools, and science communication to create practical products for students, educators, and small businesses.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            View Projects
          </a>

          <a
            href="#story"
            className="rounded-xl border border-slate-600 bg-slate-900/60 px-6 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
          >
            My Story
          </a>

          <a
            href="https://www.linkedin.com/in/craig-gordon-bab4b4191"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-600 bg-slate-900/60 px-6 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
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
            className="rounded-xl border border-slate-600 bg-slate-900/60 px-6 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-300">
              About
            </p>

            <h2 className="mb-4 text-3xl font-bold">
              Science, communication, and technology in one lane.
            </h2>

            <p className="mb-4 leading-relaxed text-slate-300">
              My background combines biology, chemistry, anatomy, nutrition, teaching, healthcare management, entrepreneurship, and AI tool building. I’m especially interested in products that make complex ideas more accessible and useful.
            </p>

            <p className="leading-relaxed text-slate-300">
              This portfolio brings together my live web projects, AI learning tools, teaching resources, and early product prototypes.
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-slate-900/70 p-6 shadow-2xl">
            <div className="mb-6 flex items-center gap-4">
              <img
                src="/craig-headshot.png"
                alt="Craig Gordon"
                className="h-20 w-20 rounded-full border-2 border-cyan-300 object-cover"
              />

              <div>
                <h3 className="text-xl font-bold text-white">Craig Gordon</h3>
                <p className="text-sm text-cyan-300">
                  Science Educator • AI Builder • Web Developer
                </p>
              </div>
            </div>

            <h3 className="mb-4 text-xl font-bold text-cyan-300">
              Current Focus
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>• AI-powered education tools</li>
              <li>• Biology tutoring and student support apps</li>
              <li>• Career guidance and coaching workflows</li>
              <li>• Small business website prototypes</li>
              <li>• Classroom-tested science resources</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-cyan-400/20 bg-slate-900/70 p-8 shadow-2xl md:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-300">
            The Story
          </p>

          <h2 className="mb-6 max-w-4xl text-3xl font-bold md:text-4xl">
            I’m building proof that education, AI, and science communication can move faster.
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4 leading-relaxed text-slate-300">
              <p>
                My career started in the classroom, but the problems I kept seeing were bigger than one classroom. Students needed better support, teachers needed better tools, and science needed to feel more alive, relevant, and accessible.
              </p>

              <p>
                Instead of only talking about those problems, I started building. I created AI tutoring tools, a science resource store, a career guidance app, classroom materials, and websites for real businesses.
              </p>

              <p>
                This hub is the result of that work. It is not just a resume. It is a live collection of products, prototypes, and tools that show how I think, what I can create, and where I’m going next.
              </p>

              <p>
                The through-line is simple: I take complex information, turn it into something usable, and build tools that help people learn, decide, or act faster.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6">
              <h3 className="mb-4 text-xl font-bold text-cyan-300">
                What this portfolio shows
              </h3>

              <ul className="space-y-3 text-slate-300">
                <li>• I can turn ideas into live deployed products.</li>
                <li>• I can use AI practically, not just theoretically.</li>
                <li>• I can explain complex science in student-friendly ways.</li>
                <li>• I can build tools for education, sales, training, and small business.</li>
                <li>• I can create products that connect content, branding, and user experience.</li>
                <li>• I can move quickly from problem to prototype to live product.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-300">
          Featured Projects
        </p>

        <h2 className="mb-8 text-3xl font-bold">
          Live builds and active prototypes
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Biology Tutor AI"
            description="A live classroom-safe biology tutoring chatbot that helps students ask questions, review concepts, and study with guided explanations."
            status="Live AI Tutor"
            accent="cyan"
            link="https://biology-tutor-ai.vercel.app"
            buttonText="Launch Tutor"
          />

          <ProjectCard
            title="Career Guidance App"
            description="A live AI career exploration tool that helps users compare paths, clarify goals, and generate realistic next steps."
            status="Live App"
            accent="purple"
            link="https://career-guidance-app-rouge.vercel.app/"
            buttonText="Launch App"
          />

          <ProjectCard
            title="Teaching Materials Store"
            description="A live self-hosted science resource storefront featuring classroom-tested biology, ecology, lab safety, case studies, and AI teacher tools."
            status="Live Store"
            accent="emerald"
            link="https://mad-scientist-resource-store.vercel.app"
            buttonText="Launch Store"
          />

          <ProjectCard
            title="Stoop Dating Prototype"
            description="A polished landing page prototype for a social dating concept built around casual, real-world neighborhood connections."
            status="Live Website"
            accent="pink"
            link="https://stoop-dating-prototype.vercel.app/"
            buttonText="Launch Site"
          />

          <ProjectCard
            title="Rivera Property Management"
            description="A professional business website prototype built to showcase services, credibility, and client contact pathways."
            status="Live Website"
            accent="blue"
            link="https://y-six-drab-61.vercel.app/"
            buttonText="Launch Site"
          />
        </div>
      </section>

      {/* Biology Tutor AI Showcase */}
      <section id="biology-tutor-ai" className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-300">
          Project Showcase
        </p>

        <h2 className="mb-4 text-3xl font-bold">Biology Tutor AI</h2>

        <p className="mb-6 max-w-3xl text-lg leading-relaxed text-slate-300">
          Biology Tutor AI is a live classroom-safe tutoring chatbot designed to help students ask better questions, review difficult biology concepts, and receive clear explanations without simply being handed answers.
        </p>

        <div className="mb-8">
          <a
            href="https://biology-tutor-ai.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Launch Biology Tutor AI →
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <InfoCard
            color="cyan"
            title="Purpose"
            text="Support students during independent work, homework, review, and study sessions by giving them guided explanations in student-friendly language."
          />

          <InfoCard
            color="cyan"
            title="Built For"
            text="Biology students, science teachers, and classrooms that need extra academic support without replacing the teacher."
          />

          <InfoCard
            color="cyan"
            title="Status"
            text="Live Vercel demo with a working AI tutor interface, green science branding, and OpenAI API connection."
          />
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-300">
          Skill Stack
        </p>

        <h2 className="mb-8 text-3xl font-bold">
          Where my experience connects
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <SkillCard
            title="Science Communication"
            text="Biology, anatomy, physiology, nutrition, ecology, chemistry, and classroom-tested explanation."
            color="cyan"
          />

          <SkillCard
            title="AI and Web Tools"
            text="AI apps, chatbot workflows, Vercel deployments, GitHub workflows, Replit migrations, and prototype building."
            color="purple"
          />

          <SkillCard
            title="Product Thinking"
            text="Education tools, small business websites, career apps, resource stores, user experience, and practical problem solving."
            color="emerald"
          />
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Contact
          </p>

          <h2 className="mb-4 text-3xl font-bold">Let’s connect.</h2>

          <p className="mb-6 max-w-2xl text-slate-300">
            I’m open to roles and projects where science, communication, education, AI, and product thinking overlap.
          </p>

          <a
            href="mailto:Craig.James.Gordon13@gmail.com"
            className="inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Email Me
          </a>
        </div>
      </section>
    </main>
  );
}

function ProjectCard({ title, description, status, accent, link, buttonText = "View Project" }) {
  const accentStyles = {
    cyan: "from-cyan-400/20 to-blue-500/10 border-cyan-400/30 text-cyan-300",
    purple: "from-purple-400/20 to-fuchsia-500/10 border-purple-400/30 text-purple-300",
    emerald: "from-emerald-400/20 to-teal-500/10 border-emerald-400/30 text-emerald-300",
    pink: "from-pink-400/20 to-rose-500/10 border-pink-400/30 text-pink-300",
    blue: "from-blue-400/20 to-sky-500/10 border-blue-400/30 text-blue-300",
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
          target={link.startsWith("http") ? "_blank" : undefined}
          rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
          className="font-semibold hover:text-white"
        >
          {buttonText} →
        </a>
      ) : (
        <button className="font-semibold hover:text-white">
          View Project →
        </button>
      )}
    </div>
  );
}

function InfoCard({ title, text, color }) {
  const colors = {
    cyan: "border-cyan-400/30",
    emerald: "border-emerald-400/30",
    purple: "border-purple-400/30",
    blue: "border-blue-400/30",
    pink: "border-pink-400/30",
  };

  return (
    <div className={`rounded-2xl border bg-slate-900/80 p-6 ${colors[color]}`}>
      <h3 className="mb-2 font-bold text-white">{title}</h3>
      <p className="text-slate-300">{text}</p>
    </div>
  );
}

function SkillCard({ title, text, color }) {
  const colors = {
    cyan: "border-cyan-400/30",
    purple: "border-purple-400/30",
    emerald: "border-emerald-400/30",
  };

  return (
    <div className={`rounded-2xl border bg-slate-800/80 p-5 ${colors[color]}`}>
      <h3 className="mb-2 font-semibold">{title}</h3>
      <p className="text-slate-300">{text}</p>
    </div>
  );
}