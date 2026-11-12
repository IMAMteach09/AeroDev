import { ArrowUpRight, WhatsApp } from "./Icons"

import { whatsappUrl } from "../constants"

import type { SiteCopy } from "../types"

export default function CtaSection({ copy }: { copy: SiteCopy["cta"] }) {
  return (
    <section className="cta-section">
      <div className="cta-orb" />
      <p className="section-label">{copy.label}</p>
      <h2>
        {copy.headingLineOne}
        <br />
        {copy.headingLineTwo}
      </h2>
      <p>{copy.description}</p>
      <a
        className="whatsapp-button"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
      >
        <WhatsApp className="button-icon" /> {copy.button}{" "}
        <ArrowUpRight className="small-icon" />
      </a>
    </section>
  )
}
