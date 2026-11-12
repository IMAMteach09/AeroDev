import { ArrowUpRight } from "./Icons"

import LogoImage from "./LogoImage"

import { whatsappUrl } from "../constants"

import type { SiteCopy } from "../types"

type Props = {
  copy: SiteCopy["nav"]

  language: "en" | "ar"

  onLanguageChange: () => void
}

export default function Navigation({
  copy,
  language,
  onLanguageChange,
}: Props) {
  return (
    <nav className="nav-shell" aria-label={copy.ariaLabel}>
      <a className="brand" href="#top" aria-label="AeroDev home">
        <span className="brand-mark">
          <LogoImage />
        </span>
        <span>AeroDev</span>
      </a>
      <div className="nav-links">
        <a href="#services">{copy.services}</a>
        <a href="#process">{copy.process}</a>
        <a href="#about">{copy.about}</a>
      </div>
      <button
        type="button"
        className="language-toggle"
        onClick={onLanguageChange}
        aria-label={copy.languageAriaLabel}
      >
        {copy.languageLabel}
      </button>
      <a
        className="nav-cta"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
      >
        {copy.contact} <ArrowUpRight className="small-icon" />
      </a>
    </nav>
  )
}
