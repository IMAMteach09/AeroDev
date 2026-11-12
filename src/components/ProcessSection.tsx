import LogoImage from "./LogoImage"

import type { SiteCopy } from "../types"

export default function ProcessSection({
  copy,
}: {
  copy: SiteCopy["process"] & { quote: SiteCopy["quote"] }
}) {
  return (
    <section className="process-section" id="process">
      <div className="process-panel">
        <p className="section-label">{copy.label}</p>
        <h2>
          {copy.headingLineOne}
          <br />
          {copy.headingLineTwo}
        </h2>
        <div className="process-list">
          {copy.steps.map((step) => (
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
  )
}
