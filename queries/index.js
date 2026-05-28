// ─────────────────────────────────────────────────────────
// GROQ Queries — Eri Reyes Portfolio
// ─────────────────────────────────────────────────────────

// Todos los datos del home en UNA sola query
export const HOME_QUERY = `{
  "settings": *[_type == "siteSettings"][0] {
    heroTagline,
    heroPhoto,
    ctaButtonLabel,
    ctaButtonUrl,
    portfolioUrl,
    stats[] { value, label },
    centralPhrase,
    ctaBannerTitle,
    ctaBannerSubtitle,
    ctaBannerButtonLabel,
    ctaBannerButtonUrl,
    ctaBannerBg,
    connectPhoto,
    socialLinks[] { network, url, label },
    contactTitle,
    contactSubtitle,
    bookingButtonLabel,
    bookingButtonUrl,
    email,
    city,
    phone,
    footerTagline
  },

  "services": *[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    linkUrl
  },

  "featuredProjects": *[_type == "project" && featured == true] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    mainImage,
    client,
    location,
    date,
    summary
  },

  "testimonials": *[_type == "testimonial" && featured == true] | order(order asc) {
    _id,
    author,
    role,
    photo,
    text
  },

  "clients": *[_type == "client" && active == true] | order(order asc) {
    _id,
    name,
    logo,
    url
  }
}`;

// Todos los proyectos (página /proyectos)
export const ALL_PROJECTS_QUERY = `*[_type == "project"] | order(featured desc, order asc, date desc) {
  _id,
  title,
  "slug": slug.current,
  mainImage,
  client,
  location,
  date,
  category,
  featured,
  summary,
  tags
}`;

// Un proyecto por slug (página de detalle)
export const PROJECT_BY_SLUG_QUERY = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  mainImage,
  gallery[] {
    asset,
    caption
  },
  client,
  location,
  date,
  category,
  summary,
  description,
  tags
}`;

// Slugs de todos los proyectos (para generateStaticParams)
export const PROJECT_SLUGS_QUERY = `*[_type == "project"] { "slug": slug.current }`;
