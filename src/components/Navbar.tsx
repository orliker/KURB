import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Reservas', href: '#contactos' },
  ];

  const scrollToContact = () => {
    setMobileMenuOpen(false);
    const element = document.getElementById('contactos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ${
        isScrolled ? 'bg-[#060606]/95 backdrop-blur-3xl py-4 border-b border-[#C89B5A]/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)]' : 'bg-transparent py-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-24 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "0.6em" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-3xl font-serif uppercase font-light text-[#FAF6EE] cursor-pointer group flex items-center gap-4"
        >
          <span className="group-hover:text-[#C89B5A] transition-colors duration-700">KURB</span>
          <div className="w-8 h-[1px] bg-[#C89B5A]/20 group-hover:w-16 transition-all duration-700 origin-left"></div>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-16">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.5, duration: 1.2, ease: "easeOut" }}
              className="text-[11px] uppercase tracking-[0.5em] font-bold text-[#FAF6EE]/40 hover:text-[#C89B5A] transition-all relative group"
            >
              <span className="relative z-10">{link.name}</span>
              <motion.span 
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                className="absolute -bottom-2 left-0 w-full h-[1px] bg-[#C89B5A] transition-transform duration-700 origin-center"
              ></motion.span>
            </motion.a>
          ))}
          <motion.button
            onClick={scrollToContact}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-3 border border-white/5 bg-[#16110C] text-[#E3C98A] text-[10px] uppercase tracking-[0.4em] font-black hover:border-[#C89B5A]/40 hover:shadow-[0_0_30px_rgba(200,155,90,0.15)] transition-all duration-700"
          >
            Reservar
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-[#FAF6EE] opacity-70 hover:opacity-100 transition-opacity" 
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={20} strokeWidth={1.5} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[#060606] z-[60] flex flex-col p-12"
          >
             {/* Noise Overlay in Mobile Menu */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none noise-overlay"></div>
            
            <div className="flex justify-between items-center mb-24 relative z-10">
              <span className="text-2xl font-serif tracking-[0.5em] text-[#C89B5A]">KURB</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full"
              >
                <X size={20} className="text-[#FAF6EE]" />
              </button>
            </div>
            
            <div className="flex flex-col gap-8 relative z-10">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name} 
                  href={link.href} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-serif tracking-widest text-[#FAF6EE] hover:text-[#C89B5A] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button 
                onClick={scrollToContact}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 btn-premium"
              >
                Reservar Mesa
              </motion.button>
            </div>

            <div className="mt-auto relative z-10 text-[9px] uppercase tracking-[0.5em] text-[#FAF6EE]/20 text-center">
              Porto • Fine Dining • Excellence
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
