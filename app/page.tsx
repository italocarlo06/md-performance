import Image from "next/image";
import Header from "@/components/Header";
import Plans from "@/components/Plans";
import MotionVideo from "@/components/MotionVideo";
import {
  Activity, ArrowRight, ArrowUp, Calendar, ClipboardCheck, Clock, Dumbbell,
  ExternalLink, Flame, Heart, Instagram, MapPin, MessageCircle, Phone, Plus, QuoteMark,
  RotateCcw, Users, Youtube,
} from "@/components/icons";
import { faq, navLinks, site, team, testimonials, whatsappLink } from "@/lib/site";

const features = [
  { icon: Activity, title: "Avaliação física", text: "Começamos entendendo seu corpo, sua rotina e seus objetivos." },
  { icon: ClipboardCheck, title: "Treino individualizado", text: "Nada de ficha pronta: cada exercício tem um porquê." },
  { icon: Users, title: "Acompanhamento de perto", text: "Correção de postura e ajuste de carga em cada sessão." },
  { icon: Calendar, title: "Horários flexíveis", text: "Planos de 2, 3 ou 4 treinos por semana, no horário que funciona para você." },
];

const steps = [
  { title: "Aula experimental", text: "Você conhece o espaço, a equipe e o método, sem compromisso." },
  { title: "Avaliação e plano", text: "Fazemos a avaliação física e montamos um plano para o seu objetivo e o seu nível." },
  { title: "Treino com acompanhamento", text: "Sessões guiadas, reavaliações periódicas e ajustes conforme você evolui." },
];

const audiences = [
  { icon: ArrowUp, title: "Iniciantes", text: "Aprender a treinar com técnica desde o primeiro dia." },
  { icon: RotateCcw, title: "Retomada", text: "Voltar aos treinos no ritmo certo, sem se machucar." },
  { icon: Dumbbell, title: "Força e hipertrofia", text: "Progressão de carga planejada para ganhar massa e força." },
  { icon: Flame, title: "Emagrecimento", text: "Treino e rotina pensados para perder gordura com saúde." },
  { icon: Heart, title: "Saúde e longevidade", text: "Mobilidade, equilíbrio e disposição em qualquer idade." },
  { icon: Users, title: "Personal compartilhado", text: "Treine em pequeno grupo, com um profissional acompanhando cada movimento." },
];

const words = [
  { text: "Força", style: "outline" },
  { text: "Constância", style: "accent" },
  { text: "Disciplina", style: "outline" },
  { text: "Saúde", style: "solid" },
  { text: "Disposição", style: "outline" },
] as const;

