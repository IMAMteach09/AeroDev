import { ArrowRight, ArrowUpRight, Braces, Spark, WhatsApp } from "./Icons"

import LogoImage from "./LogoImage"

import { whatsappUrl } from "../constants"

import type { SiteCopy } from "../types"

export default function HeroSection({ copy }: { copy: SiteCopy["hero"] }) {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <div className="eyebrow">
          <span /> {copy.eyebrow}
        </div>
        <h1>
          {copy.headingLineOne}
          <span>{copy.headingLineTwo}</span>
        </h1>
        <p>{copy.description}</p>
        <div className="hero-actions">
          <a
            className="primary-button"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            {copy.primaryButton} <WhatsApp className="button-icon" />
          </a>
          <a className="text-button" href="#services">
            {copy.secondaryButton} <ArrowRight className="button-icon" />
          </a>
        </div>
      </div>
      <div className="hero-visual" aria-label={copy.visualLabel}>
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
            <strong>{copy.workflowTitle}</strong>
            <small>{copy.workflowSubtitle}</small>
          </span>
          <span className="status-dot" />
        </div>
        <div className="floating-card growth-card">
          <span>
            <small>{copy.efficiencyLabel}</small>
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
  )
}
