import { ArrowUpRight, Braces, Layers, Spark } from "./Icons"

import { whatsappUrl } from "../constants"

import type { SiteCopy } from "../types"

import type { ReactNode } from "react"

function ServiceCard({
  card,
  icon,
  featured,
}: {
  card: SiteCopy["services"]["cards"][number]
  icon: ReactNode
  featured: boolean
}) {
  return (
    <article
      className={`service-card ${featured ? "service-card-featured" : ""}`}
    >
      <div className="service-topline">
        <span className="service-number">{card.number}</span>
        <span className="service-icon">{icon}</span>
      </div>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="service-link"
      >
        {card.linkLabel} <ArrowUpRight className="small-icon" />
      </a>
    </article>
  )
}

export default function ServicesSection({
  copy,
}: {
  copy: SiteCopy["services"]
}) {
  return (
    <section className="services-section" id="services">
      <div className="section-heading">
        <div>
          <p className="section-label">{copy.label}</p>
          <h2>
            {copy.headingLineOne}
            <br />
            <em>{copy.headingEmphasis}</em>
          </h2>
        </div>
        <p className="section-intro">{copy.intro}</p>
      </div>
      <div className="services-grid">
        {copy.cards.map((card, index) => (
          <ServiceCard
            key={card.title}
            card={card}
            icon={
              index === 0 ? <Spark /> : index === 1 ? <Braces /> : <Layers />
            }
            featured={index === 0}
          />
        ))}
      </div>
    </section>
  )
}