const ctaWhatsapp = whatsappLink(site.whatsapp.message);
const fullAddress = `${site.address.street} · ${site.address.district} · ${site.address.city}/${site.address.state}`;

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section id="inicio" className="hero">
        <div className="hero__media">
          <Image
            src="/images/hero.webp"
            alt="Mulher treinando com halter numa academia moderna, iluminada por luz lateral âmbar"
            fill
            priority
            sizes="100vw"
            className="hero__img fx-kenburns"
          />
          <div className="hero__shade" aria-hidden="true" />
        </div>

        <Header />

        <div className="hero__body" id="conteudo">
          <div className="hero__content">
            <span className="eyebrow hero__eyebrow fx-up">Academia · Acompanhamento personalizado</span>
            <h1 className="fx-up fx-d1">A academia onde você nunca treina sozinho.</h1>
            <p className="hero__text fx-up fx-d2">
              Personal compartilhado em pequenos grupos, com treino feito para o seu nível e um profissional
              corrigindo cada movimento. Para quem está começando, voltando a treinar ou quer ir além.
            </p>
            <div className="hero__actions fx-up fx-d3">
              <a href={ctaWhatsapp} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                Agendar aula experimental <ArrowRight size={20} />
              </a>
              <a href="#planos" className="btn">Ver planos</a>
            </div>
            <div className="hero__meta fx-up fx-d4">
              <span>Planos 2x, 3x ou 4x por semana</span>
              <span>Trimestral, semestral ou anual</span>
              <span>{site.city}</span>
            </div>
          </div>
        </div>
      </section>

      <main>
        {/* ============ DIFERENCIAIS ============ */}
        <section className="features" aria-label="Diferenciais">
          <div className="container features__grid">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="feature fx-reveal">
                <Icon size={28} />
                <h3 className="h3">{title}</h3>
                <p className="text-muted">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============ COMO FUNCIONA ============ */}
        <section id="como-funciona" className="section">
          <div className="container stack-56">
            <div className="section-head">
              <span className="eyebrow">Como funciona</span>
              <h2 className="h2 fx-reveal">Três passos para sair do zero e criar constância.</h2>
            </div>
            <div className="grid grid--280">
              {steps.map((s, i) => (
                <div key={s.title} className="card card--outline step fx-reveal">
                  <span className="step__num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ EM MOVIMENTO ============ */}
        <section id="em-movimento" className="motion" aria-label="Treino em movimento">
          <MotionVideo />
          <div className="motion__shade" aria-hidden="true" />
          <div className="motion__body">
            <div className="motion__content">
              <span className="eyebrow">Em movimento</span>
              <h2 className="h2 fx-reveal">Técnica, ritmo e intensidade na medida certa.</h2>
              <p>Cada repetição com orientação: postura, respiração e carga ajustadas ao seu momento.</p>
              <a href={ctaWhatsapp} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                Treinar com a gente <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {[0, 1].map((g) => (
              <div key={g} className="marquee__group">
                {words.map((w) => (
                  <span key={w.text} style={{ display: "contents" }}>
                    <span
                      className={w.style === "outline" ? "outline-text" : undefined}
                      style={w.style === "accent" ? { color: "var(--accent)" } : undefined}
                    >
                      {w.text}
                    </span>
                    <span className="marquee__dot" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ============ EQUIPE ============ */}
        <section id="equipe" className="section--alt">
          <div className="container stack-56">
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 24 }}>
              <div className="section-head">
                <span className="eyebrow">Nossa equipe</span>
                <h2 className="h2 fx-reveal">Profissionais que treinam com você, não só para você.</h2>
              </div>
              <p className="lead" style={{ maxWidth: 380 }}>
                Educadores físicos registrados no CREF, com formação contínua e foco em resultado com segurança.
              </p>
            </div>
            <div className="grid grid--260">
              {team.map((p) => (
                <article key={p.name} className="card team-card fx-reveal">
                  <div className="team-card__photo">
                    <Image src={p.photo} alt={p.alt} fill sizes="(max-width: 720px) 100vw, 400px" />
                  </div>
                  <div className="team-card__body">
                    <h3 className="team-card__name">{p.name}</h3>
                    <span className="team-card__role">{p.role} · CREF {p.cref}</span>
                    <p className="text-muted">{p.bio}</p>
                    <ul className="chips" aria-label="Especialidades">
                      {p.specialties.map((s, i) => (
                        <li key={`${s}-${i}`} className="chip">{s}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PARA QUEM É ============ */}
        <section id="servicos" className="section">
          <div className="container stack-56">
            <div className="section-head">
              <span className="eyebrow">Para quem é</span>
              <h2 className="h2 fx-reveal">Um objetivo diferente para cada pessoa.</h2>
            </div>
            <div className="grid grid--250">
              {audiences.map(({ icon: Icon, title, text }) => (
                <div key={title} className="card audience fx-reveal">
                  <span className="audience__icon"><Icon /></span>
                  <div>
                    <h3>{title}</h3>
                    <p className="text-muted">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PLANOS ============ */}
        <Plans />

        {/* ============ DEPOIMENTOS ============ */}
        <section id="depoimentos" className="section">
          <div className="container stack-56">
            <div className="section-head">
              <span className="eyebrow">Depoimentos</span>
              <h2 className="h2 fx-reveal">Quem treina com a gente conta.</h2>
            </div>
            <div className="grid grid--280">
              {testimonials.map((t, i) => (
                <figure key={i} className="card quote fx-reveal">
                  <QuoteMark />
                  <blockquote>{t.quote}</blockquote>
                  <figcaption>
                    <span className="avatar" aria-hidden="true">{t.initial}</span>
                    <span>
                      <strong style={{ display: "block", fontSize: 16, lineHeight: "24px" }}>{t.name}</strong>
                      <span style={{ fontSize: 13, lineHeight: "18px", color: "var(--ink-muted)" }}>{t.detail}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ============ LOCALIZAÇÃO ============ */}
        <section id="localizacao" className="section--alt">
          <div className="container location">
            <div className="location__info">
              <div className="section-head">
                <span className="eyebrow">Localização</span>
                <h2 className="h2 fx-reveal">Venha conhecer o nosso espaço.</h2>
              </div>
              <div className="info-list">
                <div className="info-item">
                  <MapPin />
                  <div>
                    <strong>Endereço</strong>
                    <span>
                      {site.address.street}
                      <br />
                      {site.address.district} · {site.address.city}/{site.address.state} · CEP {site.address.zip}
                    </span>
                  </div>
                </div>
                <div className="info-item">
                  <Clock />
                  <div>
                    <strong>Horários</strong>
                    <span>
                      {site.hours.map((h) => (
                        <span key={h} style={{ display: "block" }}>{h}</span>
                      ))}
                    </span>
                  </div>
                </div>
                <div className="info-item">
                  <Phone />
                  <div>
                    <strong>WhatsApp</strong>
                    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">{site.whatsapp.display}</a>
                  </div>
                </div>
              </div>
              <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" className="btn" style={{ alignSelf: "flex-start" }}>
                Abrir no Google Maps <ExternalLink size={20} />
              </a>
            </div>
            <div className="location__map">
              <iframe
                src={site.mapsEmbed}
                title="Mapa com a localização da MD Performance"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section id="duvidas" className="section">
          <div className="container faq">
            <div className="faq__head section-head">
              <span className="eyebrow">Dúvidas frequentes</span>
              <h2 className="h2 fx-reveal">Antes de começar.</h2>
              <p className="lead">Não achou sua resposta? Chame a gente no WhatsApp.</p>
            </div>
            <div className="faq__list">
              {faq.map((item) => (
                <details key={item.q}>
                  <summary>
                    {item.q}
                    <Plus size={20} />
                  </summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CTA FINAL ============ */}
        <section id="contato" className="cta">
          <div className="container cta__box">
            <Image src="/images/hero.webp" alt="" fill sizes="(max-width: 1200px) 100vw, 1200px" className="cta__img" />
            <div className="cta__shade" aria-hidden="true" />
            <div className="cta__content">
              <h2 className="h2">O melhor dia para começar é esta semana.</h2>
              <p>Agende sua aula experimental e conheça a MD Performance de perto.</p>
              <a href={ctaWhatsapp} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                <MessageCircle size={20} /> Agendar pelo WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ============ RODAPÉ ============ */}
      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__brand">
              <Image src="/images/logo-md.png" alt="MD Performance" width={384} height={258} />
              <p className="text-muted" style={{ fontSize: 14, maxWidth: 260 }}>
                Academia com acompanhamento personalizado e planos de personal compartilhado.
              </p>
            </div>
            <nav className="footer__col" aria-label="Rodapé">
              <span className="footer__title">Navegação</span>
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="foot-link">{l.label}</a>
              ))}
              <a href="#duvidas" className="foot-link">Dúvidas</a>
            </nav>
            <div className="footer__col">
              <span className="footer__title">Contato</span>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="foot-link">{site.whatsapp.display}</a>
              <span className="foot-link">{site.email}</span>
              <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" className="foot-link">
                {fullAddress} · {site.address.zip}
              </a>
            </div>
            <div className="footer__col">
              <span className="footer__title">Redes</span>
              <div className="socials">
                <a href={site.instagram} aria-label="Instagram da MD Performance"><Instagram size={20} /></a>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da MD Performance"><MessageCircle size={20} /></a>
                <a href={site.youtube} aria-label="YouTube da MD Performance"><Youtube size={20} /></a>
              </div>
            </div>
          </div>
          <div className="footer__legal">
            <span>© {new Date().getFullYear()} MD Performance. Todos os direitos reservados.</span>
            <span>
              CNPJ {site.legal.cnpj} · Responsável técnico: {site.legal.technicalLead} · CREF {site.legal.cref}
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
