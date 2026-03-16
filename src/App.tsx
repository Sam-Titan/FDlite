import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Heart, 
  ChevronRight, 
  ChevronLeft, 
  Menu, 
  X, 
  ShieldCheck, 
  FileText, 
  CheckCircle2,
  Users,
  Home,
  TrendingUp,
  Banknote,
  Stethoscope,
  GraduationCap,
  Leaf,
  MessageSquare,
  Globe
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'frosted-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between relative">
        {/* Logo & Brand - Left */}
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center text-white font-serif font-bold text-base md:text-lg">
            FD
          </div>
          <span className="font-serif font-bold text-lg md:text-xl tracking-tight text-primary-dark">FDlite Foundation</span>
        </div>

        {/* Navigation Links - Centered on Desktop */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {['Impact', 'Lakshmi Centers', 'About', 'Donate'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="text-ink-muted hover:text-primary font-medium transition-colors whitespace-nowrap"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA Button - Right on Desktop */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5">
            Donate Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-primary-dark z-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-black/5 p-6 flex flex-col gap-4 shadow-xl"
        >
          {['Impact', 'Lakshmi Centers', 'About', 'Donate'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="text-lg font-medium text-ink"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="bg-primary text-white py-3 rounded-full font-bold">Donate Now</button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 flex items-center overflow-hidden bg-white">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.25]">
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-[250%] md:w-[150%] md:h-[150%]">
          <iframe
            className="w-full h-full pointer-events-none scale-110"
            src="https://www.youtube.com/embed/67nVHGF-XQ0?autoplay=1&mute=1&loop=1&playlist=67nVHGF-XQ0&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&cc_load_policy=0&cc_lang_pref=en&autohide=1"
            title="Background Video"
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light text-primary text-[10px] md:text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Women-Owned Dairy · Rural India
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-6 md:mb-8 text-ink break-words">
            Empowering <span className="italic text-primary">Women Farmers</span> Across Rural India
          </h1>
          <p className="text-base md:text-xl text-ink-muted mb-8 md:mb-10 max-w-lg leading-relaxed">
            FDlite Foundation funds Lakshmi Centers — village dairy hubs that give women farmers fair prices, direct payments, and financial independence.
          </p>
          
          <div className="flex flex-wrap gap-4 md:gap-8 mb-10 md:mb-12">
            <div>
              <div className="text-lg md:text-2xl font-bold text-primary-dark">2,500+</div>
              <div className="text-[10px] md:text-sm text-ink-muted">Women Empowered</div>
            </div>
            <div>
              <div className="text-lg md:text-2xl font-bold text-primary-dark">90</div>
              <div className="text-[10px] md:text-sm text-ink-muted">Villages</div>
            </div>
            <div>
              <div className="text-lg md:text-2xl font-bold text-primary-dark">100%</div>
              <div className="text-[10px] md:text-sm text-ink-muted">Direct Payments</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6">
            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:shadow-xl hover:-translate-y-1">
              Donate Today <ArrowRight size={20} />
            </button>
            <a href="#impact" className="text-primary font-bold hover:underline flex items-center justify-center sm:justify-start gap-1">
              See our impact <span className="text-xl">↓</span>
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mt-8 md:mt-0 w-full max-w-[500px] mx-auto md:max-w-none"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl" />
          <div className="relative aspect-[4/5] bg-primary-dark rounded-[2rem] overflow-hidden shadow-2xl group">
            <img 
              src="https://raw.githubusercontent.com/Sam-Titan/FDlite/main/sunita.jpg.jpeg" 
              alt="Woman Farmer" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary/20 to-transparent" />
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-6 left-6 right-6 md:bottom-16 md:left-12 md:right-12 text-center"
            >
              <p className="text-xl md:text-4xl text-white italic font-serif leading-tight">
                "When I got my first direct payment, I bought textbooks for my children."
              </p>
              <p className="text-white/80 mt-4 md:mt-6 text-base md:text-xl font-medium">— Kavitha B., Latur</p>
            </motion.div>

            {/* Floating Badges Container */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 right-4 md:top-12 md:right-12 z-20 flex flex-col items-end gap-3 md:gap-6"
            >
              <div className="bg-accent-blue text-white p-3 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col items-center text-center border border-white/20 backdrop-blur-sm">
                <div className="text-xl md:text-4xl font-bold mb-0.5 md:mb-1">$22,000+</div>
                <div className="text-[8px] md:text-sm opacity-90 uppercase tracking-[0.1em] md:tracking-[0.2em] font-black">Raised this year</div>
              </div>

              <div className="bg-primary text-white px-3 py-1.5 md:px-8 md:py-4 rounded-full shadow-2xl flex items-center justify-center gap-2 md:gap-3 border border-white/20 backdrop-blur-sm">
                <span className="text-sm md:text-2xl">🌾</span>
                <span className="font-black text-[10px] md:text-lg tracking-wider">Latur, Maharashtra</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProblemSection = () => {
  const problems = [
    { icon: "💸", title: "Middlemen Exploitation", desc: "Farmers receive a fraction of market price due to complex chains." },
    { icon: "📊", title: "No Price Transparency", desc: "Rates set arbitrarily with no recourse for the women producers." },
    { icon: "🏦", title: "No Banking Access", desc: "Cash payments lead to no savings and zero credit history." },
    { icon: "🏡", title: "Geographic Isolation", desc: "Markets are far, and women often can't travel alone to sell." },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto bg-primary-dark rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-white relative overflow-hidden">
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-primary-light/60 uppercase tracking-widest font-bold text-xs mb-4 block">The Problem</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl mb-8 leading-tight">Women farmers produce the milk. <span className="italic opacity-70">Middlemen keep the profit.</span></h2>
            <p className="text-lg md:text-xl text-white/70 mb-0 leading-relaxed">
              In rural India, millions of women are the primary workforce in dairy farming, yet they remain economically invisible. Exploitative middlemen and lack of infrastructure keep them trapped in a cycle of poverty.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 md:gap-6">
            {problems.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-4 md:p-8 rounded-xl md:rounded-3xl hover:bg-white/20 transition-colors group"
              >
                <div className="text-xl md:text-4xl mb-2 md:mb-6 group-hover:scale-110 transition-transform">{p.icon}</div>
                <h3 className="text-[10px] md:text-2xl font-bold mb-1 md:mb-3 leading-tight">{p.title}</h3>
                <p className="text-white/60 text-[8px] md:text-base leading-tight md:leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/20 blur-[80px] md:blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      </div>
    </section>
  );
};

const JourneySection = () => {
  const steps = [
    {
      title: "From our farms",
      desc: "Before dawn, the work begins — women tend to their cattle with quiet dedication every single day.",
      image: "https://raw.githubusercontent.com/Sam-Titan/FDlite/main/Image%201.jpeg"
    },
    {
      title: "Lakshmi Centers",
      desc: "Women bring fresh milk daily to community-owned collection hubs — fair pricing, transparent records, zero middlemen.",
      image: "https://raw.githubusercontent.com/Sam-Titan/FDlite/main/Image%202.jpeg"
    },
    {
      title: "Pure & Direct",
      desc: "Every litre of milk represents a family's livelihood — and now, their rightful earnings go directly to them.",
      image: "https://raw.githubusercontent.com/Sam-Titan/FDlite/main/Image%203.jpeg"
    }
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-4 md:gap-20 items-center">
          <div className="order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 md:space-y-12"
            >
              {steps.map((step, i) => (
                <div 
                  key={i}
                  className={`transition-all duration-500 cursor-pointer ${active === i ? 'opacity-100 translate-x-1 md:translate-x-2' : 'opacity-30 hover:opacity-50'}`}
                  onClick={() => setActive(i)}
                >
                  <div className="flex items-center gap-2 md:gap-4 mb-1 md:mb-4">
                    <span className={`w-6 h-6 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-[10px] md:text-xl ${active === i ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                      0{i + 1}
                    </span>
                    <h3 className="text-sm md:text-3xl font-bold text-ink">{step.title}</h3>
                  </div>
                  <p className={`text-[10px] md:text-lg text-ink-muted leading-tight md:leading-relaxed max-w-md ${active === i ? 'block' : 'hidden md:block'}`}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="order-2 relative">
            <div className="aspect-square md:aspect-[4/5] rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={steps[active].image}
                  alt={steps[active].title}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            {/* Progress Bar */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {steps.map((_, i) => (
                <div 
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${active === i ? 'w-8 bg-primary' : 'w-2 bg-primary/20'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LakshmiCenters = () => {
  const features = [
    { icon: <Home className="text-primary" />, title: "Village-Level Collection", desc: "No travel required. Community-owned hubs right in the heart of the village." },
    { icon: <TrendingUp className="text-primary" />, title: "Fair & Transparent Pricing", desc: "Market-linked rates openly displayed on digital boards for everyone to see." },
    { icon: <Banknote className="text-primary" />, title: "Direct Bank Transfers", desc: "No delays, no middlemen deductions. Money goes straight to the woman's account." },
    { icon: <Stethoscope className="text-primary" />, title: "Farm Support Services", desc: "Vet care, dairy training, and financial guidance to improve yield and quality." },
  ];

  return (
    <section id="lakshmi-centers" className="py-16 md:py-24 px-4 sm:px-6 bg-primary-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-primary uppercase tracking-widest font-bold text-xs md:text-sm mb-4 block">The Solution</span>
          <h2 className="text-3xl md:text-6xl text-primary-dark mb-6 leading-tight">Lakshmi Centers: <span className="italic">Community-Owned</span> Dairy Hubs</h2>
          <p className="text-lg md:text-xl text-ink-muted max-w-2xl mx-auto">
            We build village-level collection points run by and for women, ensuring they get the full value of their hard work.
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border-l-4 md:border-l-8 border-primary shadow-sm hover:shadow-md hover:translate-x-2 transition-all flex flex-col md:flex-row md:items-center gap-6 md:gap-8 group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary-light flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                {f.icon}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-primary-dark mb-1 md:mb-2">{f.title}</h3>
                <p className="text-ink-muted text-base md:text-lg">{f.desc}</p>
              </div>
              <ChevronRight className="ml-auto text-primary opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ImpactStats = () => {
  const stats = [
    { value: 2500, suffix: "+", label: "Women Farmers Empowered", sub: "Latur, Solapur, Gulbarga" },
    { value: 90, suffix: "", label: "Villages Connected", sub: "Daily milk collection" },
    { value: 100, suffix: "%", label: "Direct Payments", sub: "Straight to bank accounts" },
    { value: 0, suffix: "", label: "Middlemen in the Chain", sub: "100% transparent" },
  ];

  return (
    <section id="impact" className="py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary uppercase tracking-widest font-bold text-xs md:text-sm mb-4 block">Proven Impact</span>
          <h2 className="text-3xl md:text-5xl text-primary-dark mb-4">Numbers that speak</h2>
          <p className="text-ink-muted text-sm md:text-base">Every dollar donated translates directly into measurable change.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-paper border border-primary/10 shadow-sm"
            >
              <div className="text-3xl md:text-5xl font-bold text-primary mb-3 md:mb-4">
                <Counter value={s.value} />{s.suffix}
              </div>
              <div className="font-bold text-primary-dark mb-1 md:mb-2 text-sm md:text-base">{s.label}</div>
              <div className="text-[10px] text-ink-muted uppercase tracking-wider">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const end = value;
    if (start === end) return;
    
    let totalDuration = 2000;
    let increment = end / (totalDuration / 16);
    
    let timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [value, hasStarted]);

  return (
    <motion.span 
      onViewportEnter={() => setHasStarted(true)}
    >
      {count}
    </motion.span>
  );
};

const FundraisingProgress = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-primary-dark text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl mb-8 md:mb-12 text-center leading-tight">2026 Fundraising Goal · <span className="italic opacity-70">Expand to 200 Villages</span></h2>
        
        <div className="bg-white/10 h-4 md:h-6 rounded-full overflow-hidden mb-6 md:mb-8">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '37%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full bg-primary relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-pulse" />
          </motion.div>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-4 text-center">
          <div>
            <div className="text-lg md:text-2xl font-bold">$22,000</div>
            <div className="text-[10px] md:text-sm text-white/60 uppercase tracking-widest">Raised</div>
          </div>
          <div>
            <div className="text-lg md:text-2xl font-bold">37%</div>
            <div className="text-[10px] md:text-sm text-white/60 uppercase tracking-widest">Funded</div>
          </div>
          <div>
            <div className="text-lg md:text-2xl font-bold">$60,000</div>
            <div className="text-[10px] md:text-sm text-white/60 uppercase tracking-widest">Goal</div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 flex items-center justify-between text-[10px] md:text-sm text-white/40 border-t border-white/10 pt-4 md:pt-6 font-bold uppercase tracking-widest">
          <span>347 Donors</span>
          <span>Goal: Dec 31, 2026</span>
        </div>
      </div>
    </section>
  );
};

const PhotoSlider = () => {
  const slides = [
    { url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop", title: "Morning Collection at Latur" },
    { url: "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=1200&auto=format&fit=crop", title: "Training Session in Solapur" },
    { url: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=1200&auto=format&fit=crop", title: "New Lakshmi Center Opening" },
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative group">
        <div className="aspect-[16/9] md:aspect-[21/9] rounded-2xl md:rounded-[3rem] overflow-hidden relative">
          {slides.map((slide, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: current === i ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <img 
                src={slide.url} 
                alt={slide.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 text-white">
                <h3 className="text-xl md:text-2xl font-bold">{slide.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <button 
          onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft size={16} className="md:w-6 md:h-6" />
        </button>
        <button 
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight size={16} className="md:w-6 md:h-6" />
        </button>

        <div className="flex justify-center gap-2 mt-4 md:mt-6">
          {slides.map((_, i) => (
            <button 
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all ${current === i ? 'w-6 md:w-8 bg-primary' : 'bg-primary/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const DonateSection = () => {
  const [selectedTier, setSelectedTier] = useState(1000);
  const [isMonthly, setIsMonthly] = useState(false);
  const [customAmount, setCustomAmount] = useState('');

  const tiers = [
    { amount: 10, label: "Support 1 Woman Farmer", sub: "1 season of fair pricing" },
    { amount: 25, label: "Support 2 Farmers", sub: "Market access for two households" },
    { amount: 50, label: "Support 4 Farmers", sub: "Popular choice for impact", popular: true },
    { amount: 250, label: "Entire Village Dairy Hub", sub: "Lakshmi Center, solar chilling, 50+ women" },
  ];

  const currentAmount = customAmount ? parseInt(customAmount) : selectedTier;

  return (
    <section id="donate" className="py-16 md:py-24 px-4 sm:px-6 bg-primary-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-primary uppercase tracking-widest font-bold text-[10px] md:text-sm mb-3 block">Give Today</span>
          <h2 className="text-2xl md:text-5xl text-primary-dark mb-4 leading-tight">Your contribution creates real change</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-16 items-start">
          <div className="space-y-3 md:space-y-4">
            {tiers.map((tier) => (
              <button 
                key={tier.amount}
                onClick={() => {
                  setSelectedTier(tier.amount);
                  setCustomAmount('');
                }}
                className={`w-full text-left p-4 md:p-6 rounded-xl md:rounded-3xl border-2 transition-all flex items-center justify-between group ${selectedTier === tier.amount && !customAmount ? 'border-primary bg-white shadow-lg' : 'border-transparent bg-white/50 hover:bg-white'}`}
              >
                <div className="pr-2">
                  <div className="flex items-center gap-2 md:gap-3 mb-1">
                    <span className="text-lg md:text-2xl font-bold text-primary-dark">${tier.amount.toLocaleString()}</span>
                    {tier.popular && <span className="bg-accent-blue text-white text-[7px] md:text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-full">Popular</span>}
                  </div>
                  <div className="font-bold text-ink text-xs md:text-base">{tier.label}</div>
                  <div className="text-[10px] md:text-sm text-ink-muted leading-tight">{tier.sub}</div>
                </div>
                <div className={`w-4 h-4 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${selectedTier === tier.amount && !customAmount ? 'border-primary bg-primary' : 'border-primary/20'}`}>
                  {selectedTier === tier.amount && !customAmount && <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white" />}
                </div>
              </button>
            ))}
          </div>

          <div className="bg-white p-5 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-xl border border-black/5 w-full max-w-full overflow-hidden">
            <h3 className="text-lg md:text-2xl font-bold text-primary-dark mb-1 md:mb-2">Make a Donation</h3>
            <p className="text-xs md:text-base text-ink-muted mb-5 md:mb-8">100% of your donation supports women farmers directly.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3 mb-5 md:mb-8">
              {[10, 25, 50, 100, 250, 500].map((amt) => (
                <button 
                  key={amt}
                  onClick={() => {
                    setSelectedTier(amt);
                    setCustomAmount('');
                  }}
                  className={`py-2 md:py-3 rounded-lg md:rounded-xl font-bold text-xs md:text-base transition-all ${selectedTier === amt && !customAmount ? 'bg-primary text-white' : 'bg-primary-light text-primary hover:bg-primary/10'}`}
                >
                  ${amt.toLocaleString()}
                </button>
              ))}
            </div>

            <div className="relative mb-5 md:mb-8">
              <span className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-lg md:text-2xl font-serif text-primary-dark">$</span>
              <input 
                type="number" 
                placeholder="Custom Amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full pl-8 md:pl-10 pr-3 md:pr-4 py-3 md:py-4 rounded-xl md:rounded-2xl bg-primary-light border-2 border-transparent focus:border-primary focus:bg-white transition-all text-lg md:text-2xl font-serif text-primary-dark outline-none"
              />
            </div>

            <div className="flex p-1 bg-primary-light rounded-xl md:rounded-2xl mb-5 md:mb-8">
              <button 
                onClick={() => setIsMonthly(false)}
                className={`flex-1 py-2 md:py-3 rounded-lg md:rounded-xl font-bold text-xs md:text-base transition-all ${!isMonthly ? 'bg-white text-primary shadow-sm' : 'text-ink-muted hover:text-primary'}`}
              >
                One-time
              </button>
              <button 
                onClick={() => setIsMonthly(true)}
                className={`flex-1 py-2 md:py-3 rounded-lg md:rounded-xl font-bold text-xs md:text-base transition-all ${isMonthly ? 'bg-white text-primary shadow-sm' : 'text-ink-muted hover:text-primary'}`}
              >
                Monthly
              </button>
            </div>

            <button className="w-full bg-primary hover:bg-primary-dark text-white py-3.5 md:py-5 rounded-xl md:rounded-2xl font-bold text-base md:text-xl flex items-center justify-center gap-2 transition-all hover:shadow-2xl hover:-translate-y-1 mb-5 md:mb-8">
              <Heart size={18} className="md:w-6 md:h-6" fill="currentColor" /> Donate ${currentAmount.toLocaleString()} Now
            </button>

            <div className="flex items-center justify-center gap-3 md:gap-6 text-[9px] md:text-xs text-ink-muted font-bold uppercase tracking-widest">
              <div className="flex items-center gap-1"><ShieldCheck size={10} className="md:w-3.5 md:h-3.5" /> Secure</div>
              <div className="flex items-center gap-1"><FileText size={10} className="md:w-3.5 md:h-3.5" /> 80G</div>
              <div className="flex items-center gap-1"><CheckCircle2 size={10} className="md:w-3.5 md:h-3.5" /> Registered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const pillars = [
    { icon: "🏗️", title: "Infrastructure", desc: "Building solar-powered chilling units and collection centers." },
    { icon: "🎓", title: "Training", desc: "Scientific dairy management and financial literacy programs." },
    { icon: "🐄", title: "Veterinary Care", desc: "Ensuring cattle health and high-quality milk production." },
    { icon: "📊", title: "Financial Access", desc: "Facilitating bank accounts and micro-credit for women." },
    { icon: "🌱", title: "Sustainability", desc: "Promoting eco-friendly farming and waste management." },
    { icon: "📣", title: "Community Voice", desc: "Empowering women to lead village-level dairy cooperatives." },
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center mb-16 md:mb-24">
          <div>
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center text-white font-serif font-bold text-2xl md:text-3xl mb-6 md:mb-8">
              FD
            </div>
            <span className="text-primary uppercase tracking-widest font-bold text-xs md:text-sm mb-4 block">About the Foundation</span>
            <h2 className="text-3xl md:text-6xl text-primary-dark mb-6 md:mb-8 leading-tight">The FDlite Foundation</h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-xl text-ink-muted leading-relaxed">
              <p>
                The FDlite Foundation is the philanthropic arm of FDlite — India's women-owned dairy brand. While FDlite creates a market-driven supply chain, the Foundation raises funds to expand Lakshmi Centers, train more women farmers, and build the infrastructure for financial independence in rural India.
              </p>
              <p className="font-medium text-primary">
                We believe in radical transparency: 100% of public donations go directly to farmer programs and village infrastructure.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="space-y-3 md:space-y-4 pt-8 md:pt-12">
              <img src="https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=600&auto=format&fit=crop" className="rounded-2xl md:rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1597047084897-51e81819a499?q=80&w=600&auto=format&fit=crop" className="rounded-2xl md:rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-3 md:space-y-4">
              <img src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=600&auto=format&fit=crop" className="rounded-2xl md:rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600&auto=format&fit=crop" className="rounded-2xl md:rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {pillars.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-primary-light/30 border border-primary/5 hover:bg-primary-light transition-colors"
            >
              <div className="text-3xl md:text-4xl mb-4 md:mb-6">{p.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold text-primary-dark mb-2 md:mb-3">{p.title}</h3>
              <p className="text-ink-muted text-sm md:text-base leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-12 md:mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 md:gap-3 mb-6">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center text-white font-serif font-bold text-base md:text-lg">
                FD
              </div>
              <span className="font-serif font-bold text-lg md:text-xl tracking-tight">FDlite Foundation</span>
            </div>
            <p className="text-white/60 text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
              Empowering women farmers through community-owned dairy hubs and financial dignity.
            </p>
            <p className="text-[10px] md:text-sm text-white/40 italic">A philanthropic initiative of FDlite India</p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-primary">Foundation</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Impact Reports</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lakshmi Centers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Annual Reports</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-primary">Give</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Donate Now</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Monthly Giving</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Corporate CSR</a></li>
              <li><a href="#" className="hover:text-white transition-colors">80G Certificate</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-primary">Connect</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-center gap-2"><Globe size={16} /> <a href="#" className="hover:text-white transition-colors">fdlite.in</a></li>
              <li className="flex items-center gap-2"><MessageSquare size={16} /> <a href="#" className="hover:text-white transition-colors">hello@fdlite.org</a></li>
              <li className="text-sm">+91 99228 36200</li>
              <li className="text-sm">Instagram: @fdlite_india</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
          <p>© 2025 FDlite Foundation. All rights reserved.</p>
          <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
            Visit fdlite.in <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="relative overflow-x-hidden w-full">
      <Navbar />
      <main className="w-full">
        <Hero />
        <ProblemSection />
        <JourneySection />
        <LakshmiCenters />
        <ImpactStats />
        <FundraisingProgress />
        <DonateSection />
        <PhotoSlider />
        <About />
      </main>
      <Footer />
    </div>
  );
}
