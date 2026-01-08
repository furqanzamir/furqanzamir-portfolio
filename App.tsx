
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Twitter, 
  Globe, 
  Cpu, 
  Briefcase, 
  GraduationCap, 
  Zap,
  Menu,
  X,
  Sparkles,
  Terminal,
  Code2,
  Database,
  Layers,
  Award,
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  EXPERIENCES, 
  SKILL_CATEGORIES, 
  EDUCATIONS, 
  INTERESTS 
} from './constants';

const SectionHeader = ({ title, icon: Icon }: { title: string; icon: any }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-4 mb-12"
  >
    <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
      <Icon size={28} />
    </div>
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">{title}</h2>
    <div className="h-[1px] flex-grow bg-slate-800 ml-4 hidden md:block"></div>
  </motion.div>
);

const AbstractIllustration = ({ type }: { type: 'experience' | 'skills' | 'education' | 'hero' | 'interests' }) => {
  if (type === 'hero') {
    return (
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            y: [0, -60, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 -left-24 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 contrast-150"></div>
      </div>
    );
  }

  if (type === 'experience') {
    return (
      <div className="absolute right-0 top-0 h-full w-1/3 opacity-10 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 200 800" className="h-full w-full">
          <motion.path
            d="M100,0 C120,100 80,200 100,300 C120,400 80,500 100,600 C120,700 80,800 100,900"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="text-indigo-400"
          />
          {[150, 350, 550, 750].map((y, i) => (
            <motion.g key={i}>
              <motion.circle
                cx="100"
                cy={y}
                r="12"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: i * 0.4 }}
                className="fill-indigo-950 stroke-indigo-500 stroke-2"
              />
              <motion.path
                d={`M100,${y} L160,${y-30}`}
                stroke="currentColor"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ delay: i * 0.5 }}
                className="text-indigo-500/40"
              />
            </motion.g>
          ))}
        </svg>
      </div>
    );
  }

  if (type === 'skills') {
    return (
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block overflow-visible">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="relative w-96 h-96 flex items-center justify-center"
        >
          <div className="absolute inset-0 border-2 border-dashed border-indigo-500/20 rounded-full animate-pulse"></div>
          <div className="absolute inset-10 border border-purple-500/20 rounded-full"></div>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="p-8 bg-indigo-500/5 rounded-3xl backdrop-blur-sm border border-white/5"
          >
            <Code2 size={48} className="text-indigo-400 opacity-50" />
          </motion.div>
          {/* Floating nodes */}
          {[0, 90, 180, 270].map((deg, i) => (
            <div 
              key={i}
              className="absolute w-4 h-4 bg-indigo-500 rounded-full blur-[2px]"
              style={{ transform: `rotate(${deg}deg) translateX(192px)` }}
            />
          ))}
        </motion.div>
      </div>
    );
  }

  if (type === 'education') {
    return (
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none hidden lg:block">
        <motion.div
          initial={{ rotate: -10, y: 50, opacity: 0 }}
          whileInView={{ rotate: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="scale-150 transform translate-x-1/4 translate-y-1/4"
        >
          <Award size={400} className="text-indigo-400" />
        </motion.div>
      </div>
    );
  }

  if (type === 'interests') {
    return (
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <div className="grid grid-cols-6 gap-8 transform rotate-12 scale-150">
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: Math.random() * 5 + 3, repeat: Infinity }}
            >
              <Sparkles size={48} className="text-indigo-400" />
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' }
  ];

  return (
    <div className="min-h-screen selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[60] glass border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.a 
            href="#about"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
              FZ
            </div>
            <span className="text-xl font-bold tracking-tighter">Furqan Zamir</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <button className="md:hidden text-slate-400 z-[70]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      

      <main className="pt-24 pb-20 px-6 overflow-x-hidden">
        <div className="max-w-7xl mx-auto space-y-48">
          
          {/* Hero Section */}
          <section id="about" className="pt-12 md:pt-32 min-h-[85vh] flex flex-col justify-center relative scroll-mt-32">
            <AbstractIllustration type="hero" />
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-8 tracking-wider uppercase">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></div>
                  Frontend Engineering Specialist
                </div>
                <h2 className="text-6xl md:text-8xl font-black mb-10 leading-[0.85] tracking-tighter">
                  Principle <br /><span className="gradient-text">Consultant</span> Developer.
                </h2>
                <p className="text-xl text-slate-400 max-w-xl mb-12 leading-relaxed font-medium">
                  {PERSONAL_INFO.summary}
                </p>
                <div className="flex flex-wrap gap-5">
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="px-10 py-5 rounded-3xl bg-slate-100 text-slate-900 font-black hover:bg-white transition-all flex items-center gap-3 shadow-2xl shadow-slate-100/5 group">
                    <Mail size={22} className="group-hover:scale-110 transition-transform" />
                    Let's Connect
                  </a>
                  <div className="flex items-center gap-3 px-2">
                    <a href={`https://${PERSONAL_INFO.twitter}`} className="p-4 rounded-2xl bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-white/5">
                      <Twitter size={24} />
                    </a>
                    <a href={`https://${PERSONAL_INFO.website}`} className="p-4 rounded-2xl bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-white/5">
                      <Globe size={24} />
                    </a>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="hidden md:block relative group"
              >
                <div className="absolute -inset-4 rounded-[4rem] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-40 blur-3xl group-hover:opacity-60 transition-opacity"></div>
                <div className="relative rounded-[4rem] overflow-hidden border-2 border-white/10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]">
                  <img 
                    src="https://picsum.photos/seed/furqanzamir/1000/1200" 
                    alt="Furqan Zamir Portrait" 
                    className="w-full aspect-[4/5] object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <div className="absolute bottom-0 inset-x-0 p-12">
                    <div className="flex items-center gap-5">
                      <div className="p-4 rounded-[2rem] bg-indigo-500 text-white shadow-xl shadow-indigo-500/20">
                        <Zap size={28} />
                      </div>
                      <div>
                        <div className="text-3xl font-black text-white tracking-tighter">{PERSONAL_INFO.name}</div>
                        <div className="text-indigo-400 text-sm font-bold uppercase tracking-widest">{PERSONAL_INFO.location}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="relative scroll-mt-32">
            <AbstractIllustration type="experience" />
            <SectionHeader title="Career Trajectory" icon={Briefcase} />
            <div className="space-y-16">
              {EXPERIENCES.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="group relative grid md:grid-cols-4 gap-8 p-10 rounded-[3rem] bg-slate-800/20 hover:bg-slate-800/40 transition-all duration-700 border border-white/5 hover:border-indigo-500/20"
                >
                  <div className="md:col-span-1">
                    <span className="text-xs font-black text-indigo-400 tracking-[0.2em] uppercase block mb-3">{exp.period}</span>
                    <h4 className="text-2xl font-black text-slate-100 tracking-tighter group-hover:text-indigo-400 transition-colors">{exp.company}</h4>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-3xl font-bold text-slate-100 mb-6 flex items-center gap-3">
                      {exp.title}
                      <div className="h-px w-12 bg-indigo-500/30"></div>
                    </h3>
                    <ul className="space-y-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-4 text-slate-400 leading-relaxed text-lg group-hover:text-slate-300 transition-colors">
                          <div className="mt-2.5 w-2 h-2 rounded-full bg-indigo-500/40 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Skills Grid */}
          <section id="skills" className="relative scroll-mt-32">
            <AbstractIllustration type="skills" />
            <SectionHeader title="Technical Stack" icon={Cpu} />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {SKILL_CATEGORIES.map((cat, idx) => {
                const CategoryIcon = idx % 3 === 0 ? Terminal : idx % 3 === 1 ? Database : Layers;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-10 rounded-[3rem] glass hover:border-indigo-500/30 transition-all group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                      <CategoryIcon size={80} />
                    </div>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400">
                        <CategoryIcon size={24} />
                      </div>
                      <h3 className="text-xl font-black text-slate-100 tracking-tighter">{cat.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {cat.skills.map((skill, i) => (
                        <span key={i} className="px-4 py-2 rounded-2xl bg-slate-900/40 text-sm font-bold text-slate-400 border border-white/5 hover:border-indigo-500/30 hover:text-indigo-400 transition-all cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Education & Interests */}
          <div className="grid lg:grid-cols-2 gap-24">
            <section id="education" className="relative scroll-mt-32">
              <AbstractIllustration type="education" />
              <SectionHeader title="Education" icon={GraduationCap} />
              <div className="space-y-8 relative z-10">
                {EDUCATIONS.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="p-10 rounded-[3rem] bg-slate-800/30 border border-white/5 hover:bg-slate-800/50 hover:border-indigo-500/20 transition-all group"
                  >
                    <div className="text-xs font-black text-indigo-400 tracking-[0.2em] mb-4 uppercase">{edu.period}</div>
                    <h3 className="text-2xl font-black mb-2 text-slate-100 group-hover:text-indigo-400 transition-colors leading-tight">{edu.degree}</h3>
                    <p className="text-slate-400 font-bold text-lg">{edu.institution}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section id="interests" className="relative scroll-mt-32">
              <AbstractIllustration type="interests" />
              <SectionHeader title="Passions" icon={Zap} />
              <div className="grid grid-cols-2 gap-6 relative z-10">
                {INTERESTS.map((interest, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center p-10 rounded-[3rem] glass group hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all"
                  >
                    <div className="mb-6 p-5 rounded-3xl bg-slate-800/50 text-slate-400 group-hover:text-indigo-400 group-hover:bg-indigo-500/10 transition-all duration-500 group-hover:scale-110">
                      {interest.icon}
                    </div>
                    <span className="text-xs font-black text-slate-300 text-center uppercase tracking-[0.3em]">{interest.name}</span>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Call to Action Footer */}
          <footer className="pt-40 pb-20 border-t border-white/5 text-center relative overflow-hidden">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
             <motion.div 
               animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.2, 1] }}
               transition={{ duration: 8, repeat: Infinity }}
               className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full"
             />
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter relative z-10 leading-[0.9]">
                Ready to elevate <br />your <span className="gradient-text">frontend?</span>
              </h2>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20 relative z-10">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="px-12 py-6 rounded-[2rem] bg-indigo-500 text-white font-black text-xl hover:bg-indigo-600 transition-all shadow-[0_20px_40px_-10px_rgba(99,102,241,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(99,102,241,0.5)] flex items-center gap-4 group">
                  <Mail size={24} className="group-hover:translate-x-1 transition-transform" />
                  Work with me
                </a>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-3 text-2xl font-black text-slate-100 hover:text-indigo-400 transition-colors">
                  <Phone size={24} className="text-indigo-500" />
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </motion.div>

            <div className="flex items-center justify-center gap-6 text-slate-500 text-sm font-bold uppercase tracking-[0.2em] relative z-10">
              <span>{PERSONAL_INFO.email}</span>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
              <span>Based in {PERSONAL_INFO.location}</span>
            </div>
            <p className="mt-20 text-slate-600 text-xs font-bold tracking-widest">© {new Date().getFullYear()} FURQAN ZAMIR </p>
          </footer>
        </div>
      </main>

    
    </div>
  );
};

export default App;
