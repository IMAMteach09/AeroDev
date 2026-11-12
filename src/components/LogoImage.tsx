import logoAssetUrl from "../assets/ad-logo.png?inline"

export default function LogoImage({ alt = "" }: { alt?: string }) {
  return <img className="logo-image" src={logoAssetUrl} alt={alt} />
}

export { logoAssetUrl }
