import React, { useState, useContext, createContext, useEffect } from "react";
import {
  Home, User, Briefcase, Mail, Sun, Moon, Zap, Menu, X,
} from "lucide-react";

// Context
const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    document.documentElement.classList.add("dark"); // initial theme
  }, []);

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      <div className="min-h-screen transition-colors duration-500 bg-white dark:bg-gray-900">
        {children}
      </div>
    </AppContext.Provider>
  );
};

// AOS Animation Hook
const useAOS = () => {
  useEffect(() => {
    const els = document.querySelectorAll("[data-aos]");
    els.forEach((el) => {
      el.classList.add("opacity-0", "translate-y-5", "transition-all", "duration-700");
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("opacity-0", "translate-y-5");
          el.classList.add("opacity-100", "translate-y-0");
        }
      });
      obs.observe(el);
    });
  }, []);
};

// Navigation
const Navigation = () => {
  const { theme, toggleTheme } = useContext(AppContext);
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur border-b px-4 py-3 flex justify-between items-center
        ${theme === "dark" ? "bg-gray-900 text-white border-gray-700/50" : "bg-white text-black border-gray-200/50"}`}
    >
      <div className="flex items-center gap-2 font-bold select-none">
        <div className="bg-gradient-to-br from-yellow-400 to-pink-500 p-2 rounded-lg shadow-lg">
          <Zap className="w-5 h-5 text-white" />
        </div>
        GradientSPA
      </div>

      <div className="hidden md:flex items-center gap-6">
        {navItems.map(({ name, href, icon: Icon }) => (
          <a
            key={name}
            href={href}
            className="flex items-center gap-1 hover:text-yellow-400 transition"
            onClick={() => setOpen(false)}
          >
            <Icon className="w-4 h-4" />
            {name}
          </a>
        ))}

        <button onClick={toggleTheme} aria-label="Toggle Theme" className="ml-4">
          {theme === "dark" ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >
        {open ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`absolute left-0 right-0 top-full p-4 md:hidden flex flex-col gap-4
            ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}
        >
          {navItems.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              className="flex items-center gap-2 text-lg"
              onClick={() => setOpen(false)}
            >
              <Icon className="w-5 h-5" />
              {name}
            </a>
          ))}
          <button
            onClick={() => {
              toggleTheme();
              setOpen(false);
            }}
            className="flex items-center gap-2 text-lg"
          >
            {theme === "dark" ? (
              <>
                <Sun className="w-5 h-5" /> Light Mode
              </>
            ) : (
              <>
                <Moon className="w-5 h-5" /> Dark Mode
              </>
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

// Sections
const HomePage = () => {
  useAOS();
  return (
    <section
      id="home"
      className="pt-24 min-h-screen flex flex-col justify-center items-center text-center px-4
        bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-violet-900 transition-colors duration-500"
    >
      <h1
        data-aos
        className="text-5xl font-bold mb-4  leading-relaxe bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text select-text"
      >
        Welcome to Single Page Appliction
      </h1>
      <p data-aos className="text-lg max-w-xl text-gray-900 dark:text-gray-300 select-text">
        A beautiful, responsive Single Page App built with React, Tailwind CSS, and love.
      </p>
    </section>
  );
};

const AboutPage = () => {
  useAOS();
  return (
    <section
      id="about"
      className="pt-24 min-h-screen flex flex-col items-center justify-center text-center px-4
        bg-gradient-to-br from-indigo-100 to-pink-100 dark:from-indigo-900 dark:to-pink-900 transition-colors duration-500"
    >
      <h1 data-aos className="text-4xl font-bold mb-4 select-text">About Me</h1>
      <p data-aos className="max-w-xl text-gray-900 dark:text-gray-300 select-text">
        I'm Zain Ul Abdin Ghani, a passionate full-stack developer who thrives on creating elegant UIs and scalable backend systems using modern tech.
      </p>
    </section>
  );
};

const ProjectsPage = () => {
  useAOS();
  const projects = [
    { name: "E-Commerce App", status: "Completed" },
    { name: "Mobile App UI", status: "In Progress" },
    { name: "Admin Dashboard", status: "Planned" },
    { name: "Portfolio Website", status: "Completed" },
    { name: "Weather Tracker", status: "In Progress" },
    { name: "Chat Application", status: "Completed" },
  ];

  return (
    <section
      id="projects"
      className="pt-24 min-h-screen px-6 bg-gradient-to-br from-slate-100 to-purple-100 dark:from-slate-900 dark:to-purple-900 transition-colors duration-500"
    >
      <h1 data-aos className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white select-text">
        Projects
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <div
            key={i}
            data-aos
            className="p-6 rounded-xl bg-white shadow-md border border-gray-300 dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition-transform cursor-pointer select-text"
          >
            <h2 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{p.name}</h2>
            <p className="text-sm text-purple-600 dark:text-purple-400">{p.status}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const submit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setForm({ name: "", email: "", msg: "" });
  };
  return (
    <section
      id="contact"
      className="pt-24 min-h-screen flex items-center justify-center px-4
        bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-900 transition-colors duration-500"
    >
      <form onSubmit={submit} className="space-y-4 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white select-text">
          Contact Me
        </h1>
        <input
          className="w-full p-3 rounded bg-white border border-gray-300 placeholder-gray-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-900 dark:text-white"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          className="w-full p-3 rounded bg-white border border-gray-300 placeholder-gray-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-900 dark:text-white"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          type="email"
          required
        />
        <textarea
          className="w-full p-3 rounded bg-white border border-gray-300 placeholder-gray-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-900 dark:text-white"
          placeholder="Message"
          rows={5}
          value={form.msg}
          onChange={(e) => setForm({ ...form, msg: e.target.value })}
          required
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded text-white font-bold hover:scale-105 transition-transform"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

// Main App Component
const Spa = () => {
  return (
    <AppProvider>
      <Navigation />
      <main>
        <HomePage />
        <AboutPage />
        <ProjectsPage />
        <ContactPage />
      </main>
    </AppProvider>
  );
};

export default Spa;
