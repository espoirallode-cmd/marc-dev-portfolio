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
                className="group flex items-center gap-4 w-full px-5 py-4 rounded-2xl bg-zinc-900/80 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-sm cursor-pointer"
              >


                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="font-body font-semibold text-sm sm:text-base text-white tracking-wide truncate">
                    Commander votre site dès maintenant
                  </p>

                </div>

                {/* Right Arrow */}
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#E60029] border border-[#E60029] text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </div>
              </a>
            </div>


          </motion.div>
        </motion.div>

        {/* Massive Background Brand Text - single line */}
        <div className="relative mt-16 mb-8 flex justify-center overflow-hidden md:mt-24 md:mb-12">
          <span className="pointer-events-none bg-gradient-to-b from-[#E60029]/20 to-transparent bg-clip-text text-[15vw] sm:text-[13vw] lg:text-[11vw] leading-none font-heading font-black tracking-tighter text-transparent select-none whitespace-nowrap uppercase">
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
              Offres
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
