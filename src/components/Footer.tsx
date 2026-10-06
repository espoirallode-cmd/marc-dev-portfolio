import { motion, Variants } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";

export default function Footer() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const navLinks = [
    { name: "Accueil", href: "#hero" },
    { name: "Avantages", href: "#avantages" },
    { name: "Process", href: "#process" },
    { name: "Offres", href: "#offres" },
    { name: "FAQ", href: "#faq" },
    { name: "Réalisation", href: "#realisations" },
    { name: "Contact", href: "#contact" },
  ];

  const serviceLinks = [
    { name: "Site Vitrine", href: "#offres" },
    { name: "Landing Page", href: "#offres" },
    { name: "Site E-commerce", href: "#offres" },
  ];

  const contactLinks = [
    { name: "WhatsApp", href: "https://wa.me/22990107869", external: true },
    { name: "Email Direct", href: "mailto:contactmarcosgraphique@gmail.com", external: true },
  ];

  return (
    <footer className="dark relative z-10 overflow-hidden border-t border-white/5 bg-black pt-24 pb-8 text-white">
      {/* Background Grid Enhancement */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_10%,transparent_100%)] bg-[size:4rem_4rem]"></div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20 grid grid-cols-2 gap-12 md:grid-cols-5 lg:gap-16 xl:gap-24"
        >
          {/* Brand & Mission */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 flex flex-col justify-between"
          >
            <div>
              <div className="mb-8">
                <span className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                  Marc Dev
                </span>
              </div>
              <p className="mb-10 max-w-sm text-lg leading-relaxed font-light text-white/90">
                Création de sites web professionnels. Design sur-mesure, rapide & réactif.
              </p>
            </div>

            {/* Social & Contact icons */}
            <div className="mt-auto flex items-center gap-5">
              <a
                href="https://wa.me/22990107869"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.03] text-white shadow-xl transition-all hover:border-emerald-500/50 hover:text-emerald-400"
              >
                <span className="absolute inset-0 translate-y-full bg-gradient-to-t from-emerald-600/40 to-transparent transition-transform duration-300 group-hover:translate-y-0"></span>
                <svg className="relative z-10 h-5 w-5 transition-transform group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>

              <a
                href="mailto:contactmarcosgraphique@gmail.com"
                aria-label="Email"
                className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.03] text-white shadow-xl transition-all hover:border-white/30 hover:text-white"
              >
                <span className="absolute inset-0 translate-y-full bg-gradient-to-t from-white/20 to-transparent transition-transform duration-300 group-hover:translate-y-0"></span>
                <Mail className="relative z-10 h-5 w-5 transition-transform group-hover:scale-110" />
              </a>
            </div>
          </motion.div>

          {/* Navigation Column */}
          <motion.div variants={itemVariants}>
            <h4 className="mb-8 text-white text-lg font-bold tracking-wide uppercase">
              Navigation
            </h4>
            <ul className="space-y-5 text-base font-medium text-white">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="group flex items-center transition-colors hover:text-zinc-300"
                  >
                    {item.name}{" "}
                    <ArrowRight className="ml-2 h-4 w-4 -translate-x-3 text-white opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Column */}
          <motion.div variants={itemVariants}>
            <h4 className="mb-8 text-white text-lg font-bold tracking-wide uppercase">
              Offres
            </h4>
            <ul className="space-y-5 text-base font-medium text-white">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="group flex items-center transition-colors hover:text-zinc-300"
                  >
                    {item.name}{" "}
                    <ArrowRight className="ml-2 h-4 w-4 -translate-x-3 text-white opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={itemVariants}>
            <h4 className="mb-8 text-white text-lg font-bold tracking-wide uppercase">
              Contact
            </h4>
            <ul className="space-y-5 text-base font-medium text-white">
              {contactLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center transition-colors hover:text-zinc-300"
                  >
                    {item.name}{" "}
                    <ArrowRight className="ml-2 h-4 w-4 -translate-x-3 text-white opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Massive Background Brand Text - single line */}
        <div className="relative mt-16 mb-8 flex justify-center overflow-hidden md:mt-24 md:mb-12">
          <span className="pointer-events-none bg-gradient-to-b from-white/[0.08] to-transparent bg-clip-text text-[15vw] sm:text-[13vw] lg:text-[11vw] leading-none font-heading font-black tracking-tighter text-transparent select-none whitespace-nowrap uppercase">
            MARC DEV
          </span>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 text-center md:flex-row md:gap-0 md:text-left"
        >
          <p className="text-sm font-medium text-white/70">
            &copy; {new Date().getFullYear()} Marc Dev. Tous droits réservés.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-white/70 md:gap-8">
            <a
              href="#hero"
              className="underline-offset-4 transition-all hover:text-white hover:underline"
            >
              Accueil
            </a>
            <a
              href="#offres"
              className="underline-offset-4 transition-all hover:text-white hover:underline"
            >
              Nos Offres
            </a>
            <a
              href="#contact"
              className="underline-offset-4 transition-all hover:text-white hover:underline"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
