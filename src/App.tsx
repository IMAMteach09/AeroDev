import { useEffect, useState, type ReactNode } from "react"
import logoAssetUrl from "./assets/ad-logo.png"

const whatsappUrl =
  "https://wa.me/213652580787?text=Hi%20AeroDev%2C%20I%27d%20like%20to%20discuss%20a%20digital%20project."

type IconProps = { className?: string }

function LogoImage({ alt = "" }: { alt?: string }) {
  return (
    <img
      className="logo-image"
      src={logoAssetUrl}
      alt={alt}
    />
  )
}

function ArrowUpRight({ className = "" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 17 17 7M8 7h9v9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArrowRight({ className = "" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h14m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function WhatsApp({ className = "" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20.5 11.75a8.5 8.5 0 0 1-12.6 7.45L3.5 20.5l1.3-4.3a8.5 8.5 0 1 1 15.7-4.45Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.3 7.8c.2-.45.42-.46.7-.47h.6c.18 0 .4.06.5.35l.75 1.82c.08.2.04.38-.1.57l-.58.73c-.14.17-.14.33-.04.52.47.94 1.16 1.73 2.03 2.3.2.14.38.14.54-.04l.76-.9c.18-.2.38-.24.6-.14l1.72.82c.24.12.38.18.4.3.06.23.03 1.18-.42 1.7-.43.5-1.25.9-2.06.84-1.14-.08-2.94-.65-4.5-2.03-1.3-1.16-2.23-2.75-2.48-3.82-.25-1.08.03-2.06.57-2.55Z"
        fill="currentColor"
      />
    </svg>
  )
}

function Spark({ className = "" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2c.4 5.65 3.1 8.35 8 8.8-4.9.45-7.6 3.15-8 8.8-.4-5.65-3.1-8.35-8-8.8C8.9 10.35 11.6 7.65 12 2Z"
        fill="currentColor"
      />
    </svg>
  )
}

function Braces({ className = "" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8.5 4.5H7.4a2 2 0 0 0-2 2v3c0 1.4-.65 2.25-1.9 2.5 1.25.25 1.9 1.1 1.9 2.5v3a2 2 0 0 0 2 2h1.1m7-15h1.1a2 2 0 0 1 2 2v3c0 1.4.65 2.25 1.9 2.5-1.25.25-1.9 1.1-1.9 2.5v3a2 2 0 0 1-2 2h-1.1"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="m10 14 4-4m-4 0h.01M14 14h.01"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Layers({ className = "" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m12 3 9 5-9 5-9-5 9-5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="m4 12 8 4.5 8-4.5M4 16l8 4.5 8-4.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Instagram({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4.5" y="4.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="16.7" cy="7.4" r="0.9" fill="currentColor" />
    </svg>
  )
}

function Facebook({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M13.5 8.5V7.2c0-.9.6-1.7 1.8-1.7h1.8V2.5h-2.3c-2.8 0-4.6 1.8-4.6 4.8v1.2H8v3h2.2v9h3.3v-9h2.7l.4-3h-3.1Z"
        fill="currentColor"
      />
    </svg>
  )
}

function TikTok({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14.1 3.5c.7 1.8 1.9 2.8 3.9 2.9v2.5c-1.5 0-2.7-.5-3.8-1.4v5.7c0 3.3-2.4 5.8-5.7 5.8-2.6 0-4.8-1.8-5.4-4.2-.7-2.9.9-5.8 3.8-6.7.4-.1.9-.2 1.4-.2v2.7c-1.5.1-2.6 1.2-2.6 2.7 0 1.3 1 2.4 2.2 2.7 1.5.4 2.9-.5 3.3-1.9.1-.4.2-.8.2-1.3V3.5h2.7Z"
        fill="currentColor"
      />
    </svg>
  )
}

function Mail({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4.5" y="6" width="15" height="12" rx="2.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="m5.5 7.5 6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  )
}

type Language = "en" | "ar"

const translations = {
  en: {
    nav: {
      services: "Services",
      process: "Process",
      about: "About",
      languageLabel: "العربية",
      languageAriaLabel: "Switch site language to Arabic",
      contact: "Let's talk",
      ariaLabel: "Main navigation",
      whatsappAriaLabel: "Contact AeroDev on WhatsApp",
    },
    hero: {
      eyebrow: "Digital solutions, built for momentum",
      headingLineOne: "We make digital",
      headingLineTwo: "work smarter.",
      description:
        "AI automation, websites, and apps designed to remove friction, unlock growth, and move your business forward.",
      primaryButton: "Start a conversation",
      secondaryButton: "Explore our work",
      visualLabel: "AeroDev creative technology visualization",
      workflowTitle: "AI workflow",
      workflowSubtitle: "Running smoothly",
      efficiencyLabel: "Efficiency gained",
    },
    services: {
      label: "What we do",
      headingLineOne: "One partner.",
      headingEmphasis: "Every digital edge.",
      intro:
        "From your first idea to a system that scales, we bring strategy, design, and engineering together under one roof.",
      cards: [
        {
          number: "01",
          title: "AI Automation",
          description:
            "We turn repetitive work into intelligent, reliable systems so your team can focus on the decisions that matter.",
          linkLabel: "Explore service",
        },
        {
          number: "02",
          title: "Web Development",
          description:
            "Fast, expressive websites that pair a premium user experience with clean, scalable technology.",
          linkLabel: "Explore service",
        },
        {
          number: "03",
          title: "App Development",
          description:
            "Thoughtful web and mobile products built around real users, business value, and long-term growth.",
          linkLabel: "Explore service",
        },
      ],
    },
    process: {
      label: "How we work",
      headingLineOne: "Clarity at every step.",
      headingLineTwo: "Momentum from day one.",
      steps: [
        {
          number: "01",
          title: "Discover",
          description:
            "We uncover your goals, bottlenecks, and biggest opportunities.",
        },
        {
          number: "02",
          title: "Design",
          description:
            "We shape the strategy, experience, and technical blueprint.",
        },
        {
          number: "03",
          title: "Deliver",
          description:
            "We build, test, launch, and stay close as your solution grows.",
        },
      ],
    },
    quote: {
      quote:
        "Technology should feel like a tailwind, not another thing to manage.",
      description:
        "That belief shapes every solution we create: simple to use, powerful underneath, and built to make a measurable difference.",
      signatureTitle: "AeroDev",
      signatureSubtitle: "Your digital growth partner",
    },
    cta: {
      label: "Have a project in mind?",
      headingLineOne: "Let's turn your next idea",
      headingLineTwo: "into real momentum.",
      description:
        "Tell us where you want to go. We'll help you build the smartest way there.",
      button: "Chat with us on WhatsApp",
    },
    footer: {
      lineOne: "AI automation · Web development · App development",
      lineTwo: "© 2025 AeroDev. Built for what's next.",
    },
  },
  ar: {
    nav: {
      services: "الخدمات",
      process: "العملية",
      about: "من نحن",
      languageLabel: "English",
      languageAriaLabel: "تبديل لغة الموقع إلى الإنجليزية",
      contact: "لنبدأ الحديث",
      ariaLabel: "التنقل الرئيسي",
      whatsappAriaLabel: "تواصل مع AeroDev عبر واتساب",
    },
    hero: {
      eyebrow: "حلول رقمية تبني الزخم",
      headingLineOne: "نجعل التحول الرقمي",
      headingLineTwo: "أذكى وأكثر بساطة.",
      description:
        "نقدّم أتمتة بالذكاء الاصطناعي، ومواقع ويب، وتطبيقات تقلل التعقيد، وتفتح فرص النمو، وتدفع عملك إلى الأمام.",
      primaryButton: "ابدأ المحادثة",
      secondaryButton: "استكشف أعمالنا",
      visualLabel: "تصور إبداعي وتقني لـ AeroDev",
      workflowTitle: "تدفق عمل ذكي",
      workflowSubtitle: "يعمل بانسيابية",
      efficiencyLabel: "تحسن الكفاءة",
    },
    services: {
      label: "ما نقدمه",
      headingLineOne: "شريك واحد.",
      headingEmphasis: "وكل ميزة رقمية تحتاجها.",
      intro:
        "من الفكرة الأولى إلى نظام قابل للتوسع، نجمع الاستراتيجية والتصميم والهندسة في مكان واحد.",
      cards: [
        {
          number: "٠١",
          title: "أتمتة بالذكاء الاصطناعي",
          description:
            "نحوّل المهام المتكررة إلى أنظمة ذكية وموثوقة حتى يركز فريقك على القرارات الأهم.",
          linkLabel: "استكشف الخدمة",
        },
        {
          number: "٠٢",
          title: "تطوير المواقع",
          description:
            "مواقع سريعة وواضحة تجمع بين تجربة مستخدم مميزة وتقنية نظيفة قابلة للتوسع.",
          linkLabel: "استكشف الخدمة",
        },
        {
          number: "٠٣",
          title: "تطوير التطبيقات",
          description:
            "منتجات ويب وتطبيقات مدروسة تُبنى حول المستخدمين الحقيقيين وقيمة الأعمال والنمو المستدام.",
          linkLabel: "استكشف الخدمة",
        },
      ],
    },
    process: {
      label: "كيف نعمل",
      headingLineOne: "وضوح في كل خطوة.",
      headingLineTwo: "وزخم من اليوم الأول.",
      steps: [
        {
          number: "٠١",
          title: "اكتشف",
          description:
            "نحدد أهدافك والعقبات وأكبر الفرص المتاحة للنمو.",
        },
        {
          number: "٠٢",
          title: "صمم",
          description:
            "نضع الاستراتيجية وتجربة الاستخدام والخريطة التقنية.",
        },
        {
          number: "٠٣",
          title: "سلّم",
          description:
            "ننفذ ونختبر ونطلق، ثم نبقى قريبين بينما ينمو الحل الخاص بك.",
        },
      ],
    },
    quote: {
      quote:
        "يجب أن تبدو التقنية كدفعة للأمام، لا كشيء إضافي يحتاج إلى إدارة.",
      description:
        "هذا المبدأ يوجه كل حل نصنعه: سهل الاستخدام، قوي من الداخل، ومصمم ليحقق أثرًا ملموسًا.",
      signatureTitle: "AeroDev",
      signatureSubtitle: "شريكك الرقمي للنمو",
    },
    cta: {
      label: "هل لديك مشروع في ذهنك؟",
      headingLineOne: "لنجعل فكرتك التالية",
      headingLineTwo: "تتحول إلى زخم حقيقي.",
      description:
        "أخبرنا إلى أين تريد الوصول، وسنساعدك على بناء الطريق الأذكى للوصول.",
      button: "تحدث معنا عبر واتساب",
    },
    footer: {
      lineOne: "أتمتة بالذكاء الاصطناعي · تطوير الويب · تطوير التطبيقات",
      lineTwo: "© 2025 AeroDev. صُمم لما هو قادم.",
    },
  },
} as const

const socialLinks = {
  facebook: "https://www.facebook.com/share/19wPG27NwD/",
  instagram: "https://www.instagram.com/aerodev_studios?dlrf=aTdueGcwYWc3bXo=",
  tiktok: "https://www.tiktok.com/@aerodev.studios?_r=1&_t=ZS-9BLE9i4kAYI",
  email: "mailto:hello@aerodev.com",
} as const

function ServiceCard({
  number,
  title,
  description,
  icon,
  linkLabel,
  featured = false,
}: {
  number: string
  title: string
  description: string
  icon: ReactNode
  linkLabel: string
  featured?: boolean
}) {
  return (
    <article
      className={`service-card ${featured ? "service-card-featured" : ""}`}
    >
      <div className="service-topline">
        <span className="service-number">{number}</span>
        <span className="service-icon">{icon}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="service-link"
      >
        {linkLabel} <ArrowUpRight className="small-icon" />
      </a>
    </article>
  )
}

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "en"
    }

    const storedLanguage = window.localStorage.getItem("aerodev-language")
    if (storedLanguage === "en" || storedLanguage === "ar") {
      return storedLanguage
    }

    return window.navigator.language.toLowerCase().startsWith("ar")
      ? "ar"
      : "en"
  })

  const direction = language === "ar" ? "rtl" : "ltr"
  const copy = translations[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = direction
    document.body.dir = direction
    document.title = "AeroDev"
    window.localStorage.setItem("aerodev-language", language)
  }, [language, direction])

  useEffect(() => {
    let cancelled = false

    if (cancelled) return

    let iconLink = document.querySelector(
      'link[rel="icon"]',
    ) as HTMLLinkElement | null

    if (!iconLink) {
      iconLink = document.createElement("link")
      iconLink.rel = "icon"
      document.head.append(iconLink)
    }

    iconLink.href = logoAssetUrl

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <main className="app-shell" lang={language} dir={direction}>
      <nav className="nav-shell" aria-label={copy.nav.ariaLabel}>
        <a className="brand" href="#top" aria-label="AeroDev home">
          <span className="brand-mark">
            <LogoImage />
          </span>
          <span>AeroDev</span>
        </a>
        <div className="nav-links">
          <a href="#services">{copy.nav.services}</a>
          <a href="#process">{copy.nav.process}</a>
          <a href="#about">{copy.nav.about}</a>
        </div>
        <button
          type="button"
          className="language-toggle"
          onClick={() => setLanguage(language === "en" ? "ar" : "en")}
          aria-label={copy.nav.languageAriaLabel}
        >
          {copy.nav.languageLabel}
        </button>
        <a
          className="nav-cta"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          {copy.nav.contact} <ArrowUpRight className="small-icon" />
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span /> {copy.hero.eyebrow}
          </div>
          <h1>
            {copy.hero.headingLineOne}
            <span>{copy.hero.headingLineTwo}</span>
          </h1>
          <p>
            {copy.hero.description}
          </p>
          <div className="hero-actions">
            <a
              className="primary-button"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              {copy.hero.primaryButton} <WhatsApp className="button-icon" />
            </a>
            <a className="text-button" href="#services">
              {copy.hero.secondaryButton} <ArrowRight className="button-icon" />
            </a>
          </div>
        </div>

        <div
          className="hero-visual"
          aria-label={copy.hero.visualLabel}
        >
          <div className="orbital orbital-one" />
          <div className="orbital orbital-two" />
          <div className="grid-plane" />
          <div className="logo-stage">
            <LogoImage alt="AeroDev logo" />
          </div>
          <div className="floating-card automation-card">
            <span className="float-icon">
              <Spark />
            </span>
            <span>
              <strong>{copy.hero.workflowTitle}</strong>
              <small>{copy.hero.workflowSubtitle}</small>
            </span>
            <span className="status-dot" />
          </div>
          <div className="floating-card growth-card">
            <span>
              <small>{copy.hero.efficiencyLabel}</small>
              <strong>+62%</strong>
            </span>
            <svg viewBox="0 0 86 34" aria-hidden="true">
              <path
                d="M2 29C15 28 18 19 28 22s15 6 23-4 16-12 33-16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="mini-badge badge-code">
            <Braces />
          </div>
          <div className="mini-badge badge-spark">
            <Spark />
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-heading">
          <div>
            <p className="section-label">{copy.services.label}</p>
            <h2>
              {copy.services.headingLineOne}
              <br />
              <em>{copy.services.headingEmphasis}</em>
            </h2>
          </div>
          <p className="section-intro">
            {copy.services.intro}
          </p>
        </div>
        <div className="services-grid">
          {copy.services.cards.map((card, index) => (
            <ServiceCard
              key={card.title}
              number={card.number}
              title={card.title}
              description={card.description}
              linkLabel={card.linkLabel}
              icon={index === 0 ? <Spark /> : index === 1 ? <Braces /> : <Layers />}
              featured={index === 0}
            />
          ))}
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="process-panel">
          <p className="section-label">{copy.process.label}</p>
          <h2>
            {copy.process.headingLineOne}
            <br />
            {copy.process.headingLineTwo}
          </h2>
          <div className="process-list">
            {copy.process.steps.map((step) => (
              <div className="process-item" key={step.title}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="quote-panel" id="about">
          <div className="quote-mark">“</div>
          <blockquote>{copy.quote.quote}</blockquote>
          <p>{copy.quote.description}</p>
          <div className="signature">
            <span className="signature-mark">
              <LogoImage />
            </span>
            <span>
              <strong>{copy.quote.signatureTitle}</strong>
              <small>{copy.quote.signatureSubtitle}</small>
            </span>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-orb" />
        <p className="section-label">{copy.cta.label}</p>
        <h2>
          {copy.cta.headingLineOne}
          <br />
          {copy.cta.headingLineTwo}
        </h2>
        <p>
          {copy.cta.description}
        </p>
        <a
          className="whatsapp-button"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          <WhatsApp className="button-icon" /> {copy.cta.button}{" "}
          <ArrowUpRight className="small-icon" />
        </a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">
            <LogoImage />
          </span>
          <span>AeroDev</span>
        </a>
        <div className="footer-icons" aria-label="Social and contact links">
          <a className="footer-icon-link" href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram className="footer-icon" />
          </a>
          <a className="footer-icon-link" href={socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
            <Facebook className="footer-icon" />
          </a>
          <a className="footer-icon-link" href={socialLinks.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok">
            <TikTok className="footer-icon" />
          </a>
          <a className="footer-icon-link" href={socialLinks.email} aria-label="Email">
            <Mail className="footer-icon" />
          </a>
        </div>
        <p className="footer-services">{copy.footer.lineOne}</p>
        <p className="footer-copy">{copy.footer.lineTwo}</p>
      </footer>

      <a
        className="floating-whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={copy.nav.whatsappAriaLabel}
      >
        <WhatsApp />
      </a>
    </main>
  )
}
