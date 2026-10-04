import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState({ prenom: "", email: "", type: "vitrine", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:contactmarcosgraphique@gmail.com?subject=Nouveau projet - ${form.prenom}&body=${encodeURIComponent(
      `Prénom: ${form.prenom}\nEmail: ${form.email}\nType: ${form.type}\n\nMessage:\n${form.message}`
    )}`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="py-24 bg-black relative" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="reveal w-fit mx-auto font-heading font-extrabold text-3xl sm:text-5xl text-center mb-4 bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
          Prêt à lancer votre projet ?
        </h2>
        <p className="reveal font-body text-zinc-400 text-center text-base sm:text-lg mb-10 max-w-xl mx-auto">
          Discutons de votre projet et trouvons la meilleure solution adaptée à vos objectifs.
        </p>

        {/* Direct Action Buttons */}
        <div className="reveal flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://wa.me/22990107869"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-600/30 hover:border-emerald-500/70 px-6 py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2.5 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Discuter sur WhatsApp
          </a>
          <a
            href="mailto:contactmarcosgraphique@gmail.com"
            className="bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-white/30 px-6 py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2.5 transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] cursor-pointer"
          >
            <Mail className="w-5 h-5 text-rose-400" />
            Envoyer un email
          </a>
        </div>

        {/* Contact Form Card */}
        <div className="reveal bg-zinc-950/90 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 shadow-[0_0_50px_rgba(0,0,0,0.9)]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Prénom</label>
                <input
                  type="text"
                  placeholder="Votre prénom"
                  required
                  maxLength={100}
                  value={form.prenom}
                  onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                  className="w-full bg-black/60 border border-white/10 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 rounded-xl p-3.5 text-sm font-body text-white placeholder:text-zinc-600 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email"
                  placeholder="votre.email@exemple.com"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-black/60 border border-white/10 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 rounded-xl p-3.5 text-sm font-body text-white placeholder:text-zinc-600 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Type de projet</label>
              <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="w-full bg-black/60 border border-white/10 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 rounded-xl p-3.5 text-sm font-body text-white outline-none transition-all cursor-pointer"
              >
                <option value="vitrine" className="bg-zinc-950 text-white">Site vitrine</option>
                <option value="boutique" className="bg-zinc-950 text-white">Boutique en ligne</option>
                <option value="charte" className="bg-zinc-950 text-white">Identité visuelle + Site</option>
                <option value="autre" className="bg-zinc-950 text-white">Autre demande</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Message</label>
              <textarea
                placeholder="Décrivez brièvement votre projet, vos objectifs et vos attentes..."
                required
                maxLength={1000}
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-black/60 border border-white/10 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 rounded-xl p-3.5 text-sm font-body text-white placeholder:text-zinc-600 outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full group bg-[#e60029] hover:bg-[#c2001f] text-white py-4 rounded-xl font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(230,0,41,0.4)] hover:shadow-[0_0_35px_rgba(230,0,41,0.7)] transition-all duration-300 hover:scale-[1.01] cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Envoyer ma demande</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

