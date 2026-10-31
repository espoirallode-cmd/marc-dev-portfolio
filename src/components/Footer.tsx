import { motion, Variants } from "motion/react";
import { Mail } from "lucide-react";

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
          className="mb-16 flex flex-col items-center text-center max-w-xl mx-auto"
        >
          {/* CTA Card */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <div className="mb-8 w-full">
              <a
                href="https://wa.me/22990107869"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 w-full px-5 py-4 rounded-2xl bg-zinc-900/80 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-all duration-300 hover:border-[#E60029]/40 hover:bg-zinc-900 hover:shadow-[0_8px_32px_rgba(230,0,41,0.12)] cursor-pointer"
              >


                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="font-body font-semibold text-sm sm:text-base text-white tracking-wide truncate">
                    Commander votre site dès maintenant
                  </p>

                </div>

                {/* Right Arrow */}
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-white/50 transition-all duration-300 group-hover:bg-[#E60029] group-hover:border-[#E60029] group-hover:text-white group-hover:translate-x-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </div>
              </a>
            </div>

            {/* Social & Contact icons */}
            <div className="flex items-center gap-5">
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
