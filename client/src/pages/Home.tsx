import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Coffee,
  Croissant,
  HeartHandshake,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Phone,
  Sparkles,
  Star,
  X,
} from "lucide-react";

const HERO_IMAGE = "/manus-storage/aka-hero_8a0b62c5.jpg";
const TABLE_IMAGE = "/manus-storage/aka-table_db6538b4.jpg";
const PHONE = "642 552 147";
const PHONE_LINK = "tel:+34642552147";
const WHATSAPP_LINK =
  "https://wa.me/34642552147?text=Hola%20AKA%20Cafeter%C3%ADa%2C%20quer%C3%ADa%20hacer%20una%20consulta.";
const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=C%2F%20d%27Isaac%20Peral%2C%201%2C%2046024%20Val%C3%A8ncia";

const offerItems = [
  {
    icon: Coffee,
    number: "01",
    title: "Cafés y bebidas",
    copy: "Tu café favorito, preparado para saborear sin prisa.",
  },
  {
    icon: Croissant,
    number: "02",
    title: "Desayunos",
    copy: "Una forma sencilla y deliciosa de empezar la mañana.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Almuerzos",
    copy: "La pausa que recarga energía, con sabor y cercanía.",
  },
];

const reasons = [
  {
    icon: HeartHandshake,
    title: "Trato cercano",
    copy: "Un ambiente pensado para que te sientas como en casa.",
  },
  {
    icon: Coffee,
    title: "20 años",
    copy: "Dos décadas dedicadas a la hostelería y a tu día a día.",
  },
  {
    icon: Navigation,
    title: "Muy cerca",
    copy: "Estamos en C/ d'Isaac Peral, 1, Valencia.",
  },
];

