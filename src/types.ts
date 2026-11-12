import type { ReactNode } from "react"

export type Language = "en" | "ar"

export type SiteCopy = {
  nav: {
    services: string

    process: string

    about: string

    languageLabel: string

    languageAriaLabel: string

    contact: string

    ariaLabel: string

    whatsappAriaLabel: string
  }

  hero: {
    eyebrow: string

    headingLineOne: string

    headingLineTwo: string

    description: string

    primaryButton: string

    secondaryButton: string

    visualLabel: string

    workflowTitle: string

    workflowSubtitle: string

    efficiencyLabel: string
  }

  services: {
    label: string

    headingLineOne: string

    headingEmphasis: string

    intro: string

    cards: Array<{
      number: string

      title: string

      description: string

      linkLabel: string
    }>
  }

  process: {
    label: string

    headingLineOne: string

    headingLineTwo: string

    steps: Array<{
      number: string

      title: string

      description: string
    }>
  }

  quote: {
    quote: string

    description: string

    signatureTitle: string

    signatureSubtitle: string
  }

  cta: {
    label: string

    headingLineOne: string

    headingLineTwo: string

    description: string

    button: string
  }

  footer: {
    lineOne: string

    lineTwo: string
  }
}

export type ServiceCardData = SiteCopy["services"]["cards"][number] & {
  icon: ReactNode
}
