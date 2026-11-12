import { Facebook, Instagram, Mail, TikTok, WhatsApp } from "./Icons"

import LogoImage from "./LogoImage"

import { socialLinks, whatsappUrl } from "../constants"

import type { SiteCopy } from "../types"

export function Footer({ copy }: { copy: SiteCopy["footer"] }) {
  return (
    <footer>
      <a className="brand footer-brand" href="#top">
        <span className="brand-mark">
          <LogoImage />
        </span>
        <span>AeroDev</span>
      </a>
      <div className="footer-icons" aria-label="Social and contact links">
        <a
          className="footer-icon-link"
          href={socialLinks.instagram}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <Instagram className="footer-icon" />
        </a>
        <a
          className="footer-icon-link"
          href={socialLinks.facebook}
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          <Facebook className="footer-icon" />
        </a>
        <a
          className="footer-icon-link"
          href={socialLinks.tiktok}
          target="_blank"
          rel="noreferrer"
          aria-label="TikTok"
        >
          <TikTok className="footer-icon" />
        </a>
        <a
          className="footer-icon-link"
          href={socialLinks.email}
          aria-label="Email"
        >
          <Mail className="footer-icon" />
        </a>
      </div>
      <p className="footer-services">{copy.lineOne}</p>
      <p className="footer-copy">{copy.lineTwo}</p>
    </footer>
  )
}

export function FloatingWhatsApp({ ariaLabel }: { ariaLabel: string }) {
  return (
    <a
      className="floating-whatsapp"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
    >
      <WhatsApp />
    </a>
  )
}