function SectionEyebrow({ children }: { children: string }) {
  return (
    <p className="mb-4 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-terracotta">
      <span className="h-px w-8 bg-terracotta" aria-hidden="true" />
      {children}
    </p>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-cream text-espresso">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-espresso/90 px-4 py-3 text-white shadow-[0_12px_40px_rgba(44,31,24,0.18)] backdrop-blur-md sm:px-6">
          <a href="#inicio" onClick={closeMenu} className="group flex items-center gap-3" aria-label="AKA Cafetería, volver al inicio">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-terracotta text-cream transition-transform duration-200 group-hover:rotate-[-8deg]">
              <Coffee size={17} strokeWidth={2.2} />
            </span>
            <span className="font-serif text-xl leading-none tracking-[-0.03em]">AKA</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-cream/75 md:flex" aria-label="Navegación principal">
            <a className="transition-colors hover:text-white" href="#historia">Nuestra historia</a>
            <a className="transition-colors hover:text-white" href="#oferta">Lo que hacemos</a>
            <a className="transition-colors hover:text-white" href="#contacto">Dónde estamos</a>
          </nav>

          <a className="hidden items-center gap-2 rounded-full bg-terracotta px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-cream transition hover:bg-terracotta-light md:flex" href={PHONE_LINK}>
            <Phone size={14} /> Llamar ahora
          </a>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {menuOpen ? <X size={18} /> : <Menu size={19} />}
          </button>
        </div>

        {menuOpen && (
          <nav id="mobile-navigation" className="mx-auto mt-2 max-w-7xl rounded-3xl bg-espresso p-5 text-cream shadow-xl md:hidden" aria-label="Navegación móvil">
            <div className="flex flex-col gap-4 text-sm">
              <a href="#historia" onClick={closeMenu}>Nuestra historia</a>
              <a href="#oferta" onClick={closeMenu}>Lo que hacemos</a>
              <a href="#contacto" onClick={closeMenu}>Dónde estamos</a>
              <a href={PHONE_LINK} onClick={closeMenu} className="mt-2 flex items-center justify-center gap-2 rounded-full bg-terracotta px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em]">Llamar ahora <Phone size={14} /></a>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="relative isolate min-h-[760px] overflow-hidden bg-espresso text-cream sm:min-h-[820px]">
          <img src={HERO_IMAGE} alt="Café servido en un ambiente acogedor" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-60" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(44,31,24,0.96)_0%,rgba(44,31,24,0.78)_42%,rgba(44,31,24,0.28)_100%)]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_30%,rgba(202,111,75,0.25),transparent_32%)]" />

          <div className="container flex min-h-[760px] items-end pb-20 pt-36 sm:min-h-[820px] sm:pb-28">
            <div className="max-w-3xl">
              <p className="animate-rise mb-6 flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-terracotta-light">
                <span className="h-px w-10 bg-terracotta-light" /> Cafetería · Valencia
              </p>
              <h1 className="animate-rise max-w-3xl font-serif text-6xl leading-[0.92] tracking-[-0.06em] text-cream [animation-delay:80ms] sm:text-8xl lg:text-[7.8rem]">
                Tu momento de <em className="font-serif text-terracotta-light">café</em> empieza aquí.
              </h1>
              <p className="animate-rise mt-7 max-w-xl text-base leading-7 text-cream/72 [animation-delay:160ms] sm:text-lg sm:leading-8">
                Un lugar cercano para empezar el día, disfrutar de un buen café y compartir un buen rato. Ven a conocernos en Valencia.
              </p>
              <div className="animate-rise mt-9 flex flex-col gap-3 [animation-delay:240ms] sm:flex-row sm:items-center">
                <a href={MAPS_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-3.5 text-sm font-semibold text-cream transition hover:-translate-y-0.5 hover:bg-terracotta-light">
                  <MapPin size={16} /> Cómo llegar <ArrowRight size={15} />
                </a>
                <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 px-6 py-3.5 text-sm font-semibold text-cream transition hover:-translate-y-0.5 hover:border-cream/60 hover:bg-cream/10">
                  <Phone size={16} /> {PHONE}
                </a>
              </div>
              <div className="mt-20 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-cream/50 sm:mt-28">
                <span className="grid h-8 w-8 place-items-center rounded-full border border-cream/20"><ArrowDown size={14} /></span>
                Descubre AKA
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 hidden h-36 w-1/3 rounded-tl-[100%] bg-cream/10 lg:block" />
        </section>

        <section id="historia" className="section-pad bg-cream">
          <div className="container grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div className="relative mx-auto w-full max-w-md lg:mx-0">
              <div className="absolute -left-5 -top-5 h-28 w-28 rounded-full border border-terracotta/30 sm:-left-8 sm:-top-8 sm:h-40 sm:w-40" />
              <div className="relative overflow-hidden rounded-[2rem] rounded-bl-[7rem] bg-terracotta/20">
                <img src={TABLE_IMAGE} alt="Desayuno servido en una mesa de madera" className="aspect-[4/5] w-full object-cover mix-blend-multiply transition duration-700 hover:scale-105" />
              </div>
              <div className="absolute -bottom-7 -right-4 rounded-2xl bg-espresso px-5 py-4 text-cream shadow-xl sm:-right-10">
                <p className="font-serif text-4xl leading-none text-terracotta-light">20</p>
                <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-cream/60">años contigo</p>
              </div>
            </div>

            <div className="max-w-xl">
              <SectionEyebrow>Nuestra historia</SectionEyebrow>
              <h2 className="font-serif text-5xl leading-[0.98] tracking-[-0.05em] sm:text-6xl">Un buen café sabe mejor cuando te sientes <em className="text-terracotta">en casa.</em></h2>
              <p className="mt-7 text-base leading-8 text-espresso/65 sm:text-lg">
                En AKA Cafetería llevamos dos décadas dedicándonos a la hostelería y ofreciendo un trato cercano y familiar. Nuestro objetivo es sencillo: que cada persona que entre por la puerta se sienta cómoda, bien atendida y con ganas de volver.
              </p>
              <div className="mt-8 flex items-center gap-4 text-sm font-semibold text-espresso">
                <span className="h-px w-12 bg-terracotta" /> Una pausa que se disfruta
              </div>
            </div>
          </div>
        </section>

        <section id="oferta" className="bg-sand section-pad">
          <div className="container">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <SectionEyebrow>Para empezar bien el día</SectionEyebrow>
                <h2 className="max-w-2xl font-serif text-5xl leading-[0.98] tracking-[-0.05em] sm:text-6xl">Lo sencillo, cuando está bien hecho, <em className="text-terracotta">se nota.</em></h2>
              </div>
              <p className="max-w-xs text-sm leading-6 text-espresso/60">Café, desayuno, almuerzo y algo rico para acompañar. Todo lo que necesitas para disfrutar tu momento.</p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {offerItems.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.number} className="group rounded-[1.6rem] border border-espresso/10 bg-cream/70 p-7 transition duration-300 hover:-translate-y-1 hover:bg-espresso hover:text-cream hover:shadow-[0_20px_50px_rgba(44,31,24,0.14)] sm:p-9">
                    <div className="flex items-start justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-full bg-terracotta/15 text-terracotta transition group-hover:bg-terracotta group-hover:text-cream"><Icon size={21} strokeWidth={1.8} /></span>
                      <span className="font-serif text-4xl text-espresso/20 transition group-hover:text-cream/20">{item.number}</span>
                    </div>
                    <h3 className="mt-20 font-serif text-3xl tracking-[-0.04em]">{item.title}</h3>
                    <p className="mt-3 max-w-xs text-sm leading-6 text-espresso/60 transition group-hover:text-cream/65">{item.copy}</p>
                    <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-terracotta transition group-hover:text-terracotta-light">Saber más <ArrowRight size={14} /></div>
                  </article>
                );
              })}
            </div>
            <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-espresso/10 bg-cream/50 p-6 sm:flex-row sm:items-center sm:px-8">
              <p className="font-serif text-xl">¿Quieres conocer nuestra carta?</p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-espresso px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-cream transition hover:bg-terracotta"><MessageCircle size={15} /> Preguntar por WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-espresso py-24 text-cream sm:py-32">
          <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full border border-terracotta/30" />
          <div className="absolute -right-10 -top-16 h-52 w-52 rounded-full border border-terracotta/20" />
          <div className="container relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
            <div>
              <SectionEyebrow>Lo dicen nuestros clientes</SectionEyebrow>
              <h2 className="max-w-lg font-serif text-5xl leading-[0.98] tracking-[-0.05em] sm:text-6xl">La mejor parte de AKA es <em className="text-terracotta-light">volver.</em></h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-cream/60">Estamos preparando este espacio para compartir las reseñas reales de quienes ya han pasado por aquí.</p>
              <div className="mt-8 flex items-center gap-2 text-terracotta-light" aria-label="Cinco estrellas pendientes de reseñas reales">
                {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={17} fill="currentColor" strokeWidth={1.5} />)}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.6rem] border border-cream/15 bg-cream/[0.06] p-7 sm:translate-y-8">
                <div className="mb-12 text-5xl font-serif text-terracotta-light">“</div>
                <p className="font-serif text-2xl leading-tight text-cream/80">Tu reseña favorita puede aparecer aquí.</p>
                <p className="mt-5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cream/40">Reseña real pendiente</p>
              </div>
              <div className="rounded-[1.6rem] border border-cream/15 bg-terracotta p-7 text-cream">
                <div className="mb-12 text-5xl font-serif text-cream/60">“</div>
                <p className="font-serif text-2xl leading-tight">¿Ya nos conoces? Nos encantará leerte.</p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-cream transition hover:gap-3">Escribirnos <ArrowRight size={14} /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-cream">
          <div className="container">
            <div className="grid gap-4 border-y border-espresso/10 py-12 sm:grid-cols-3 sm:gap-8">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div key={reason.title} className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-terracotta/12 text-terracotta"><Icon size={19} strokeWidth={1.8} /></span>
                    <div><h3 className="font-serif text-2xl tracking-[-0.03em]">{reason.title}</h3><p className="mt-1 max-w-xs text-sm leading-6 text-espresso/55">{reason.copy}</p></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-terracotta text-cream">
          <div className="container grid gap-12 py-20 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <SectionEyebrow>Ven a vernos</SectionEyebrow>
              <h2 className="font-serif text-6xl leading-[0.92] tracking-[-0.06em] sm:text-7xl">¿Nos <em className="text-espresso">vemos?</em></h2>
              <p className="mt-6 max-w-sm text-base leading-7 text-cream/75">Tu próximo café puede ser en AKA. Acércate, ponte cómodo y descubre por qué nuestros clientes vuelven.</p>
              <div className="mt-9 space-y-4 text-sm">
                <a className="flex items-start gap-3 transition hover:text-espresso" href={MAPS_LINK} target="_blank" rel="noreferrer"><MapPin className="mt-0.5 shrink-0" size={18} /><span>C/ d'Isaac Peral, 1<br />46024 València</span></a>
                <a className="flex items-center gap-3 transition hover:text-espresso" href={PHONE_LINK}><Phone size={18} /> {PHONE}</a>
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={MAPS_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-espresso px-6 py-3.5 text-sm font-semibold text-cream transition hover:-translate-y-0.5 hover:bg-espresso/85"><Navigation size={16} /> Cómo llegar</a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/45 px-6 py-3.5 text-sm font-semibold text-cream transition hover:-translate-y-0.5 hover:border-cream hover:bg-cream/10"><MessageCircle size={16} /> WhatsApp</a>
              </div>
            </div>
            <a href={MAPS_LINK} target="_blank" rel="noreferrer" className="group relative min-h-[300px] overflow-hidden rounded-[2rem] bg-espresso/90 p-8 shadow-[0_24px_60px_rgba(44,31,24,0.2)] sm:min-h-[390px]">
              <div className="absolute inset-0 opacity-35" style={{ backgroundImage: "linear-gradient(rgba(235,225,207,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(235,225,207,0.18) 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
              <div className="absolute left-[42%] top-[30%] h-48 w-48 rounded-full border border-terracotta/45" />
              <div className="absolute left-[42%] top-[30%] h-32 w-32 rounded-full border border-terracotta/35" />
              <div className="absolute left-[42%] top-[30%] grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-terracotta text-cream shadow-lg transition duration-300 group-hover:scale-110"><MapPin size={23} /></div>
              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">
                <div><p className="text-xs uppercase tracking-[0.2em] text-cream/45">Encuéntranos</p><p className="mt-2 font-serif text-2xl">AKA Cafetería</p></div>
                <span className="grid h-11 w-11 place-items-center rounded-full border border-cream/20 transition group-hover:bg-terracotta"><ArrowRight size={17} /></span>
              </div>
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-espresso px-4 py-8 text-cream/55 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 text-xs sm:flex-row sm:items-center">
          <div className="flex items-center gap-3"><span className="grid h-7 w-7 place-items-center rounded-full bg-terracotta text-cream"><Coffee size={14} /></span><span className="font-serif text-lg text-cream">AKA Cafetería</span></div>
          <p>© {new Date().getFullYear()} AKA Cafetería · Valencia</p>
          <a href="#inicio" className="flex items-center gap-2 transition hover:text-cream">Volver arriba <ArrowDown className="rotate-180" size={14} /></a>
        </div>
      </footer>
    </div>
  );
}
