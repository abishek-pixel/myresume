"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Phone, ExternalLink, Sparkles, X } from "lucide-react"

export default function Resume() {
  const [activeContact, setActiveContact] = useState<string | null>(null)
  const [scrollY, setScrollY] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const contactInfo = {
    email: "abhishek47kamthe@gmail.com",
    phone: "+91 9657459759",
    linkedin: "https://www.linkedin.com/in/abhishek-kamthe-b37a91259/",
    github: "https://github.com/abhishek-pixel",
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Large animated orb - follows scroll */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-3xl -top-48 -left-48 transition-transform duration-100 ease-out"
          style={{
            transform: `translate(${mousePos.x * 0.02}px, ${scrollY * 0.3}px)`,
            filter: `drop-shadow(0 0 30px rgba(var(--accent-rgb, 82, 207, 220), 0.1))`,
          }}
        />
        {/* Bottom right orb - opposite scroll direction */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-tl from-accent/15 to-primary/10 rounded-full blur-3xl -bottom-48 -right-48 transition-transform duration-100 ease-out"
          style={{
            transform: `translate(${mousePos.x * -0.015}px, ${scrollY * -0.2}px)`,
            filter: `drop-shadow(0 0 30px rgba(var(--primary-rgb, 63, 81, 181), 0.1))`,
          }}
        />
        {/* Center floating orb */}
        <div
          className="absolute w-72 h-72 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-full blur-3xl top-1/2 left-1/3 transition-transform duration-100 ease-out"
          style={{
            transform: `translate(${mousePos.x * 0.01}px, ${scrollY * 0.25}px)`,
            filter: `drop-shadow(0 0 20px rgba(var(--accent-rgb, 82, 207, 220), 0.05))`,
          }}
        />
        {/* Additional accent orb for depth */}
        <div
          className="absolute w-64 h-64 bg-accent/5 rounded-full blur-3xl top-1/3 right-1/4 transition-transform duration-100 ease-out"
          style={{
            transform: `translate(${mousePos.x * -0.012}px, ${scrollY * 0.15}px)`,
          }}
        />
      </div>

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-primary">Abhishek Kamthe</h1>
          <div className="flex gap-6">
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition">
              Projects
            </a>
            <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition">
              Skills
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Enhanced */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 py-24 relative">
          <div className="flex flex-col gap-8">
            {/* Main Title */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Computer Science Student & AI Enthusiast</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-4 text-balance">
                Abhishek{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Kamthe</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed text-balance">
                Passionate developer building intelligent IoT solutions and exploring the intersection of AI,
                automation, and sustainable technology.
              </p>
            </div>

            {/* Contact & Social */}
            <div className="flex flex-wrap gap-8 items-center">
              <div className="flex gap-4">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 font-medium group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Email Me
                </a>
                <button
                  onClick={() => setActiveContact("phone")}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-accent hover:bg-accent hover:text-accent-foreground text-accent hover:shadow-lg hover:shadow-accent/40 transition-all duration-300 group"
                >
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Call
                </button>
              </div>

              <div className="flex gap-4">
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 hover:text-accent transition-all duration-300 hover:scale-110 cursor-pointer"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5 text-foreground" />
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 hover:text-accent transition-all duration-300 hover:scale-110 cursor-pointer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5 text-foreground" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {activeContact && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background border border-accent rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-accent/20 animate-in fade-in zoom-in duration-300">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-foreground">
                {activeContact === "email" && "Email Address"}
                {activeContact === "phone" && "Phone Number"}
                {activeContact === "github" && "GitHub Profile"}
                {activeContact === "linkedin" && "LinkedIn Profile"}
              </h3>
              <button onClick={() => setActiveContact(null)} className="p-1 hover:bg-accent/10 rounded-lg transition">
                <X className="w-5 h-5 text-foreground" />
              </button>
            </div>

            <div className="space-y-4">
              {activeContact === "email" && (
                <div className="space-y-3">
                  <p className="text-foreground text-lg font-semibold">{contactInfo.email}</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-accent/50 transition-all font-semibold"
                  >
                    <Mail className="w-4 h-4" />
                    Send Email
                  </a>
                </div>
              )}

              {activeContact === "phone" && (
                <div className="space-y-3">
                  <p className="text-foreground text-lg font-semibold">{contactInfo.phone}</p>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-accent/50 transition-all font-semibold"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              )}

              {activeContact === "github" && (
                <div className="space-y-3">
                  <p className="text-foreground text-lg font-semibold">@abhishek-pixel</p>
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-accent/50 transition-all font-semibold"
                  >
                    <Github className="w-4 h-4" />
                    Visit GitHub
                  </a>
                </div>
              )}

              {activeContact === "linkedin" && (
                <div className="space-y-3">
                  <p className="text-foreground text-lg font-semibold">Abhishek Kamthe</p>
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-accent/50 transition-all font-semibold"
                  >
                    <Linkedin className="w-4 h-4" />
                    Visit LinkedIn
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pb-24 relative z-10">
        {/* About Section */}
        <section className="mb-24 py-12 border-t border-border">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl">
            I'm a Computer Science Engineering student with a strong foundation in{" "}
            <span className="text-foreground font-semibold">Python, Data Science, and IoT</span>. I am profficient in designing
            intelligent systems, particularly in automated waste management and agricultural technology. My expertise
            spans <span className="text-foreground font-semibold">DSA, DBMS, Operating Systems, and Networking</span>.
            I'm driven by solving real-world problems through technology and continuously learning emerging
            technologies.
          </p>
        </section>

        {/* Education Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
            Education
          </h2>
          <div className="space-y-6">
            {/* MIT ADT */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition" />
              <div className="relative p-6 border border-border rounded-xl hover:border-primary/30 transition">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Computer Science</h3>
                    <p className="text-muted-foreground">MIT ADT UNIVERSITY, PUNE</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-accent">8.30 CGPA</p>
                    <p className="text-sm text-muted-foreground">2024</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Expected Graduation: 05/2027</p>
                <p className="text-foreground leading-relaxed">
                  Successfully completed 2 years of coursework with consistent academic progress and strong commitment
                  to excellence.
                </p>
              </div>
            </div>

            {/* Board Education */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition" />
                <div className="relative p-6 border border-border rounded-xl hover:border-primary/30 transition">
                  <h3 className="text-lg font-bold text-foreground mb-2">X (CBSE)</h3>
                  <p className="text-muted-foreground text-sm mb-3">Singhad City School, Kondhwa - Pune</p>
                  <p className="text-lg font-bold text-accent">77.60%</p>
                  <p className="text-sm text-muted-foreground">2021</p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition" />
                <div className="relative p-6 border border-border rounded-xl hover:border-primary/30 transition">
                  <h3 className="text-lg font-bold text-foreground mb-2">XII (CBSE)</h3>
                  <p className="text-muted-foreground text-sm mb-3">Singhad College of Arts, Commerce And Science</p>
                  <p className="text-lg font-bold text-accent">57.67%</p>
                  <p className="text-sm text-muted-foreground">2023</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-24">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
            Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Hard Skills */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-foreground">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Python",
                  "DSA with Python",
                  "Flutter",
                  "Next.js",
                  "HTML & CSS",
                  "Networking",
                  "Operating Systems",
                  "DBMS",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="p-4 rounded-lg border border-border hover:border-accent/50 hover:bg-accent/5 transition group cursor-default"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 bg-accent rounded-full group-hover:scale-150 transition" />
                      <span className="font-medium text-foreground">{skill}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-foreground">Core Competencies</h3>
              <div className="space-y-3">
                {[
                  { name: "Problem-Solving", desc: "Complex algorithmic challenges" },
                  { name: "Teamwork", desc: "Cross-functional collaboration" },
                  { name: "Adaptability", desc: "Quick learning & skill acquisition" },
                  { name: "Leadership", desc: "Project direction & mentoring" },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition"
                  >
                    <p className="font-semibold text-foreground">{skill.name}</p>
                    <p className="text-sm text-muted-foreground">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
            Featured Projects
          </h2>

          <div className="grid gap-8">
            {/* Smart Bin Composter */}
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative p-8 border border-border rounded-xl hover:border-accent/50 transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition">
                      Smart Bin Composter
                    </h3>
                    <p className="text-muted-foreground text-sm">Team Project • Jan 2025 – May 2025</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition" />
                </div>
                <p className="text-foreground leading-relaxed mb-4">
                  Designed an IoT-enabled composting bin that automates organic waste decomposition using advanced
                  sensors and Raspberry Pi microcontrollers. Achieved a{" "}
                  <span className="font-semibold">170% increase in decomposition efficiency</span> through intelligent
                  monitoring and control systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["IoT", "Python", "Raspberry Pi", "Sensors", "Automation"].map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Smart Agribooth */}
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative p-8 border border-border rounded-xl hover:border-accent/50 transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition">
                      Smart Agribooth
                    </h3>
                    <p className="text-muted-foreground text-sm">Team Project • July 2024 - Dec 2024</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition" />
                </div>
                <p className="text-foreground leading-relaxed mb-4">
                  Developed a comprehensive Agricultural Assistance System integrating automated soil testing, livestock
                  monitoring, land record management, and government scheme access. Enhanced farmer productivity through{" "}
                  <span className="font-semibold">data-driven insights and smart recommendations</span> for sustainable
                  agriculture.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Agriculture", "Data Analytics", "IoT", "Automation", "Government Integration"].map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Python for AI [IBM] - Coursera",
              "Certified SEBI Investor - NISM",
              "Cybersecurity Professional [Google] - Coursera",
              "Gen-AI [IBM] - Coursera",
            ].map((cert) => (
              <div
                key={cert}
                className="p-4 border border-border rounded-lg hover:border-accent/50 hover:bg-accent/5 transition flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-gradient-to-b from-primary to-accent rounded-full flex-shrink-0" />
                <span className="text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Interests Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
            Interests & Hobbies
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Travel & Exploration", desc: "Discovering new places and cultures" },
              { title: "Fitness", desc: "Regular practice for health & wellness" },
              { title: "Knowledge Seeking", desc: "Continuous learning and self-improvement" },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition text-center"
              >
                <p className="font-semibold text-foreground mb-2">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="contact"
          className="py-16 px-8 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border border-border text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-foreground">Let's Connect</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition font-semibold"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 hover:border-primary hover:bg-primary/5 transition font-semibold"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6 text-center relative z-10">
        <p className="text-muted-foreground text-sm">© 2025 Abhishek Kamthe</p>
      </footer>
    </div>
  )
}
