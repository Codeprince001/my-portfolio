// Sitemap Generator Utility
// Use this if you want to dynamically generate sitemap.xml with your project data
// This is optional - the static sitemap.xml will work fine

export interface SitemapEntry {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

/**
 * Generate sitemap XML string from entries
 * Can be used to create a dynamic sitemap endpoint
 */
export const generateSitemapXML = (entries: SitemapEntry[]): string => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${entry.loc}</loc>
    ${entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ''}
    ${entry.changefreq ? `<changefreq>${entry.changefreq}</changefreq>` : ''}
    ${entry.priority ? `<priority>${entry.priority}</priority>` : ''}
  </url>`
  )
  .join('\n')}
</urlset>`;
  return xml;
};

/**
 * Get default portfolio sitemap entries
 */
export const getDefaultSitemapEntries = (domain: string): SitemapEntry[] => {
  const today = new Date().toISOString().split('T')[0];
  
  return [
    {
      loc: `${domain}/`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 1.0,
    },
    {
      loc: `${domain}/projects`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.9,
    },
    // Add more routes as needed
  ];
};

/**
 * Generate RSS feed XML
 * Optional: Can be used to notify search engines of new projects
 */
export const generateRssFeed = (
  projects: Array<{
    id: number;
    title: string;
    description: string;
    demo: string;
    date?: string;
  }>,
  domain: string
): string => {
  const allProjects = projects;
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Portfolio Updates</title>
    <link>${domain}</link>
    <description>Latest projects from my portfolio</description>
    <language>en-us</language>
    ${allProjects
      .map(
        (project) => `
    <item>
      <title>${project.title}</title>
      <link>${project.demo}</link>
      <description>${project.description}</description>
      ${project.date ? `<pubDate>${new Date(project.date).toUTCString()}</pubDate>` : ''}
      <guid>${domain}/projects/${project.id}</guid>
    </item>`
      )
      .join('')}
  </channel>
</rss>`;
};
