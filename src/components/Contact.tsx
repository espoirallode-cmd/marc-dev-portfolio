import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { Mail } from "lucide-react";

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState({ prenom: "", email: "", type: "vitrine", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:contact@marcdev.fr?subject=Nouveau projet - ${form.prenom}&body=${encodeURIComponent(
      `Prénom: ${form.prenom}\nEmail: ${form.email}\nType: ${form.type}\n\nMessage:\n${form.message}`
    )}`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="reveal w-fit mx-auto font-heading font-bold text-3xl sm:text-4xl text-center mb-4 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
          Prêt à lancer votre projet ?
        </h2>
        <div className="reveal w-16 h-1 bg-gradient-to-r from-white to-primary mx-auto mb-10 rounded-full" />
        <p className="reveal font-body text-muted-foreground text-center mb-10">
          Discutons de votre projet et trouvons la meilleure solution pour vous.
        </p>

        <div className="reveal flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <a
            href="https://wa.me/33600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-foreground/20 text-foreground px-6 py-3 rounded-md font-semibold text-sm flex items-center justify-center gap-2 hover:border-primary/50 transition-colors cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Discuter sur WhatsApp
          </a>
          <a
            href="mailto:contact@marcdev.fr"
            className="border border-foreground/20 text-foreground px-6 py-3 rounded-md font-semibold text-sm flex items-center justify-center gap-2 hover:border-primary/50 transition-colors cursor-pointer"
          >
            <Mail className="w-[18px] h-[18px]" />
            Envoyer un email
          </a>
        </div>

        <form onSubmit={handleSubmit} className="reveal space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Prénom"
              required
              maxLength={100}
              value={form.prenom}
              onChange={(e) => setForm({ ...form, prenom: e.target.value })}
              className="bg-transparent border-b border-foreground/20 focus:border-primary py-3 text-sm font-body text-foreground placeholder:text-muted-foreground outline-none transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              required
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-transparent border-b border-foreground/20 focus:border-primary py-3 text-sm font-body text-foreground placeholder:text-muted-foreground outline-none transition-colors"
            />
          </div>
          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            className="w-full bg-transparent border-b border-foreground/20 focus:border-primary py-3 text-sm font-body text-foreground outline-none transition-colors cursor-pointer"
          >
            <option value="vitrine" className="bg-background">Site vitrine</option>
            <option value="boutique" className="bg-background">Boutique en ligne</option>
            <option value="autre" className="bg-background">Autre</option>
          </select>
          <textarea
            placeholder="Votre message"
            required
            maxLength={1000}
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-transparent border-b border-foreground/20 focus:border-primary py-3 text-sm font-body text-foreground placeholder:text-muted-foreground outline-none transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3.5 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity cursor-pointer"
          >
            Envoyer ma demande
          </button>
        </form>
      </div>
    </section>
  );
}
