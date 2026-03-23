// SEO Utilities and Schema Markup Generation
// Update 'https://yourportfoliosite.com' with your actual domain
import profileImg from "../assets/me.png"

const DOMAIN = 'https://www.wisdoms.software';
const AUTHOR_NAME = 'Wisdom Matthew Urangyork';

export interface SEOMetaTags {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

/**
 * Generate person schema for structured data
 */
export const getPersonSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: AUTHOR_NAME,
    description: 'Full Stack Software Engineer specializing in modern web technologies',
    url: DOMAIN,
    email: 'urangyorkwisdom@gmail.com', // Update with your email
    image: `${DOMAIN}/${profileImg}`, // Update with your photo
    sameAs: [
      'https://linkedin.com/in/yourprofile', // Update with your LinkedIn
      'https://github.com/yourprofile', // Update with your GitHub
      'https://twitter.com/yourprofile', // Update with your Twitter if applicable
    ],
    jobTitle: 'Full Stack Software Engineer',
    knowsAbout: [
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'AWS',
      'Docker',
      'PostgreSQL',
      'Full Stack Development',
    ],
  };
};

/**
 * Generate organization schema
 */
export const getOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: `${AUTHOR_NAME}'s Portfolio`,
    url: DOMAIN,
    logo: `${DOMAIN}/brand-logo.png`,
    description: 'Portfolio showcasing full-stack software engineering projects and expertise',
  };
};

/**
 * Generate portfolio/website schema
 */
export const getWebsiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${AUTHOR_NAME}'s Portfolio`,
    url: DOMAIN,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${DOMAIN}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
};

/**
 * Generate project/creative work schema
 */
export const getProjectSchema = (project: {
  title: string;
  description: string;
  image?: string;
  technologies?: string[];
  demo?: string;
  date?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    image: project.image || `${DOMAIN}/og-image.png`,
    author: {
      '@type': 'Person',
      name: AUTHOR_NAME,
    },
    ...(project.demo && { url: project.demo }),
    ...(project.date && { dateCreated: project.date }),
    ...(project.technologies && {
      keywords: project.technologies.join(', '),
    }),
  };
};

/**
 * Generate breadcrumb schema
 */
export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

/**
 * Helper to render structured data in a script tag format
 */
export const renderStructuredData = (schema: any) => {
  return {
    __html: JSON.stringify(schema),
  };
};

/**
 * Merge multiple schemas for composite pages
 */
export const mergeSchemas = (schemas: any[]) => {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };
};

/**
 * Meta tags configuration object helper
 */
export const createMetaTags = (config: {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}): SEOMetaTags => {
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    ogImage: config.image || `${DOMAIN}/og-image.png`,
    canonical: config.url || DOMAIN,
  };
};
